/* ============================================================
   Shannon — question engine
   ------------------------------------------------------------
   Questions are generated from the catalog rather than written
   one at a time. Add a product to data.js and it starts appearing
   in quizzes with no change here.

   Question shapes:
     { type:'choice',    prompt, options[], answer(index), why, topic }
     { type:'truefalse', prompt, answer(bool),             why, topic }
     { type:'year',      prompt, answer(number), range[],  why, topic }
   ============================================================ */

const TOPICS = {
  history:   { id: 'history',   label: 'History & Story',    emoji: '📖' },
  style:     { id: 'style',     label: 'Style & Type',        emoji: '🎨' },
  materials: { id: 'materials', label: 'Materials',           emoji: '🪵' },
  designer:  { id: 'designer',  label: 'Designers & Makers',  emoji: '✏️' },
  knowhow:   { id: 'knowhow',   label: 'Product Know-How',    emoji: '🔧' },
  photo:     { id: 'photo',     label: 'Photo ID',            emoji: '📷' }
};

/* ---------- small helpers ---------- */

function shuffle(list) {
  const out = list.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function sample(list, n) {
  return shuffle(list).slice(0, n);
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

/*
  Lowercase a phrase for mid-sentence use, but leave product names that
  carry their own capitalization alone: "PH5 Pendant Lamp" must not become
  "pH5 pendant lamp", and "Eames Lounge Chair" keeps its capitals.
*/
function softLower(text) {
  const first = text.split(' ')[0];
  const shouty = first.length > 1 && first === first.toUpperCase();
  const proper = /^[A-Z][a-z]+ [A-Z]/.test(text);
  if (shouty || proper) return text;
  return text.charAt(0).toLowerCase() + text.slice(1);
}

/* Build a multiple choice question from a correct value plus wrong ones. */
function choiceQuestion(topic, prompt, correct, wrongPool, why, tag) {
  const wrongs = shuffle(wrongPool.filter(v => v && v !== correct));
  const unique = [];
  for (const w of wrongs) {
    if (!unique.includes(w)) unique.push(w);
    if (unique.length === 3) break;
  }
  if (unique.length < 3) return null;
  const options = shuffle([correct, ...unique]);
  return {
    type: 'choice',
    topic,
    tag: tag || '',
    prompt,
    options,
    answer: options.indexOf(correct),
    why
  };
}

/* ---------- generators, one per question flavor ---------- */

const GENERATORS = [

  /* Photo ID: show the piece, name it. */
  function photoToName(product) {
    if (!product.photo) return null;
    const pool = PRODUCTS.map(p => p.name);
    const q = choiceQuestion(
      'photo',
      'What is this piece called?',
      product.name,
      pool,
      'That\'s the ' + product.name + '.',
      product.id
    );
    if (q) q.image = product.photo;
    return q;
  },

  /* Who designed it? */
  function designerOf(product) {
    const pool = PRODUCTS.map(p => p.designer);
    return choiceQuestion(
      'designer',
      'Who designed the ' + product.name + '?',
      product.designer,
      pool,
      'The ' + product.name + ' was designed by ' + product.designer + '.',
      product.id
    );
  },

  /* Which company manufactures it? */
  function manufacturerOf(product) {
    const pool = PRODUCTS.map(p => p.manufacturer);
    return choiceQuestion(
      'designer',
      'Which company manufactures the ' + product.name + '?',
      product.manufacturer,
      pool,
      'The ' + product.name + ' is manufactured by ' + product.manufacturer + '.',
      product.id
    );
  },

  /* Where did the design originate? */
  function originCountry(product) {
    const pool = PRODUCTS.map(p => p.origin);
    return choiceQuestion(
      'history',
      'Which country is the design of the ' + product.name + ' most associated with?',
      product.origin,
      pool,
      'The ' + product.name + ' traces back to ' + product.origin + '.',
      product.id
    );
  },

  /* Year introduced, answered on a slider. Skipped where no year is documented. */
  function yearIntroduced(product) {
    if (product.year == null) return null;
    return {
      type: 'year',
      topic: 'history',
      tag: product.id,
      prompt: 'What year was the ' + product.name + ' introduced?',
      answer: product.year,
      range: [1900, 2025],
      why: 'The ' + product.name + ' was introduced in ' + product.year + ' by ' + product.manufacturer + '.'
    };
  },

  /* Which design movement? */
  function styleMovement(product) {
    const pool = PRODUCTS.map(p => p.style);
    return choiceQuestion(
      'style',
      'Which design movement is the ' + product.name + ' most associated with?',
      product.style,
      pool,
      'The ' + product.name + ' is associated with ' + product.style + '.',
      product.id
    );
  },

  /* What type of piece is it? */
  function typeOf(product) {
    const pool = PRODUCTS.map(p => p.category);
    return choiceQuestion(
      'style',
      'What type of piece is the ' + product.name + '?',
      product.category,
      pool,
      'The ' + product.name + ' is a ' + product.category.toLowerCase() + '.',
      product.id
    );
  },

  /* Primary material. */
  function primaryMaterial(product) {
    const correct = product.materials[0];
    const pool = PRODUCTS.map(p => p.materials[0]);
    return choiceQuestion(
      'materials',
      'What is the primary material used in the ' + product.name + '?',
      correct,
      pool,
      'The ' + product.name + ' is built primarily from ' + softLower(correct) + '.',
      product.id
    );
  },

  /* Known for. */
  function knownFor(product) {
    const pool = PRODUCTS.map(p => p.knownFor);
    const correct = product.knownFor;
    const q = choiceQuestion(
      'style',
      'What is the ' + product.name + ' best known for?',
      correct,
      pool,
      'The ' + product.name + ' is known for ' + correct + '.',
      product.id
    );
    if (q) q.options = q.options.map(o => o.charAt(0).toUpperCase() + o.slice(1));
    if (q) q.answer = q.options.indexOf(correct.charAt(0).toUpperCase() + correct.slice(1));
    return q;
  },

  /* True / false built from a real fact, or a fact stolen from another product. */
  function factCheck(product) {
    const isTrue = Math.random() < 0.5;
    if (isTrue) {
      return {
        type: 'truefalse',
        topic: 'history',
        tag: product.id,
        prompt: product.name + ': ' + pick(product.facts),
        answer: true,
        why: 'True. That one belongs to the ' + product.name + '.'
      };
    }
    const other = pick(PRODUCTS.filter(p => p.id !== product.id));
    return {
      type: 'truefalse',
      topic: 'history',
      tag: product.id,
      prompt: product.name + ': ' + pick(other.facts),
      answer: false,
      why: 'False. That one actually belongs to the ' + other.name + '.'
    };
  },

  /* Older of two products. */
  function whichOlder(product) {
    if (product.year == null) return null;
    const other = pick(PRODUCTS.filter(
      p => p.id !== product.id && p.year != null && p.year !== product.year));
    if (!other) return null;
    const older = product.year < other.year ? product : other;
    const younger = older === product ? other : product;
    const options = shuffle([product.name, other.name]);
    return {
      type: 'choice',
      topic: 'history',
      tag: product.id,
      prompt: 'Which of these two designs came first?',
      options,
      answer: options.indexOf(older.name),
      why: 'The ' + older.name + ' arrived in ' + older.year + ', ' +
           (younger.year - older.year) + ' years before the ' + younger.name + '.'
    };
  }
];

/* Product know-how questions come straight from the catalog entries. */
function knowHowQuestion(entry) {
  const options = shuffle([entry.answer, ...entry.distractors]);
  return {
    type: 'choice',
    topic: 'knowhow',
    tag: entry.id,
    prompt: entry.question,
    options,
    answer: options.indexOf(entry.answer),
    why: entry.detail
  };
}

/* ---------- deck building ---------- */

/*
  Build a deck of `count` questions. `topics` limits which topics are
  allowed; leave it empty for everything. Duplicate prompts are dropped.
*/
function buildDeck(count, topics) {
  const allowed = topics && topics.length ? topics : Object.keys(TOPICS);
  const deck = [];
  const seen = new Set();
  let guard = 0;

  const productGens = GENERATORS;
  const wantKnowHow = allowed.includes('knowhow');
  const knowHowPool = shuffle(KNOWHOW);
  let knowHowIndex = 0;

  while (deck.length < count && guard < count * 40) {
    guard++;
    let q = null;

    // Roughly a third know-how when it is in play, so quizzes mix
    // product recall with the vocabulary used on the floor.
    const goKnowHow = wantKnowHow &&
      (allowed.length === 1 || Math.random() < 0.34) &&
      knowHowIndex < knowHowPool.length;

    if (goKnowHow) {
      q = knowHowQuestion(knowHowPool[knowHowIndex++]);
    } else {
      const gen = pick(productGens);
      q = gen(pick(PRODUCTS));
      if (q && !allowed.includes(q.topic)) q = null;
    }

    if (!q) continue;
    // Keyed on prompt + tag, not prompt alone: photo questions all share the
    // same prompt text ("What is this piece called?"), so prompt alone would
    // treat every photo question after the first as a duplicate.
    const key = q.prompt + '|' + (q.tag || '');
    if (seen.has(key)) continue;
    seen.add(key);
    deck.push(q);
  }

  return deck;
}

/* ---------- Deep Dive chapters ---------- */

/*
  A chapter teaches first and quizzes second. Learn cards are pulled from
  the same catalog, so the answer to every question was on a card.
*/
function productCard(product) {
  return {
    kind: 'product',
    title: product.name,
    subtitle: product.designer + '  ·  ' + product.manufacturer +
              (product.year == null ? '' : '  ·  est. ' + product.year),
    body: product.history,
    bullets: product.facts,
    chips: [product.category, product.style].concat(product.materials.slice(0, 2))
  };
}

function knowHowCard(entry) {
  return {
    kind: 'term',
    title: entry.term,
    subtitle: entry.topic + '  ·  ' + entry.short,
    body: entry.detail,
    bullets: [],
    chips: [entry.topic]
  };
}

/*
  Build `n` chapters. Each gets its own slice of products, so a sixty
  minute session covers the catalog instead of repeating the same
  three names.
*/
function buildChapters(n, questionsPerChapter, topics) {
  const allowed = topics && topics.length ? topics : Object.keys(TOPICS);
  const productOrder = shuffle(PRODUCTS);
  const termOrder = shuffle(KNOWHOW);
  const chapters = [];
  const perChapter = Math.max(2, Math.ceil(productOrder.length / n));

  for (let i = 0; i < n; i++) {
    const products = productOrder.slice(i * perChapter, i * perChapter + perChapter);
    const roster = products.length ? products : sample(PRODUCTS, perChapter);
    const term = termOrder[i % termOrder.length];

    const cards = roster.slice(0, 3).map(productCard);
    cards.push(knowHowCard(term));

    /* Questions drawn only from what the cards just taught, filtered to the allowed topics. */
    const pool = [];
    roster.forEach(p => {
      GENERATORS.forEach(gen => {
        const q = gen(p);
        if (q && allowed.includes(q.topic)) pool.push(q);
      });
    });
    if (allowed.includes('knowhow')) pool.push(knowHowQuestion(term));

    const questions = [];
    const seen = new Set();
    shuffle(pool).forEach(q => {
      if (questions.length >= questionsPerChapter) return;
      const key = q.prompt + '|' + (q.tag || '');
      if (seen.has(key)) return;
      seen.add(key);
      questions.push(q);
    });

    chapters.push({
      index: i,
      title: roster.map(p => p.name).slice(0, 2).join(' + ') +
             (roster.length > 2 ? ' and more' : ''),
      cards,
      questions
    });
  }
  return chapters;
}
