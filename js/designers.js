/* ============================================================
   Provenance — designers and videos
   ------------------------------------------------------------
   DESIGNERS holds one profile per person, duo or studio. A profile
   is linked to products through `credits`: the exact `designer`
   strings used in data.js. One product can belong to several
   profiles (the LC4 is credited to Le Corbusier, Pierre Jeanneret
   and Charlotte Perriand), and one profile can cover several
   strings (George Nelson also covers "George Nelson (Irving Harper)").

   Sourcing: dates and origins come from each designer's Wikipedia
   article, or where there is none, from the designer's own site or
   manufacturer page named in `source`. Where no reliable date was
   found the field is left blank rather than guessed. Bios and
   talking points were written only from that material plus the
   product entries in data.js.

   VIDEOS: every YouTube id here was confirmed to exist through
   YouTube's oEmbed endpoint, and the title and channel are what
   oEmbed returned, not what a search snippet claimed. Only official
   manufacturers, museums and archives, established press and design
   education channels are included. Re-check with the snippet in
   README.md before adding more; search results regularly list ids
   that no longer exist or mislabel what a video is.
   ============================================================ */

const DESIGNERS = [
  {
    "id": "eames",
    "name": "Charles and Ray Eames",
    "role": "American husband-and-wife design partners",
    "years": "Charles 1907–1978 · Ray 1912–1988",
    "origin": "United States",
    "bio": "Charles and Ray Eames were an American married couple who worked as creative partners through the Eames Office, spanning furniture, industrial and graphic design, and film. Charles was the public face, but Ray worked with him as a creative partner. Their molded plywood research, begun in the 1940s, shows up across the DWR line, from the Eames Molded Plywood Lounge Chair (LCW) to the Eames Lounge Chair and Ottoman, the Eames Molded Plastic Armchair and the Eames Aluminum Group Management Chair.",
    "facts": [
      "Ray and Charles were true creative partners; the Eames Office also made films and graphics, not only furniture.",
      "The LCW came from leg splints they developed for the Navy, and MoMA later called it the best design of the twentieth century.",
      "The Lounge Chair was a gift for director Billy Wilder, and it debuted live on NBC television."
    ],
    "credits": [
      "Charles and Ray Eames"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Charles_and_Ray_Eames"
    }
  },
  {
    "id": "george-nelson",
    "name": "George Nelson",
    "role": "American industrial designer for Herman Miller",
    "years": "1908–1986",
    "origin": "United States",
    "bio": "George Nelson was an American industrial designer and is considered a founder of American modernist design. As lead designer for Herman Miller, he and his studio, George Nelson Associates, produced much of the company's 20th-century modernist furniture. Pieces like the Nelson Platform Bench, the Nelson Thin Edge Buffet and the Nelson Swag Leg Desk show his taste for plain, flexible forms. Some of the studio's best-known designs were drawn by staff, including Irving Harper.",
    "facts": [
      "Nelson was Herman Miller's design director, and the Basic Cabinet Series was among his first pieces there.",
      "The Platform Bench has no fixed job: coffee table, entry bench or extra seat, depending on the room.",
      "Swag Leg is named for swaging, a process that curves and tapers metal tube. His studio designed the whole group."
    ],
    "credits": [
      "George Nelson",
      "George Nelson (Irving Harper)"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/George_Nelson_(designer)"
    }
  },
  {
    "id": "irving-harper",
    "name": "Irving Harper",
    "role": "American designer at George Nelson Associates",
    "years": "1916–2015",
    "origin": "United States",
    "bio": "Irving Harper was an American industrial designer who worked for George Nelson Associates on Herman Miller designs. He became one of the most prolific designers of the modernist style. He also drew the Herman Miller company logo. At DWR his work appears under Nelson's studio name, notably the Marshmallow Sofa and the Coconut Chair, both designed in Nelson's office largely by Harper.",
    "facts": [
      "Harper drew the Herman Miller logo as well as furniture, so his work is on the company's name itself.",
      "The Marshmallow Sofa is eighteen identical round cushions on a steel frame, and it sold poorly when first released.",
      "The Coconut Chair's shell is based on about one-eighth of a coconut, floating on thin steel rod legs."
    ],
    "credits": [
      "George Nelson (Irving Harper)"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Irving_Harper"
    }
  },
  {
    "id": "arne-jacobsen",
    "name": "Arne Jacobsen",
    "role": "Danish architect and furniture designer",
    "years": "1902–1971",
    "origin": "Denmark",
    "bio": "Arne Jacobsen was a Danish architect remembered for his contribution to architectural functionalism and for the worldwide success of his simple, well-designed chairs. He liked to design a whole building, furniture and fittings included. The Egg Chair, Swan Chair, Drop Chair and AJ Floor Lamp all came from his Royal Hotel commission in Copenhagen. His Series 7 Chair, a single molded veneer shell, became one of the best-selling chairs of the twentieth century.",
    "facts": [
      "Egg, Swan, Drop and the AJ lamp were all designed for one building, the Royal Hotel in Copenhagen.",
      "The Series 7 is often cited as one of the best-selling chairs ever, and it grew out of his earlier Ant chair.",
      "The Egg's high wings were meant to give privacy in an open hotel lobby."
    ],
    "credits": [
      "Arne Jacobsen"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Arne_Jacobsen"
    }
  },
  {
    "id": "hans-wegner",
    "name": "Hans Wegner",
    "role": "Danish furniture designer, the King of Chairs",
    "years": "1914–2007",
    "origin": "Denmark",
    "bio": "Hans Wegner was a Danish furniture designer whose work helped spread mid-century Danish design worldwide. He is described as working in an Organic Functionality style and is called the King of Chairs. In his lifetime he designed over 500 chairs, more than 100 of which went into mass production. DWR sells several, including the Wishbone Chair (CH24), the CH07 Shell Chair, the CH25 Lounge Chair, the CH20 Elbow Chair and the Ox Chair.",
    "facts": [
      "Wegner designed over 500 chairs in his lifetime, and more than 100 of them went into production.",
      "The Wishbone Chair takes its cue from Ming-dynasty Chinese chairs, and each paper cord seat is woven by hand.",
      "The CH20 Elbow Chair sat in his archive for almost fifty years before Carl Hansen & Søn produced it in 2005."
    ],
    "credits": [
      "Hans Wegner"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Hans_Wegner"
    }
  },
  {
    "id": "eero-saarinen",
    "name": "Eero Saarinen",
    "role": "Finnish-American architect and industrial designer",
    "years": "1910–1961",
    "origin": "Finland / United States",
    "bio": "Eero Saarinen was a Finnish-American architect and industrial designer, and the son of architect Eliel Saarinen. His architecture includes the TWA Flight Center at JFK, the Dulles Airport main terminal and the Gateway Arch. In furniture, he shaped chairs and tables as continuous, sculptural forms. The Womb Chair grew from a request by Florence Knoll, and the Saarinen Dining Table and Saarinen Tulip Armchair share one tapered pedestal base.",
    "facts": [
      "Besides furniture, Saarinen designed the Gateway Arch and the TWA Flight Center at JFK airport.",
      "Florence Knoll asked for a chair like a basket of pillows, and the Womb Chair was his answer.",
      "The Tulip pedestal was meant to clear up the clutter of legs under a table, so the piece reads as one form."
    ],
    "credits": [
      "Eero Saarinen"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Eero_Saarinen"
    }
  },
  {
    "id": "florence-knoll",
    "name": "Florence Knoll",
    "role": "American architect and furniture designer, Knoll co-founder",
    "years": "1917–2019",
    "origin": "United States",
    "bio": "Florence Knoll was an American architect, interior designer and furniture designer who is credited with revolutionizing office design. With her husband Hans Knoll she built Knoll Associates into a leader in furniture and interiors. Her modernist look used clean lines and clear geometries, softened with texture, organic shape and color. She trained under Mies van der Rohe and Eero Saarinen. At DWR, see the Florence Knoll Sofa, the Florence Knoll Bench and the Florence Knoll Credenza.",
    "facts": [
      "She and her husband Hans Knoll founded the Knoll company, and she ran its Knoll Planning Unit for whole interiors.",
      "She described pieces like her sofa as filler, meant to sit quietly beside the more sculptural chairs Knoll sold.",
      "She trained under Mies van der Rohe and Eero Saarinen, and her furniture reads as architecture rather than upholstery."
    ],
    "credits": [
      "Florence Knoll"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Florence_Knoll"
    }
  },
  {
    "id": "le-corbusier",
    "name": "Le Corbusier",
    "role": "Swiss-born French architect and designer",
    "years": "1887–1965",
    "origin": "Switzerland / France",
    "bio": "Le Corbusier, born Charles-Edouard Jeanneret, was a French-Swiss architect, painter and urban planner, and a pioneer of modern architecture. He planned the city of Chandigarh in India, and seventeen of his projects are UNESCO World Heritage Sites. His name leads the credit on the LC collection that DWR sells, including the LC4 Chaise Longue and the LC2 Petit Modele Armchair. Cassina holds the license to produce his furniture.",
    "facts": [
      "He was born Charles-Edouard Jeanneret in Switzerland and took the name Le Corbusier; he became a French citizen in 1930.",
      "Le Corbusier reportedly called the LC3 sofa a true machine for sitting.",
      "Cassina has held the license to his furniture since the 1960s, and its LC6 tables are signed and numbered."
    ],
    "credits": [
      "Le Corbusier, Pierre Jeanneret, and Charlotte Perriand"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Le_Corbusier"
    }
  },
  {
    "id": "pierre-jeanneret",
    "name": "Pierre Jeanneret",
    "role": "Swiss architect, Le Corbusier's cousin and collaborator",
    "years": "1896–1967",
    "origin": "Switzerland",
    "bio": "Pierre Jeanneret was a Swiss architect who collaborated with his cousin, Charles-Edouard Jeanneret, known as Le Corbusier, for about twenty years. At DWR his name appears in the shared credit on the LC collection: the LC4 Chaise Longue, LC2 Petit Modele Armchair, LC3 Grand Modele Sofa and LC6 Table. That furniture was developed together for a single 1929 exhibition, so this is a team design rather than one person's work.",
    "facts": [
      "Pierre was Le Corbusier's cousin, and the two worked together for about twenty years.",
      "His name sits beside Le Corbusier and Perriand on the LC collection, which was a team effort.",
      "The LC collection debuted together at one 1929 exhibition: the LC2, LC3 and LC4 belong to one family."
    ],
    "credits": [
      "Le Corbusier, Pierre Jeanneret, and Charlotte Perriand"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Pierre_Jeanneret"
    }
  },
  {
    "id": "charlotte-perriand",
    "name": "Charlotte Perriand",
    "role": "French architect and designer",
    "years": "1903–1999",
    "origin": "France",
    "bio": "Charlotte Perriand was a French architect and designer who believed better design helps build a better society. She aimed to create functional living spaces and liked to spend time in a place before designing for it. She did much of the hands-on design work on the LC4 Chaise Longue, though the piece was long credited mainly to Le Corbusier. She is credited on the LC2 Petit Modele Armchair and the rest of the LC collection.",
    "facts": [
      "Perriand did much of the hands-on design of the LC4 Chaise Longue, though it was long credited to Le Corbusier alone.",
      "She was a full collaborator on the LC collection, not an assistant.",
      "She wrote that the art of dwelling extends into the art of living, in harmony with our environment."
    ],
    "credits": [
      "Le Corbusier, Pierre Jeanneret, and Charlotte Perriand"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Charlotte_Perriand"
    }
  },
  {
    "id": "castiglioni",
    "name": "Achille and Pier Giacomo Castiglioni",
    "role": "Italian architect brothers and lighting designers",
    "years": "Achille 1918–2002 · Pier Giacomo 1913–1968",
    "origin": "Italy",
    "bio": "Achille and Pier Giacomo Castiglioni were Italian architects and designers, brothers who worked together. Achille's furniture, lighting and objects are considered icons of post-war Italian design. Their DWR lamps show a taste for a few simple, honestly used parts: the Arco Floor Lamp with its marble base and long steel arc, the Taccia Lamp with its loose glass bowl, and the Snoopy Lamp with its swiveling enameled shade.",
    "facts": [
      "Arco lights a dining table like a hanging pendant with no ceiling wiring, thanks to a heavy marble base and long steel arc.",
      "Taccia's glass bowl is not fastened down. It rests in its cup by weight and shape alone.",
      "Snoopy's nickname is unofficial and not a licensed reference to the cartoon character; the shade swivels on a marble base."
    ],
    "credits": [
      "Achille and Pier Giacomo Castiglioni"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Achille_Castiglioni"
    }
  },
  {
    "id": "jens-risom",
    "name": "Jens Risom",
    "role": "Danish-American furniture designer",
    "years": "1916–2016",
    "origin": "Denmark / United States",
    "bio": "Jens Risom was a Danish-American furniture designer and an exemplar of mid-century modern design. He was one of the first designers to bring Scandinavian design to the United States. He designed the Risom Lounge Chair for Hans Knoll's first furniture line during World War II, weaving surplus parachute webbing across a wood frame when steel and rubber were rationed. DWR also sells the Risom Desk and the Risom Outdoor Lounge Chair.",
    "facts": [
      "He was among the first to introduce Scandinavian design to the American market.",
      "With steel and rubber rationed in the war, he used surplus parachute webbing for the Risom Lounge Chair.",
      "He designed the Risom Desk for his own house, calling it really a writing surface rather than a desk."
    ],
    "credits": [
      "Jens Risom"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Jens_Risom"
    }
  },
  {
    "id": "mies",
    "name": "Ludwig Mies van der Rohe",
    "role": "German-American architect and modernist pioneer",
    "years": "1886–1969",
    "origin": "Germany / United States",
    "bio": "Ludwig Mies van der Rohe was a German-American architect, and a pioneer of modern architecture. He was the last director of the Bauhaus and later headed the architecture school at what is now the Illinois Institute of Technology. He is tied to the sayings less is more and God is in the details. DWR carries his MR Chair, Brno Chair and Barcelona Table, and the Barcelona Chair, which he designed with Lilly Reich.",
    "facts": [
      "Mies was the last director of the Bauhaus, then moved to the U.S. and led architecture at IIT.",
      "The MR Chair is one continuous curved steel tube with no rear legs, and it came out about two years before the Barcelona Chair.",
      "The Brno Chair was designed for the Tugendhat House dining room in Brno and comes in flat-bar or tubular steel."
    ],
    "credits": [
      "Ludwig Mies van der Rohe",
      "Ludwig Mies van der Rohe and Lilly Reich"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Ludwig_Mies_van_der_Rohe"
    }
  },
  {
    "id": "lilly-reich",
    "name": "Lilly Reich",
    "role": "German designer of textiles, furniture and interiors",
    "years": "1885–1947",
    "origin": "Germany",
    "bio": "Lilly Reich was a German designer who specialized in textiles, furniture, interiors and exhibition spaces. She collaborated closely with Ludwig Mies van der Rohe for more than ten years, from 1925 until he left for the U.S. in 1938, and was an important figure in the early Modern Movement. In DWR's catalog she shares credit for the Barcelona Chair and the Barcelona Stool, both made for the 1929 German Pavilion in Barcelona.",
    "facts": [
      "Reich and Mies worked together for over a decade, from 1925 until he emigrated in 1938.",
      "Her fame came after her death, once historians researched how much she contributed to Mies's work.",
      "The Barcelona Chair carries both names. It was made for Spain's King Alfonso XIII and Queen Victoria Eugenia at the German Pavilion opening."
    ],
    "credits": [
      "Ludwig Mies van der Rohe and Lilly Reich"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Lilly_Reich"
    }
  },
  {
    "id": "marcel-breuer",
    "name": "Marcel Breuer",
    "role": "Hungarian-American Bauhaus designer and architect",
    "years": "1902–1981",
    "origin": "Hungary / United States",
    "bio": "Marcel Breuer was a Hungarian-American modernist architect and furniture designer who studied and later taught at the Bauhaus. He moved to the United States in 1937. The New York Times has called two of his Bauhaus chairs, the Wassily and the Cesca, among the most important of the 20th century. DWR sells both, the Wassily Chair (Model B3) and the Cesca Chair, along with the Laccio Table.",
    "facts": [
      "He got the Wassily idea from his bicycle's handlebars and realized steel tube could be bent into furniture.",
      "The Wassily is widely considered the first tubular-steel chair, nicknamed for Kandinsky, a Bauhaus colleague.",
      "The Cesca is named for his daughter Francesca, and its steel frame is paired with hand-woven cane for warmth."
    ],
    "credits": [
      "Marcel Breuer"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Marcel_Breuer"
    }
  },
  {
    "id": "verner-panton",
    "name": "Verner Panton",
    "role": "Danish furniture and interior designer",
    "years": "1926–1998",
    "origin": "Denmark",
    "bio": "Verner Panton is considered one of Denmark's most influential 20th-century furniture and interior designers. He made innovative, futuristic designs in a range of materials, especially plastics, in vibrant colors. His style felt very 1960s but returned to popularity at the end of the twentieth century. His Panton Chair, a one-piece cantilevered shell, went into production at Vitra in 1967, and DWR also sells the Panthella Table Lamp and the VP3 Flowerpot Table Lamp.",
    "facts": [
      "The Panton Chair took roughly a decade of experiments before plastics could hold its one-piece S-curve; Vitra produced it in 1967.",
      "He worked in plastics and bright color, so his pieces read as 1960s pop.",
      "The Flowerpot's upper half-sphere hides the bulb, so only reflected light escapes."
    ],
    "credits": [
      "Verner Panton"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Verner_Panton"
    }
  },
  {
    "id": "alexander-girard",
    "name": "Alexander Girard",
    "role": "American architect and textile designer",
    "years": "1907–1993",
    "origin": "United States",
    "bio": "Alexander Girard worked as an architect, interior designer, furniture designer, industrial designer and textile designer. He ran Herman Miller's textile division from 1952 into the 1970s and designed more than three hundred textiles there. That color-and-pattern sensibility runs through his DWR pieces: the Girard Color Wheel Ottoman, with wool wedges in a pinwheel, and the Girard Flower Table, which has a petal-shaped base beneath a scalloped top.",
    "facts": [
      "He ran Herman Miller's textile division for over two decades and designed more than three hundred textiles.",
      "On the Color Wheel Ottoman, his textile work becomes furniture: colored wool wedges arranged as a pinwheel.",
      "The Flower Table comes in two sizes and works indoors or outdoors."
    ],
    "credits": [
      "Alexander Girard"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Alexander_Girard"
    }
  },
  {
    "id": "harry-bertoia",
    "name": "Harry Bertoia",
    "role": "Italian-born American sculptor and furniture designer",
    "years": "1915–1978",
    "origin": "Italy / United States",
    "bio": "Harry Bertoia was an Italian-born American artist, sound-art sculptor and furniture designer. He trained as a sculptor and metalworker before Florence Knoll invited him to design furniture, and he treated a chair as sculpture that happens to hold weight. The Bertoia Diamond Chair uses welded wire mesh that lets air and light pass through. He designed only one furniture collection, which also includes the Bertoia Bench.",
    "facts": [
      "Bertoia was a sculptor first. He reportedly said his chairs were mostly made of air.",
      "He designed just one furniture collection in his career, and the Bertoia Bench was its first piece.",
      "Diamond Chair royalties helped fund his later sculpture and sound-art work."
    ],
    "credits": [
      "Harry Bertoia"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Harry_Bertoia"
    }
  },
  {
    "id": "isamu-noguchi",
    "name": "Isamu Noguchi",
    "role": "American sculptor, furniture and landscape designer",
    "years": "1904–1988",
    "origin": "United States",
    "bio": "Isamu Noguchi was an American artist, furniture designer and landscape architect whose career spanned six decades from the 1920s. He is known for sculpture and public art, and also designed stage sets for Martha Graham, the Akari light sculptures, and furniture that is still sold. That sculptural approach shows in the Noguchi Table, whose two identical wood base pieces interlock beneath a glass top, and the Noguchi Rudder Table.",
    "facts": [
      "Noguchi was first a sculptor. He designed sets for Martha Graham and the Akari light sculptures too.",
      "On the Noguchi Table, two identical curved wood pieces interlock, and the glass rests there by gravity and friction alone.",
      "On the Rudder Table, the thin hairpin steel legs are meant to disappear, so the top seems to sit on one wood leg."
    ],
    "credits": [
      "Isamu Noguchi"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Isamu_Noguchi"
    }
  },
  {
    "id": "philippe-starck",
    "name": "Philippe Starck",
    "role": "French designer of products, interiors and architecture",
    "years": "b. 1949",
    "origin": "France",
    "bio": "Philippe Starck is a French industrial architect and designer known for interiors, architecture, household objects, furniture and boats. Most of his best-known pieces date from the 1980s and 1990s. He is considered a pioneer of democratic design, aiming to give the best service using minimal materials. At DWR, look to the Louis Ghost Chair, a Louis XVI armchair molded in one piece of clear polycarbonate, and the Broom Counter Stool for Emeco.",
    "facts": [
      "He is seen as a pioneer of democratic design: the best service with the least material.",
      "The Louis Ghost Chair is a Louis XVI armchair in one piece of clear polycarbonate, and it stacks six high.",
      "For the Broom Counter Stool he challenged Emeco to build from waste on its own factory floor."
    ],
    "credits": [
      "Philippe Starck",
      "Philippe Starck and Eugeni Quitllet"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Philippe_Starck"
    }
  },
  {
    "id": "eugeni-quitllet",
    "name": "Eugeni Quitllet",
    "role": "Spanish designer, Philippe Starck collaborator",
    "years": "b. 1972",
    "origin": "Spain",
    "bio": "Eugeni Quitllet is a Spanish designer, born in Ibiza in 1972, who graduated from the Llotja School of Art in Barcelona in 1996. He met Philippe Starck in Formentera in 2001 and began a long collaboration. At DWR he shares credit on the Masters Chair, made by Kartell, which won a Good Design Award in 2010 and a Red Dot award in 2013. He also designed the To'taime coat stand for Alias.",
    "facts": [
      "He met Philippe Starck in Formentera in 2001. It was the start of their long collaboration.",
      "The Masters Chair won a Good Design Award in 2010 and a Red Dot award in 2013.",
      "He calls himself a Disoñador, a designer plus a dreamer."
    ],
    "credits": [
      "Philippe Starck and Eugeni Quitllet"
    ],
    "source": {
      "label": "Eugeni Quitllet",
      "url": "https://eugeniquitllet.com/about-eugeni/"
    }
  },
  {
    "id": "pierre-paulin",
    "name": "Pierre Paulin",
    "role": "French furniture and interior designer",
    "years": "1927–2009",
    "origin": "France",
    "bio": "Pierre Paulin was a French furniture and interior designer, best known for his 1960s work with the Dutch manufacturer Artifort and for his 1970s interior projects. He was central to the idea of low-level living, and DWR carries that spirit in the Pacha Outdoor Lounge Chair, an enveloping form set just above the ground. The Elysée Bookshelf comes from his 1971 commission for President Pompidou's private apartments at the Élysée Palace.",
    "facts": [
      "Paulin is known for experimental use of materials, and he worked with Dutch maker Artifort in the 1960s.",
      "The Elysée Bookshelf began as a 1971 design for the president of France's private apartments.",
      "Pacha is low-level seating: it sits only a few inches off the floor on a swivel base."
    ],
    "credits": [
      "Pierre Paulin"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Pierre_Paulin"
    }
  },
  {
    "id": "poul-henningsen",
    "name": "Poul Henningsen",
    "role": "Danish architect, critic and lamp designer",
    "years": "1894–1967",
    "origin": "Denmark",
    "bio": "Poul Henningsen, known in Denmark simply as PH, was an author, critic, architect and designer and a leading figure in Danish cultural life between the wars. He is most associated with the PH lamp series of glare-free, shaded lamps, made by Louis Poulsen. DWR sells two of them: the PH5 Pendant Lamp, and the PH Artichoke Lamp, with its seventy-two overlapping leaves.",
    "facts": [
      "He spent decades studying how to shade a bulb so the light is warm and soft, never harsh or glaring.",
      "The PH5 shade curves follow a logarithmic spiral, and he reworked it after bulb shapes changed.",
      "The Artichoke was made for a Copenhagen restaurant, and it takes its name from the vegetable."
    ],
    "credits": [
      "Poul Henningsen"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Poul_Henningsen"
    }
  },
  {
    "id": "warren-platner",
    "name": "Warren Platner",
    "role": "American architect and interior designer",
    "years": "1919–2006",
    "origin": "United States",
    "bio": "Warren Platner was an American architect and interior designer who worked with I.M. Pei and Eero Saarinen before creating his own furniture collection. That collection is still seen as an icon of 1960s modernism. He also designed prominent New York interiors, including the Ford Foundation headquarters and the original Windows on the World restaurant. DWR sells the Platner Lounge Chair and Table and the Platner Dining Table, built from welded steel rods.",
    "facts": [
      "Platner wanted modernism to be decorative and graceful, not strictly minimal, and he named Louis XV as a reference.",
      "The lattice of curved steel rods is so labor-intensive that a single piece can take as many as a thousand welds.",
      "He designed the Ford Foundation headquarters interiors and the original Windows on the World restaurant in New York."
    ],
    "credits": [
      "Warren Platner"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Warren_Platner"
    }
  },
  {
    "id": "xavier-pauchard",
    "name": "Xavier Pauchard",
    "role": "French galvanizer and founder of Tolix",
    "years": "1880–1948",
    "origin": "France",
    "bio": "Xavier Pauchard was born in Burgundy into a family of zinc roofers. Around 1907 he pioneered hot-dip galvanizing of sheet steel in France, then founded a factory for galvanized household goods and registered the Tolix trademark in 1927. He brought that rust-proofing to furniture, and DWR sells the Tolix Chair A and the Tolix Marais Stool. Both are still made in Autun, France.",
    "facts": [
      "Pauchard started as a roofer, and his galvanizing skill is why these steel pieces can live outdoors.",
      "The Chair A won recognition at the 1937 Paris Exposition, and it is still made in Autun, France.",
      "The Marais Stool shares the Chair A's perforated seat, so the two stack together in cafes."
    ],
    "credits": [
      "Xavier Pauchard"
    ],
    "source": {
      "label": "Tolix",
      "url": "https://www.tolix.com/designer/xavier-pauchard"
    }
  },
  {
    "id": "alvar-aalto",
    "name": "Alvar Aalto",
    "role": "Finnish architect and designer",
    "years": "1898–1976",
    "origin": "Finland",
    "bio": "Alvar Aalto was a Finnish architect who also designed furniture, textiles, glassware, sculptures and paintings. His furniture is considered Scandinavian Modern, prized for its simplicity, its care with wood and his patented bending techniques. His invention of bent plywood furniture influenced Charles and Ray Eames and George Nelson. At DWR, the L-Leg Round Table shows his wood-bending method, made in Finland.",
    "facts": [
      "Aalto often designed a building and its furniture, lamps and glassware together, with his first wife Aino.",
      "His bent plywood invention had a profound influence on the Eameses and George Nelson.",
      "The L-Leg was developed with manufacturer Otto Korhonen, and Aalto called it the little sister of the architectural column."
    ],
    "credits": [
      "Alvar Aalto"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Alvar_Aalto"
    }
  },
  {
    "id": "anna-castelli-ferrieri",
    "name": "Anna Castelli Ferrieri",
    "role": "Italian architect and industrial designer",
    "years": "1918–2006",
    "origin": "Italy",
    "bio": "Anna Castelli Ferrieri was an Italian architect and industrial designer, best known for helping bring plastics into mainstream design and for co-founding the furniture company Kartell. She was among the first women to graduate in architecture from the Politecnico di Milano and later served as Kartell's art director. DWR sells her Componibili Storage Unit, a stackable modular design of cylindrical units with sliding doors.",
    "facts": [
      "She co-founded Kartell and is remembered for making plastic a serious, everyday material for furniture.",
      "Componibili is simply Italian for modular, and each unit locks into the next with a tongue-and-groove edge.",
      "She was among the first women to earn an architecture degree at the Politecnico di Milano."
    ],
    "credits": [
      "Anna Castelli Ferrieri"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Anna_Castelli_Ferrieri"
    }
  },
  {
    "id": "stumpf-chadwick",
    "name": "Bill Stumpf and Don Chadwick",
    "role": "American office-seating designers",
    "years": "Stumpf 1936–2006 · Chadwick b. 1936",
    "origin": "United States",
    "bio": "Bill Stumpf and Don Chadwick were American designers of office seating. Stumpf was noted for detailed ergonomic study and for setting scientific criteria for chair design, while Chadwick specializes in office seating. Together they designed the Aeron Chair, which DWR sells. Its taut, breathable Pellicle mesh replaces foam padding, and the chair became a fixture of 1990s technology-company offices and later entered a major museum's permanent collection.",
    "facts": [
      "Stumpf believed a chair should support the body upright, reclined or leaning forward, not one fixed posture.",
      "Stumpf also co-designed the Embody and Ergon chairs, and Wikipedia calls the Aeron the world's most-produced office chair.",
      "The mesh stays cool and keeps its shape, whereas foam traps heat and breaks down."
    ],
    "credits": [
      "Bill Stumpf and Don Chadwick"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Bill_Stumpf"
    }
  },
  {
    "id": "borge-mogensen",
    "name": "Børge Mogensen",
    "role": "Danish furniture designer",
    "years": "1914–1972",
    "origin": "Denmark",
    "bio": "Børge Mogensen was a Danish furniture designer and a leading figure among the generation that created Danish Modern. Alongside Arne Jacobsen and Hans Wegner, he built international recognition for Danish furniture, and his designs have stayed in demand for more than half a century. DWR sells the BM0253 Bookcase, which he drew in 1958 and which pairs FSC-certified wood shelving with a slim tubular steel frame.",
    "facts": [
      "Mogensen helped create the concept of Danish Modern, along with Jacobsen and Wegner.",
      "He was known for plain, durable furniture for ordinary homes, and this bookcase follows that idea.",
      "He drew the BM0253 in 1958, but it only went into production recently, at Carl Hansen & Søn."
    ],
    "credits": [
      "Børge Mogensen"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/B%C3%B8rge_Mogensen"
    }
  },
  {
    "id": "charles-pollock",
    "name": "Charles Pollock",
    "role": "American industrial designer",
    "years": "1930–2013",
    "origin": "United States",
    "bio": "Charles Pollock was an American industrial designer who created sleek furniture, most notably an office chair held together by a single aluminum band, known as the Pollock Chair. It became a staple of American executive offices in the 1960s. DWR carries the Pollock Executive Chair, which pads a fiberglass shell just enough to look tailored, wrapped in a continuous ribbed upholstery pattern.",
    "facts": [
      "Pollock's chair appears in the Metropolitan Museum of Art and the Smithsonian, and on the TV show Mad Men.",
      "Its silhouette has been so widely copied that it helped define what an executive chair looks like.",
      "Pollock refined it for years before Knoll put it into production."
    ],
    "credits": [
      "Charles Pollock"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Charles_Pollock_(designer)"
    }
  },
  {
    "id": "bonderup-thorup",
    "name": "Claus Bonderup and Torsten Thorup",
    "role": "Danish architect and lighting designer duo",
    "years": "Bonderup 1943–2022",
    "origin": "Denmark",
    "bio": "Claus Bonderup and Torsten Thorup collaborated on lighting from 1967 to 1992. Their lamps are known for geometric forms, simplicity and functionalism, in the rationalist spirit of Danish modernism. They made the Semi pendant in 1968 while still students, and the Semi Pendant Lamp remains in DWR's range. Bonderup went on to become an architect and professor, and his work is in MoMA's collection.",
    "facts": [
      "They designed the Semi as students in 1968, and it won first prize in their school's design competition.",
      "The shade profile comes from the negative space between two circles placed back to back.",
      "Bonderup's work is in the permanent collection of the Museum of Modern Art in New York."
    ],
    "credits": [
      "Claus Bonderup and Torsten Thorup"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Claus_Bonderup"
    }
  },
  {
    "id": "dwr-studio",
    "name": "DWR Studio",
    "role": "Design Within Reach's in-house design team",
    "years": "In-house since the 2000s",
    "origin": "United States",
    "bio": "DWR Studio is Design Within Reach's in-house design team, working since the 2000s. Rather than licensing a design from an outside name, it develops pieces of its own to sit beside the historic designs on the DWR floor. The Min Sofa is an example: a clean-lined, track-arm sofa built to fill a gap in the vintage-reissue catalog, sized and priced for apartment living.",
    "facts": [
      "Min is a Design Within Reach house design, not a licensed reissue of a historic piece.",
      "It was sized for smaller city apartments, so it suits customers who find classic sofas too large.",
      "It comes in a choice of performance fabric or leather covers."
    ],
    "credits": [
      "DWR Studio"
    ],
    "source": {
      "label": "Design Within Reach",
      "url": "https://www.dwr.com"
    }
  },
  {
    "id": "doshi-levien",
    "name": "Doshi Levien",
    "role": "London studio of Nipa Doshi and Jonathan Levien",
    "years": "Founded 2000 · Nipa Doshi b. 1971 · Jonathan Levien b. 1972",
    "origin": "United Kingdom",
    "bio": "Doshi Levien is a London studio founded in 2000 by Nipa Doshi, who trained at the National Institute of Design in India, and Jonathan Levien, who trained first as a fine cabinetmaker. They met at the Royal College of Art and celebrate a hybrid of cultures, themes and technologies. DWR sells their Quilton Sectional, a quilted landscape sofa system on a platform bound in vegan leather.",
    "facts": [
      "The studio was founded in 2000 by a married couple who met at the Royal College of Art.",
      "They have worked with Moroso, Cappellini, B&B Italia and HAY, and were in Cooper Hewitt's Future Legends of Design in 2008.",
      "Quilton is a sofa system, so it works as a central surface for working, socializing and lounging."
    ],
    "credits": [
      "Doshi Levien"
    ],
    "source": {
      "label": "Doshi Levien",
      "url": "https://doshilevien.com/"
    }
  },
  {
    "id": "eileen-gray",
    "name": "Eileen Gray",
    "role": "Irish-born architect and furniture designer",
    "years": "1878–1976",
    "origin": "Ireland / France",
    "bio": "Eileen Gray was an Irish interior designer, furniture designer and architect who became a pioneer of the Modern Movement in architecture. With Jean Badovici she made her most famous work, the house E-1027 at Roquebrune-Cap-Martin, France. DWR sells the Adjustable Table E1027, named for that house. Its C-shaped cantilevered base lets the top hover over a bed or chair, and the height adjusts by sliding the column.",
    "facts": [
      "Gray is counted among the pioneers of the Modern Movement, in architecture as well as furniture.",
      "The table takes its name from E-1027, the seaside house in France that is her best-known work.",
      "The C-shaped base slides under a bed or sofa, and the column slides to change the height."
    ],
    "credits": [
      "Eileen Gray"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Eileen_Gray"
    }
  },
  {
    "id": "emeco",
    "name": "Emeco",
    "role": "American maker of the Navy Chair",
    "years": "Since 1944",
    "origin": "United States",
    "bio": "Emeco is a company based in Hanover, Pennsylvania, founded in 1944 by Wilton C. Dinges. The Emeco 1006, known as the Navy Chair, has been in continuous production since the 1940s. It was developed with Alcoa for the U.S. Navy and is made by hand in a 77-step process from recycled aluminum. DWR also sells the 111 Navy Chair, developed with Coca-Cola in 2010 from recycled plastic bottles.",
    "facts": [
      "The Navy Chair was built for the U.S. Navy to resist corrosion, splintering and fire, and it is still made today.",
      "The 111 Navy Chair gets its name from the 111 recycled PET bottles used to make each chair.",
      "Emeco also makes furniture by designers such as Philippe Starck, Norman Foster and Frank Gehry."
    ],
    "credits": [
      "Emeco, developed with Alcoa",
      "Emeco, developed with Coca-Cola"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Emeco"
    }
  },
  {
    "id": "finn-juhl",
    "name": "Finn Juhl",
    "role": "Danish architect and furniture designer",
    "years": "1912–1989",
    "origin": "Denmark",
    "bio": "Finn Juhl was a Danish architect and interior and industrial designer, most known for his furniture. He was one of the leading figures in the creation of Danish design in the 1940s, and the designer who introduced Danish modern to America. DWR sells the Finn Juhl Credenza, made in Denmark, which draws on cubism and Goethe's colour theory in its interlocking planes and colored sliding doors and trays.",
    "facts": [
      "Juhl is the designer who introduced Danish modern to America, and he was central to Danish design in the 1940s.",
      "The credenza's colored panels are inspired by Goethe's colour wheel, and its form nods to cubism.",
      "Inside, one side has adjustable shelves and the other an open compartment beside the trays."
    ],
    "credits": [
      "Finn Juhl"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Finn_Juhl"
    }
  },
  {
    "id": "haller-scharer",
    "name": "Fritz Haller and Paul Schärer",
    "role": "Swiss architect and engineer behind USM Haller",
    "years": "Haller 1924–2012",
    "origin": "Switzerland",
    "bio": "Fritz Haller was a Swiss architect of the Solothurn School who developed industrialised steel building systems. Paul Schärer, an engineer, was the third generation to run USM, the Münsingen iron goods business. In 1961 Schärer commissioned Haller to design the USM factory, and together they turned the building system into furniture, described as miniature architecture. DWR sells USM Haller Modular Shelving, joined by a chrome ball connector.",
    "facts": [
      "The furniture grew out of the building system Haller designed for USM's own factory in Münsingen, starting in 1961.",
      "The ball connector was patented in 1965, and series production began in 1969 after a Paris bank ordered 600 workstations.",
      "USM Haller is in the permanent collections of the Museum of Modern Art and the Cooper-Hewitt."
    ],
    "credits": [
      "Fritz Haller and Paul Schärer"
    ],
    "source": {
      "label": "USM",
      "url": "https://www.usm.com/en/about/our-story"
    }
  },
  {
    "id": "gabriel-tan",
    "name": "Gabriel Tan",
    "role": "Singaporean industrial designer",
    "years": "b. 1982",
    "origin": "Singapore",
    "bio": "Gabriel Tan is a Singaporean designer who studied industrial design at the National University of Singapore and founded Gabriel Tan Studio in 2016. He moved to Porto, Portugal in 2020 to be near furniture makers, and he mixes East Asian and European forms. He designs for Herman Miller, B&B Italia and Audo Copenhagen. DWR carries his Luva Modular Sectional, whose back opens out or folds down.",
    "facts": [
      "Tan co-founded the collective Outofstock, which showed at Salone Satellite in Milan in 2007.",
      "He moved to Porto in 2020 to work near furniture makers, and he received the Singapore President's Design Award in 2025.",
      "On Luva, the back opens for a reclined lounge and folds down to sit upright, with no separate recliner."
    ],
    "credits": [
      "Gabriel Tan"
    ],
    "source": {
      "label": "Herman Miller",
      "url": "https://www.hermanmiller.com/designers/tan/"
    }
  },
  {
    "id": "gamfratesi",
    "name": "GamFratesi",
    "role": "Danish-Italian studio of Stine Gam, Enrico Fratesi",
    "years": "Founded 2006 · Stine Gam b. 1975 · Enrico Fratesi b. 1978",
    "origin": "Denmark / Italy",
    "bio": "GamFratesi is a Copenhagen studio founded in 2006 by Danish architect Stine Gam and Italian architect Enrico Fratesi, who are a couple and split their time between Copenhagen and Pesaro. Their work fuses Danish craft tradition with Italian experimentation. DWR sells their Beetle Chair, whose upholstered shell echoes the curve of a beetle's wing casing and comes in dining, lounge and bar heights.",
    "facts": [
      "The studio is a Danish-Italian pairing, and its work blends Danish craft with Italian experimentation.",
      "The Beetle shell is modeled on a beetle's wing casing, which is meant to feel soft and armored at once.",
      "One shell shape comes in dining, lounge and bar heights, so it can furnish a whole space."
    ],
    "credits": [
      "GamFratesi"
    ],
    "source": {
      "label": "GamFratesi",
      "url": "https://www.gamfratesi.com/studio"
    }
  },
  {
    "id": "george-carwardine",
    "name": "George Carwardine",
    "role": "British engineer who invented the Anglepoise lamp",
    "years": "1887–1947",
    "origin": "United Kingdom",
    "bio": "George Carwardine was a British engineer who specialised in vehicle suspension and rose to Chief Designer at the Horstmann Car Company. In a garden workshop at his home in Bath he pursued spring-and-lever mechanisms, and in 1932 he unveiled a four-spring balanced-arm lamp, the Anglepoise. It was later licensed to spring maker Herbert Terry & Sons. DWR sells the Original 1227 Task Lamp, which carries a lifetime warranty.",
    "facts": [
      "Carwardine was a car suspension engineer, and he applied the same spring-and-lever thinking to a lamp.",
      "He built the first version in a workshop at his home in Bath, and it was unveiled in 1932.",
      "The arm moves freely but holds its position without locking, and the lamp has a lifetime warranty."
    ],
    "credits": [
      "George Carwardine"
    ],
    "source": {
      "label": "Anglepoise",
      "url": "https://www.anglepoise.com/usa/designers/george-carwardine/"
    }
  },
  {
    "id": "greta-grossman",
    "name": "Greta Magnusson Grossman",
    "role": "Swedish furniture designer and architect",
    "years": "1906–1999",
    "origin": "Sweden / United States",
    "bio": "Greta Magnusson Grossman was a Swedish furniture designer, interior designer and architect, and one of the few women to gain prominence in mid-century Los Angeles. She trained in Sweden and moved to California in 1940, blending European modernism with the culture and lifestyle of Southern California. DWR sells her Grasshopper Floor Lamp, with a lithe tripod frame and a conical shade on a ball joint.",
    "facts": [
      "Grossman was one of the few women to gain prominence in the mid-century Los Angeles design scene.",
      "She blended European modernism with a relaxed Southern California lifestyle.",
      "The Grasshopper's ball-joint shade aims light wherever you need it, and its angled tripod stance gave it the name."
    ],
    "credits": [
      "Greta Magnusson Grossman"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Greta_Magnusson-Grossman"
    }
  },
  {
    "id": "inga-sempe",
    "name": "Inga Sempé",
    "role": "French designer of furniture, lamps and objects",
    "years": "b. 1968",
    "origin": "France",
    "bio": "Inga Sempé is a French designer known for creating technical items, including furniture, lamps and other design objects. She has collaborated with manufacturers such as Ligne Roset, Alessi and Baccarat, and received the Red Dot Design Award in 2007. DWR sells her Ruché Bed. It is named for ruching, the dressmaking technique of gathering fabric, and its quilted upholstery is draped over the wood frame.",
    "facts": [
      "Sempé has worked with Ligne Roset, Alessi and Baccarat, and won a Red Dot Design Award in 2007.",
      "Ruché comes from ruching, a garment technique that gathers fabric to add texture and dimension.",
      "The upholstery drapes over the frame instead of being pulled tight, so the bed looks like soft bedding."
    ],
    "credits": [
      "Inga Sempé"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Inga_Semp%C3%A9"
    }
  },
  {
    "id": "jds-architects",
    "name": "JDS Architects",
    "role": "Belgian-Danish architecture studio",
    "years": "Julien De Smedt b. 1975",
    "origin": "Belgium / Denmark",
    "bio": "JDS Architects is the studio founded and directed by Julien De Smedt, who was born in Brussels in 1975. The practice works from Brussels, Copenhagen, Belo Horizonte and Shanghai, and its projects include the Mountain Dwellings and the Holmenkollen Ski Jump. De Smedt previously worked with OMA and co-founded PLOT with Bjarke Ingels. At DWR the studio's Stacked Storage Bookcase, made for Muuto, shows an architect's approach to furniture: simple boxes that clip together and can be recombined.",
    "facts": [
      "JDS is an architecture firm, so its bookcase is designed like a small building system of simple boxes.",
      "The Stacked Storage Bookcase joins with bent steel clips, which means you can rearrange it later.",
      "The studio's founder, Julien De Smedt, also designed the Holmenkollen Ski Jump and the Mountain Dwellings."
    ],
    "credits": [
      "JDS Architects"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Julien_De_Smedt"
    }
  },
  {
    "id": "louis-weisdorf",
    "name": "Louis Weisdorf",
    "role": "Danish architect and industrial designer",
    "years": "1932–2021",
    "origin": "Denmark",
    "bio": "Louis Weisdorf was a Danish architect and industrial designer who graduated from the Royal Danish Academy of Fine Arts in 1954, one of its youngest graduates. He worked across graphic, interior, architectural and industrial design, and he was interested in objects the user can change. That interest defines the Multi-Lite Pendant of 1972, whose two nested shades rotate to send light down, up or to one side. It was out of production for decades before Gubi brought it back.",
    "facts": [
      "Weisdorf finished at the Royal Danish Academy of Fine Arts in 1954 and was one of its youngest graduates.",
      "He liked objects the user can adjust, so you turn the shades to point the light where you want it.",
      "The Multi-Lite dates to 1972 and disappeared for decades before Gubi revived it."
    ],
    "credits": [
      "Louis Weisdorf"
    ],
    "source": {
      "label": "Gubi",
      "url": "https://gubi.com/en/us/designers/louis-weisdorf"
    }
  },
  {
    "id": "mario-bellini",
    "name": "Mario Bellini",
    "role": "Italian architect and designer",
    "years": "b. 1935",
    "origin": "Italy",
    "bio": "Mario Bellini is an Italian architect and designer who graduated from the Polytechnic University of Milan in 1959. His career spans architecture, exhibition design, product design and furniture, with clients such as B&B Italia, Cassina, Olivetti, Vitra and Kartell. He has received eight Compasso d'Oro awards and the Triennale di Milano's Gold Medal for Lifetime Achievement. DWR sells his Bellini Chair, a stacking chair in the permanent collection at MoMA, now made by Heller in a plastic engineered to biodegrade.",
    "facts": [
      "Bellini has won eight Compasso d'Oro awards.",
      "He has worked for Olivetti, Cassina, B&B Italia and Vitra, so his range goes well beyond chairs.",
      "The Bellini Chair is in MoMA's collection and is made in the USA from a plastic that can biodegrade."
    ],
    "credits": [
      "Mario Bellini"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Mario_Bellini"
    }
  },
  {
    "id": "michael-anastassiades",
    "name": "Michael Anastassiades",
    "role": "Cypriot-born London lighting designer",
    "years": "b. 1967",
    "origin": "Cyprus / United Kingdom",
    "bio": "Michael Anastassiades was raised in Cyprus and studied civil engineering at Imperial College London before turning to industrial design at the Royal College of Art. He founded his London studio in 1994 and works across sculpture, decorative art and industrial design. He has won a Compasso d'Oro, and his work is in MoMA and the V&A. His IC Floor Lamp balances a blown glass sphere on a very thin frame so it looks almost ready to fall.",
    "facts": [
      "Anastassiades started in civil engineering, which shows in how the IC lamp balances a glass sphere on a thin frame.",
      "His work is held by both MoMA and the V&A, and he has won a Compasso d'Oro.",
      "The IC Floor Lamp is meant to look precarious; that tension is the whole idea, and it is made in Italy."
    ],
    "credits": [
      "Michael Anastassiades"
    ],
    "source": {
      "label": "Design Within Reach",
      "url": "https://www.dwr.com/designer-michael-anastassiades?lang=en_US"
    }
  },
  {
    "id": "michel-ducaroy",
    "name": "Michel Ducaroy",
    "role": "French furniture designer",
    "years": "1925–2009",
    "origin": "France",
    "bio": "Michel Ducaroy was born in Lyon in 1925 into a family of furniture makers who fitted out homes and ocean liners. He studied sculpture at the École Nationale des Beaux-Arts in Lyon and began working with Ligne Roset in 1954. His best-known piece is the TOGO Sofa of 1973, built entirely from foam with no frame and first shown at the Salon des Arts Ménagers in Paris. It is still a Ligne Roset best seller.",
    "facts": [
      "Ducaroy trained as a sculptor, and TOGO has a sculptural, folded shape that shows it.",
      "TOGO has no frame at all, just foam in several densities, which is why it slouches so comfortably.",
      "It launched in 1973 and is still a Ligne Roset best seller, so it has lasted over fifty years."
    ],
    "credits": [
      "Michel Ducaroy"
    ],
    "source": {
      "label": "Ligne Roset",
      "url": "https://www.ligne-roset.com/us/designers/michel-ducaroy"
    }
  },
  {
    "id": "nathan-yong",
    "name": "Nathan Yong",
    "role": "Singaporean industrial designer",
    "years": "",
    "origin": "Singapore",
    "bio": "Nathan Yong is a Singapore designer with a diploma in industrial design from Temasek Polytechnic and a master's in design from the University of New South Wales. He began as a buyer and product developer, co-founded Air Division in 1999, and won the President's Design Award Designer of the Year in 2008. In 2009 he founded Nathan Yong Design. He has collaborated with Living Divani and Ligne Roset. At DWR his Line collection includes the Line Five Drawer Dresser, built on a solid wood frame.",
    "facts": [
      "Yong is from Singapore and won the President's Design Award Designer of the Year in 2008.",
      "He has worked with Ligne Roset and Living Divani, so he is respected by major furniture makers.",
      "The Line collection uses strong horizontal lines meant to recall natural landscapes and calm a bedroom."
    ],
    "credits": [
      "Nathan Yong"
    ],
    "source": {
      "label": "Design Within Reach",
      "url": "https://www.dwr.com/designer-nathan-yong?lang=en_US"
    }
  },
  {
    "id": "niels-bendtsen",
    "name": "Niels Bendtsen",
    "role": "Danish-Canadian furniture designer",
    "years": "",
    "origin": "Denmark / Canada",
    "bio": "Niels Bendtsen was born in Denmark and moved with his family to Canada in 1951. He had no formal design school; he apprenticed with his father, a cabinetmaker, in the family shop in North Vancouver. From 1973 he freelanced in Denmark, and his Ribbon Chair for Kebe is in MoMA's collection. He founded Bensen in 1981. DWR sells his Nest Storage Bed, made for small spaces, with a mattress platform that lifts on gas pistons to reveal hidden storage.",
    "facts": [
      "Bendtsen learned his craft in his father's cabinetmaking shop rather than at a design school.",
      "His Ribbon Chair is in MoMA's collection, and he founded the company Bensen in 1981.",
      "The Nest Storage Bed lifts on gas pistons, and the storage is completely hidden when the bed is closed."
    ],
    "credits": [
      "Niels Bendtsen"
    ],
    "source": {
      "label": "Bendtsen Design Associates",
      "url": "https://www.bendtsenassociates.com/biography"
    }
  },
  {
    "id": "strinning",
    "name": "Nils and Kajsa Strinning",
    "role": "Swedish architect-designer couple",
    "years": "Nils 1917–2006",
    "origin": "Sweden",
    "bio": "Nils Strinning and his wife Kajsa Strinning were Swedish designers best known for the String shelf. They created it in 1949 for a contest run by the publisher Bonnier. As a student Nils had already designed a plastic-coated wire dish rack called elfa. In 1952 he founded String Design AB and Swedish Design AB. DWR sells String Wall Shelving: bent steel wire side panels that shelves hook onto, shipped flat and expanded by adding panels. It is a Scandinavian Modern classic.",
    "facts": [
      "String came out of a 1949 competition for a bookshelf, which the Strinnings won.",
      "The wire panels and hook-on shelves ship flat and mount to the wall, so it is easy to add to later.",
      "Nils Strinning first designed a plastic-coated wire dish rack as a student, so wire was his material early on."
    ],
    "credits": [
      "Nils and Kajsa Strinning"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Nisse_Strinning"
    }
  },
  {
    "id": "norman-cherner",
    "name": "Norman Cherner",
    "role": "American designer and architect",
    "years": "1920–1987",
    "origin": "United States",
    "bio": "Norman Cherner was born in Brooklyn in 1920. He studied and taught at Columbia, instructed at MoMA from 1947 to 1949, and believed that all design stems from one discipline. He designed low-cost prefabricated houses and their furniture. His Cherner Chair of 1958 was made for Plycraft, which sometimes credited others; Cherner sued and won royalties. Production ended by the early 1970s, and his sons later revived it through the Cherner Chair Company.",
    "facts": [
      "Cherner taught at Columbia and was a MoMA instructor, and he designed prefab houses along with their furniture.",
      "The Cherner Chair dates to 1958, and Plycraft's ads did not always credit him; he sued and won royalties.",
      "His sons founded the Cherner Chair Company to bring it back under their father's name."
    ],
    "credits": [
      "Norman Cherner"
    ],
    "source": {
      "label": "Design Within Reach",
      "url": "https://www.dwr.com/designer-norman-cherner?lang=en_US"
    }
  },
  {
    "id": "poul-cadovius",
    "name": "Poul Cadovius",
    "role": "Danish furniture designer and manufacturer",
    "years": "1911–2011",
    "origin": "Denmark",
    "bio": "Poul Cadovius was a Danish furniture designer and manufacturer who held 400 patents. He believed heavy case furniture wasted floor space, so he moved storage onto the wall. His Royal System Shelving, from 1948, was among the first wall-hung shelving systems anywhere. Shelves and cabinets hang from wall-mounted uprights instead of standing on legs, an idea that became a defining move in Danish mid-century interiors and is still sold at DWR.",
    "facts": [
      "Cadovius held 400 patents and was both a designer and a manufacturer.",
      "Royal System dates to 1948 and was among the first wall-hung shelving systems anywhere.",
      "Everything hangs from wall uprights, which keeps the floor open and makes a room feel lighter."
    ],
    "credits": [
      "Poul Cadovius"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Poul_Cadovius"
    }
  },
  {
    "id": "richard-sapper",
    "name": "Richard Sapper",
    "role": "German industrial designer based in Milan",
    "years": "1932–2015",
    "origin": "Germany / Italy",
    "bio": "Richard Sapper was a German industrial designer who spent much of his career in Milan and is considered one of the most influential figures of post-war design. His products combine technical innovation, simplicity of form and an element of wit and surprise. He won 11 Compasso d'Oro awards, and MoMA holds over 17 of his designs. The Tizio Desk Lamp of 1972 is a good example: it is counterbalanced, and the current runs through the arms, so there are no visible cables.",
    "facts": [
      "Sapper won 11 Compasso d'Oro awards, and MoMA has more than 17 of his designs.",
      "Tizio carries electricity through its metal arms, so you see no cord along the lamp.",
      "Counterweights hold Tizio wherever you leave it, with no knob to tighten. It won the Compasso d'Oro in 1979."
    ],
    "credits": [
      "Richard Sapper"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Richard_Sapper"
    }
  },
  {
    "id": "richard-schultz",
    "name": "Richard Schultz",
    "role": "American furniture designer",
    "years": "1926–2021",
    "origin": "United States",
    "bio": "Richard Schultz was an American furniture designer whose firm, Richard Schultz Design, produced notable pieces from the 1950s to the 1990s. DWR sells his Schultz 1966 Outdoor Lounge Chair. Florence Knoll asked him to design furniture that could stay outside all year after her own patio pieces corroded and faded. He engineered aluminum joinery and weather-resistant mesh so the collection would not need to come inside for winter.",
    "facts": [
      "Florence Knoll herself asked Schultz for outdoor furniture after her own patio pieces failed within a season.",
      "The 1966 collection was built to stay outside through winter, with aluminum joinery and weather-resistant mesh.",
      "The line covers chaises, dining chairs and tables on the same hardware system."
    ],
    "credits": [
      "Richard Schultz"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Richard_Schultz"
    }
  },
  {
    "id": "robert-dudley-best",
    "name": "Robert Dudley Best",
    "role": "British manufacturer and lamp designer",
    "years": "1892–1984",
    "origin": "United Kingdom",
    "bio": "Robert Dudley Best was a British manufacturer who took over his father's engineering works, Best & Lloyd, in Birmingham. He trained as a metal designer at art school in Düsseldorf and was closely involved with the Modern design movement between the wars. He designed the Bestlite, a Bauhaus-styled desk lamp that remains in production and was used by Winston Churchill in Whitehall. DWR sells the Bestlite BL3 Table Lamp, now made by Gubi.",
    "facts": [
      "Best trained in Germany and ran his family's Birmingham engineering firm, so he thought like a manufacturer.",
      "The Bestlite is Bauhaus-styled, and Winston Churchill used one at Whitehall.",
      "The jointed arm borrows from industrial and naval task lamps, and Gubi later revived production."
    ],
    "credits": [
      "Robert Dudley Best"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Robert_Dudley_Best"
    }
  },
  {
    "id": "bouroullec",
    "name": "Ronan and Erwan Bouroullec",
    "role": "French design duo of brothers",
    "years": "Ronan b. 1971 · Erwan b. 1976",
    "origin": "France",
    "bio": "Ronan and Erwan Bouroullec are French brothers, born in 1971 and 1976, whose work has appeared in publications and museums worldwide. It ranges from tables and chairs to tableware, rugs, textile walls, office furniture, ceramics, art objects and urban projects. For DWR they designed the Palissade Chair, named after the French word for a defensive fence. It took years to develop a fine steel-rod construction and a soft powder-coat finish, and it works on a park bench or a balcony.",
    "facts": [
      "Ronan and Erwan are brothers who design together, and their range runs from chairs to rugs to urban projects.",
      "Palissade is all steel, yet the soft powder-coat finish makes it feel almost like woven fabric.",
      "Its name is the French word for a defensive fence, and it works in a public park or on a balcony."
    ],
    "credits": [
      "Ronan and Erwan Bouroullec"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Ronan_%26_Erwan_Bouroullec"
    }
  },
  {
    "id": "russell-woodard",
    "name": "Russell Woodard",
    "role": "American outdoor furniture designer",
    "years": "",
    "origin": "United States",
    "bio": "Russell Woodard designed the Sculptura line in 1956 for Woodard Furniture of Owosso, Michigan, a family-run company since 1866. It brought modernism to outdoor furniture with a hand-formed steel mesh shell over a wrought-iron frame. The Sculptura Lounge Chair is still formed by hand, now with weatherproof finishes. The line entered the Cooper Hewitt's permanent collection in 1994 and was reintroduced in 2015.",
    "facts": [
      "Sculptura dates to 1956, and Woodard Furniture has been building furniture in Michigan since 1866.",
      "The shell is hand-formed mesh over a wrought-iron frame, and the finishes are made to resist rust.",
      "Cooper Hewitt added Sculptura to its permanent collection in 1994."
    ],
    "credits": [
      "Russell Woodard"
    ],
    "source": {
      "label": "Woodard",
      "url": "https://www.woodard-furniture.com/trade/collections/sculptura"
    }
  },
  {
    "id": "sean-yoo",
    "name": "Sean Yoo",
    "role": "Korean-American furniture designer",
    "years": "",
    "origin": "South Korea / United States",
    "bio": "Sean Yoo was born in Seoul, raised in Los Angeles and now lives in Mexico City. He began in city planning, then a visit to the Noguchi Museum drew him to design, since he liked how Noguchi gave sculptural meaning to household objects. He designed the Matera Bed in 2007 while living in Matera, Italy. It has clean lines, beveled edges and visible slotted mortise-and-tenon corners. He credits DWR with helping him get his design education.",
    "facts": [
      "Yoo started in city planning; a visit to the Noguchi Museum pushed him into design.",
      "He designed the Matera Bed in 2007 while living in Matera, Italy.",
      "Look at the corners: the mortise-and-tenon joints are left visible. A storage version adds six soft-closing drawers."
    ],
    "credits": [
      "Sean Yoo"
    ],
    "source": {
      "label": "Design Within Reach",
      "url": "https://www.dwr.com/collection-matera-bedroom?lang=en_US"
    }
  },
  {
    "id": "serge-mouille",
    "name": "Serge Mouille",
    "role": "French industrial designer and silversmith",
    "years": "1922–1988",
    "origin": "France",
    "bio": "Serge Mouille was a French industrial designer and goldsmith, best known for his light fixtures. Trained as a silversmith, he brought that metalworking skill to lighting, using hand-shaped aluminum reflectors, thin steel arms and visible washer-and-hex-screw hardware. In the Serge Mouille Three Arm Floor Lamp from 1952, each arm swivels on a brass ball joint, so the lamp reads more like a kinetic sculpture than a fixture. Every lamp is stamped and numbered.",
    "facts": [
      "Mouille trained as a silversmith, and you can see it in the hand-shaped aluminum reflectors.",
      "Each arm of the three-arm lamp pivots on a brass ball joint, so you can aim the light.",
      "Every lamp is stamped and numbered, and the design dates to 1952."
    ],
    "credits": [
      "Serge Mouille"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Serge_Mouille"
    }
  },
  {
    "id": "thomas-heatherwick",
    "name": "Thomas Heatherwick",
    "role": "English designer and studio founder",
    "years": "b. 1970",
    "origin": "United Kingdom",
    "bio": "Thomas Heatherwick, born in 1970, is an English designer and the founder of Heatherwick Studio in London. His projects include the UK pavilion at Expo 2010, the Olympic cauldron for the 2012 Games, Vessel in New York City and the New Routemaster bus. His studio works across design, architecture and urban planning, and that blurring shows in the Magis Spun Chair, which is a sculpture when upright and a seat that rotates 360 degrees when tipped onto its side.",
    "facts": [
      "Heatherwick designed the 2012 Olympic cauldron, Vessel in New York and the New Routemaster bus.",
      "Stand the Spun Chair upright and it is sculpture; tip it over and it becomes a seat that spins a full 360 degrees.",
      "It is rotationally molded in one piece, and it works indoors or out."
    ],
    "credits": [
      "Thomas Heatherwick"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Thomas_Heatherwick"
    }
  },
  {
    "id": "tom-dixon",
    "name": "Tom Dixon",
    "role": "British designer and creative director",
    "years": "b. 1959",
    "origin": "United Kingdom",
    "bio": "Tom Dixon is a self-educated British designer, born in 1959, and the creative director of the brand that bears his name, which specializes in lighting, furniture and household accessories. He spent ten years as head of design at Habitat, and his work is in the V&A, MoMA, the Vitra Design Museum and the Pompidou Centre. DWR sells his Fat Modular Sofa from 2024, which pushes a minimal silhouette to exaggerated proportions with oversized backrests and low, curved seats.",
    "facts": [
      "Dixon is self-taught, and he was head of design at Habitat for ten years.",
      "His work is in museum collections including the V&A, MoMA and the Centre Pompidou.",
      "The Fat Modular Sofa exaggerates a minimal shape on purpose, and its modules recombine into many layouts."
    ],
    "credits": [
      "Tom Dixon"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Tom_Dixon_(industrial_designer)"
    }
  },
  {
    "id": "vico-magistretti",
    "name": "Vico Magistretti",
    "role": "Italian architect and industrial designer",
    "years": "1920–2006",
    "origin": "Italy",
    "bio": "Vico Magistretti was an Italian architect who also worked as an industrial and furniture designer and an academic. One of his first projects was the round church in the QT8 neighborhood of Milan, and he later designed furniture and appliances for Cassina, Artemide and Oluce. His work won several awards, including the Compasso d'Oro. The Atollo Table Lamp of 1977 stacks three pure geometric solids, cylinder, cone and dome, and is often called the archetypal table lamp.",
    "facts": [
      "Magistretti was an architect first, and his early work included a round church in Milan.",
      "He designed for Cassina, Artemide and Oluce, and won the Compasso d'Oro.",
      "Atollo is just a cylinder, a cone and a dome stacked together, and it is in major museum collections."
    ],
    "credits": [
      "Vico Magistretti"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Vico_Magistretti"
    }
  },
  {
    "id": "yves-behar",
    "name": "Yves Béhar",
    "role": "Swiss-born American designer and entrepreneur",
    "years": "b. 1967",
    "origin": "Switzerland / United States",
    "bio": "Yves Béhar is a Swiss-born American designer and entrepreneur, born in 1967. He is the founder and principal designer of Fuseproject and co-founder of the smart lock company August Home. His clients have included Herman Miller, PUMA, Kodak, Samsung and Prada. The Sayl Chair of 2011 draws on suspension bridge design: a single Y-shaped structure holds a stretched mesh back in tension rather than framing it, and it uses noticeably less material than most task chairs.",
    "facts": [
      "Behar founded the design firm Fuseproject and co-founded the smart lock company August Home.",
      "The Sayl back is based on suspension bridge design, with a Y-shaped structure holding the mesh in tension.",
      "It was designed for recyclability from the start and uses less material than most task chairs, while meeting the same ergonomic standards."
    ],
    "credits": [
      "Yves Béhar"
    ],
    "source": {
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Yves_B%C3%A9har"
    }
  }
];

const VIDEOS = [
  {
    "yt": "98Ddwsd_vdo",
    "title": "Eames Lounge Chair and Ottoman: The story behind the world's most enduring chair design",
    "channel": "Herman Miller",
    "designers": [
      "eames"
    ],
    "products": [
      "eames-lounge"
    ]
  },
  {
    "yt": "s5zyhGMMPKs",
    "title": "Why Everyone Is So Obsessed With This $10K Eames Chair | WSJ Coveted",
    "channel": "The Wall Street Journal",
    "designers": [
      "eames"
    ],
    "products": [
      "eames-lounge"
    ]
  },
  {
    "yt": "IclN62De12Y",
    "title": "Introduction to the Films of Charles and Ray Eames",
    "channel": "Eames Office",
    "designers": [
      "eames"
    ],
    "products": []
  },
  {
    "yt": "b0vDWqp6J7Y",
    "title": "The design genius of Charles + Ray Eames",
    "channel": "TED",
    "designers": [
      "eames"
    ],
    "products": []
  },
  {
    "yt": "w8rICo44kAE",
    "title": "A Journey into The World of Charles and Ray Eames",
    "channel": "Barbican Centre",
    "designers": [
      "eames"
    ],
    "products": []
  },
  {
    "yt": "Dxnxuw9Y4lU",
    "title": "History of the Eames Molded Plastic Chairs",
    "channel": "SmartFurniture.com",
    "designers": [
      "eames"
    ],
    "products": [
      "eames-molded-plastic",
      "eames-shell-rocker"
    ]
  },
  {
    "yt": "_HLKavg4XVU",
    "title": "Crafting the Egg™ chair  | Fritz Hansen",
    "channel": "FRITZ HANSEN",
    "designers": [
      "arne-jacobsen"
    ],
    "products": [
      "egg-chair"
    ]
  },
  {
    "yt": "5nEu7UfVFIE",
    "title": "The making of a Series 7 chair | Fritz Hansen",
    "channel": "FRITZ HANSEN",
    "designers": [
      "arne-jacobsen"
    ],
    "products": [
      "series-7"
    ]
  },
  {
    "yt": "HRntGt-Unyk",
    "title": "Making An Icon – The CH24 Wishbone Chair",
    "channel": "Carl Hansen & Søn",
    "designers": [
      "hans-wegner"
    ],
    "products": [
      "wishbone-chair"
    ]
  },
  {
    "yt": "wb__2h3brDQ",
    "title": "The story behind the Wishbone chair, a Danish design classic by Hans J Wegner",
    "channel": "Scandinavian Design 101",
    "designers": [
      "hans-wegner"
    ],
    "products": [
      "wishbone-chair"
    ]
  },
  {
    "yt": "S-rUbCk9Y50",
    "title": "S03E15: Eero Saarinen’s 1958 Pedestal Collection for Knoll at Milles House",
    "channel": "Cranbrook Center for Collections and Research",
    "designers": [
      "eero-saarinen"
    ],
    "products": [
      "saarinen-tulip-armchair",
      "saarinen-tulip-table"
    ]
  },
  {
    "yt": "6z_LtToUrVM",
    "title": "Discover the Iconic Knoll Womb Chair | Designed for Florence Knoll by Eero Saarinen in 1948",
    "channel": "Nestcouk",
    "designers": [
      "eero-saarinen"
    ],
    "products": [
      "womb-chair",
      "womb-ottoman"
    ]
  },
  {
    "yt": "fMR0wH4m3bo",
    "title": "HAY Design Talk: Discover the History of the Bubble Lamp by George Nelson for Herman Miller",
    "channel": "Nestcouk",
    "designers": [
      "george-nelson"
    ],
    "products": [
      "nelson-bubble-lamp"
    ]
  },
  {
    "yt": "RYoNDh7D3pc",
    "title": "WHY Design | Irving Harper",
    "channel": "Herman Miller",
    "designers": [
      "irving-harper",
      "george-nelson"
    ],
    "products": [
      "marshmallow-sofa"
    ]
  },
  {
    "yt": "2eefN0zRIaE",
    "title": "MillerKnoll Design Perspectives: Florence Knoll - Defining Modern",
    "channel": "MillerKnoll",
    "designers": [
      "florence-knoll"
    ],
    "products": []
  },
  {
    "yt": "4XvR-8H_Yxo",
    "title": "Celebrating 100 Years of Florence Knoll",
    "channel": "KnollTextiles",
    "designers": [
      "florence-knoll"
    ],
    "products": []
  },
  {
    "yt": "B4ctbyTFUCk",
    "title": "The Making of the Knoll Barcelona Chair",
    "channel": "Utility Design Store",
    "designers": [
      "mies",
      "lilly-reich"
    ],
    "products": [
      "barcelona-chair"
    ]
  },
  {
    "yt": "hQ8SbDJ7Cck",
    "title": "Production of the Akari Light Sculptures, Isamu Noguchi, 1951",
    "channel": "Vitra",
    "designers": [
      "isamu-noguchi"
    ],
    "products": []
  },
  {
    "yt": "LUZysulO2js",
    "title": "Perspectives: Akari 1N",
    "channel": "The Noguchi Museum",
    "designers": [
      "isamu-noguchi"
    ],
    "products": []
  },
  {
    "yt": "e8gpBsY_2x4",
    "title": "Inside the High Museum of Art, Atlanta’s exhibition, Isamu Noguchi: “I am not a designer”",
    "channel": "STIR",
    "designers": [
      "isamu-noguchi"
    ],
    "products": []
  },
  {
    "yt": "L6nktSEqxwI",
    "title": "\"Panton Chair\" – Chair Stories",
    "channel": "Vitra",
    "designers": [
      "verner-panton"
    ],
    "products": [
      "panton-chair"
    ]
  },
  {
    "yt": "rkzXTA_HXOA",
    "title": "Celebrating 50 Years of the Vitra Panton Chair",
    "channel": "Nestcouk",
    "designers": [
      "verner-panton"
    ],
    "products": [
      "panton-chair"
    ]
  },
  {
    "yt": "kIDQpCAEd2Y",
    "title": "The history of Marcel Breuer's Wassily chair",
    "channel": "Scandinavian Design 101",
    "designers": [
      "marcel-breuer"
    ],
    "products": [
      "wassily-chair"
    ]
  },
  {
    "yt": "DxGNc5sppfw",
    "title": "Celebrating 60 Years of the Louis Poulsen PH 5, PH Artichoke and PH Snowball Light",
    "channel": "Nestcouk",
    "designers": [
      "poul-henningsen"
    ],
    "products": [
      "ph5-lamp",
      "ph-artichoke-lamp"
    ]
  },
  {
    "yt": "LWqVSrUgoW8",
    "title": "The Artichoke Lamp by Poul Henningsen for Louis Poulsen",
    "channel": "Scandinavian Design 101",
    "designers": [
      "poul-henningsen"
    ],
    "products": [
      "ph-artichoke-lamp"
    ]
  },
  {
    "yt": "euhIZsGJ_tM",
    "title": "See How the Knoll Studio Bertoia Collection is Made | Designed by Harry Bertoia, Produced by Knoll",
    "channel": "Nestcouk",
    "designers": [
      "harry-bertoia"
    ],
    "products": [
      "bertoia-diamond"
    ]
  },
  {
    "yt": "sdLAIsHbcoM",
    "title": "How Flos's Arco Lamp is made - BrandmadeTV",
    "channel": "BRANDMADE.TV",
    "designers": [
      "castiglioni"
    ],
    "products": [
      "arco-lamp"
    ]
  },
  {
    "yt": "G9oSr62Pqm0",
    "title": "Cassina Chaise Longe by Le Corbusier",
    "channel": "Bauhaus Movement",
    "designers": [
      "le-corbusier",
      "pierre-jeanneret",
      "charlotte-perriand"
    ],
    "products": [
      "lc4-chaise"
    ]
  },
  {
    "yt": "00DTa_gvgcY",
    "title": "The Making of Stool 60 | Designed by Alvar Aalto in 1933 | Made by Artek in Finland",
    "channel": "Nestcouk",
    "designers": [
      "alvar-aalto"
    ],
    "products": []
  },
  {
    "yt": "tRx9OpaESss",
    "title": "Why Design | Don Chadwick",
    "channel": "Herman Miller",
    "designers": [
      "stumpf-chadwick"
    ],
    "products": [
      "aeron-chair"
    ]
  },
  {
    "yt": "Vg0qnVnu8os",
    "title": "Don Chadwick and Ergonomic Design | On Innovation",
    "channel": "The Henry Ford",
    "designers": [
      "stumpf-chadwick"
    ],
    "products": [
      "aeron-chair"
    ]
  },
  {
    "yt": "dB8uMeYXXQA",
    "title": "The 77 Steps of Making an Emeco Chair",
    "channel": "Emeco",
    "designers": [
      "emeco"
    ],
    "products": [
      "navy-chair"
    ]
  },
  {
    "yt": "F9jjoe_rxGM",
    "title": "How It's Made: Emeco 1006 Navy Chair",
    "channel": "Surface Magazine",
    "designers": [
      "emeco"
    ],
    "products": [
      "navy-chair"
    ]
  },
  {
    "yt": "XCIQr3dlrwI",
    "title": "LIGNE ROSET Togo - The continuous dream, since 50 years",
    "channel": "Ligne Roset",
    "designers": [
      "michel-ducaroy"
    ],
    "products": [
      "togo-sofa"
    ]
  },
  {
    "yt": "ig0hA7BCrP0",
    "title": "The Modular Design Beloved By Supreme, Daniel Arsham, and Nigo | BTH: USM’s Haller System",
    "channel": "HYPEBEAST",
    "designers": [
      "haller-scharer"
    ],
    "products": [
      "usm-haller"
    ]
  },
  {
    "yt": "a4UMuJXM66I",
    "title": "Anglepoise | Design Interview with Simon Terry | The Longest Stay",
    "channel": "The Longest Stay",
    "designers": [
      "george-carwardine"
    ],
    "products": [
      "anglepoise-1227"
    ]
  },
  {
    "yt": "sQxNbc7ml-U",
    "title": "Thomas Heatherwick discusses the Spun Chair | Heatherwick Studio For Magis",
    "channel": "Nestcouk",
    "designers": [
      "thomas-heatherwick"
    ],
    "products": [
      "magis-spun-chair"
    ]
  },
  {
    "yt": "H7ZkZ1d64S8",
    "title": "THE CHIEFTAIN CHAIR | FINN JUHL | 1949",
    "channel": "House of Finn Juhl",
    "designers": [
      "finn-juhl"
    ],
    "products": []
  },
  {
    "yt": "4Y4gYYmZofk",
    "title": "The Making of The Fireplace Chair from the House of Finn Juhl | Designed in in 1946, Made in Denmark",
    "channel": "Nestcouk",
    "designers": [
      "finn-juhl"
    ],
    "products": []
  },
  {
    "yt": "Goll6tUCrD4",
    "title": "Interior Design: The New Freedom: Warren Platner, 1981",
    "channel": "DukeLibDigitalColl",
    "designers": [
      "warren-platner"
    ],
    "products": []
  },
  {
    "yt": "5f1Tvzinv5w",
    "title": "Identifying an Original: Knoll Platner Lounge Chair",
    "channel": "Be Original Americas",
    "designers": [
      "warren-platner"
    ],
    "products": [
      "platner-collection"
    ]
  },
  {
    "yt": "f8gFztBEl1o",
    "title": "Louis Ghost - The iconic chair",
    "channel": "Kartell Official ",
    "designers": [
      "philippe-starck"
    ],
    "products": [
      "louis-ghost-chair"
    ]
  },
  {
    "yt": "Ise45syM7po",
    "title": "Alexander Girard: A Portrait",
    "channel": "Vitra Design Museum",
    "designers": [
      "alexander-girard"
    ],
    "products": []
  },
  {
    "yt": "wgZ4ae1raBs",
    "title": "For the legendary Alexander Girard, design was in the details",
    "channel": "PBS NewsHour",
    "designers": [
      "alexander-girard"
    ],
    "products": []
  },
  {
    "yt": "l2egypOee3k",
    "title": "Crafting the Present: The Spanish Chair | Fredericia Furniture",
    "channel": "FREDERICIAFURNITURE",
    "designers": [
      "borge-mogensen"
    ],
    "products": []
  },
  {
    "yt": "o-DlrCvp-Bo",
    "title": "Ideas crafted to last: Børge Mogensen / J39 People's Chair | Fredericia Furniture",
    "channel": "FREDERICIAFURNITURE",
    "designers": [
      "borge-mogensen"
    ],
    "products": []
  },
  {
    "yt": "JcsbU532VFw",
    "title": "Jens Risom meets with Design Within Reach.",
    "channel": "DWR",
    "designers": [
      "jens-risom"
    ],
    "products": []
  },
  {
    "yt": "9GtInI72WcQ",
    "title": "DESIGN OBJECTS - The table lamp TIZIO (1972) by Richard Sapper",
    "channel": "Dellpop Design EN",
    "designers": [
      "richard-sapper"
    ],
    "products": [
      "tizio-lamp"
    ]
  },
  {
    "yt": "Me9YeBHJdbQ",
    "title": "Studio Visit – Ronan Bouroullec",
    "channel": "Vitra",
    "designers": [
      "bouroullec"
    ],
    "products": []
  },
  {
    "yt": "VC7rDFWl4hw",
    "title": "Studio Visit Erwan Bouroullec",
    "channel": "Vitra",
    "designers": [
      "bouroullec"
    ],
    "products": []
  },
  {
    "yt": "59-4_b6VcpM",
    "title": "Eileen Gray and the House E1027",
    "channel": "Docomomo UK",
    "designers": [
      "eileen-gray"
    ],
    "products": [
      "e1027-table"
    ]
  },
  {
    "yt": "RpCfUSgRs1s",
    "title": "Greta Magnusson Grossman, a Swedish designer in mid century Los Angeles",
    "channel": "Scandinavian Design 101",
    "designers": [
      "greta-grossman"
    ],
    "products": []
  },
  {
    "yt": "QzPvgCuJ6XA",
    "title": "Introducing the Luva Modular Sofa and Cyclade Tables, designed for Herman Miller by Gabriel Tan",
    "channel": "Herman Miller",
    "designers": [
      "gabriel-tan"
    ],
    "products": [
      "luva-sectional"
    ]
  },
  {
    "yt": "1QEInrYgFi4",
    "title": "Oluce - ATOLLO design Vico Magistretti",
    "channel": "Oluce",
    "designers": [
      "vico-magistretti"
    ],
    "products": [
      "atollo-lamp"
    ]
  }
];

const DESIGNER_BY_ID = Object.fromEntries(DESIGNERS.map(d => [d.id, d]));

/* Profiles credited on a product. */
function designersOf(product) {
  return DESIGNERS.filter(d => d.credits.includes(product.designer));
}

/* Products a profile is credited on. */
function productsBy(designer) {
  return PRODUCTS.filter(p => designer.credits.includes(p.designer));
}

function videosForDesigner(id) {
  return VIDEOS.filter(v => v.designers.includes(id));
}

function videosForProduct(id) {
  return VIDEOS.filter(v => v.products.includes(id));
}

function youtubeUrl(video) {
  return 'https://www.youtube.com/watch?v=' + video.yt;
}
