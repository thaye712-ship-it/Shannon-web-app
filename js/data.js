/* ============================================================
   Shannon — Design Within Reach product catalog
   ------------------------------------------------------------
   Real products sold by Design Within Reach (dwr.com), cross-checked
   against dwr.com's own brand, designer and search listings, plus
   20 construction/materials terms. Weighted toward the iconic,
   licensed design classics DWR is best known for selling — the
   pieces sales associates most need cold. More products can be
   added later in the same shape with no other code changes
   required; verify each against dwr.com before adding it.
   ============================================================ */

const CATALOG = {

  /* ---------- Products ---------- */
  products: [
    {
      id: 'eames-lounge',
      name: 'Eames Lounge Chair and Ottoman',
      designer: 'Charles and Ray Eames',
      manufacturer: 'Herman Miller',
      year: 1956,
      origin: 'United States',
      category: 'Lounge chair',
      style: 'Mid-Century Modern',
      materials: ['Molded plywood', 'Leather upholstery', 'Aluminum base'],
      knownFor: 'a bent-plywood shell lounge chair built to look like a well-worn baseball mitt',
      history:
        'Charles and Ray Eames designed it as a personal gift for their friend, film director Billy Wilder, ' +
        'after years spent perfecting molded plywood lamination. Three curved plywood shells cradle loose ' +
        'leather cushions, aiming for luxury rather than the affordability of their earlier work, and it ' +
        'debuted live on NBC\'s Home television show the year it launched.',
      facts: [
        'It debuted live on NBC television the same year it launched.',
        'The plywood-molding technique came out of research the Eameses did during World War II.',
        'Herman Miller still builds it with the same three-shell construction today.'
      ]
    },
    {
      id: 'eames-molded-plastic',
      name: 'Eames Molded Plastic Armchair',
      designer: 'Charles and Ray Eames',
      manufacturer: 'Herman Miller',
      year: 1950,
      origin: 'United States',
      category: 'Armchair',
      style: 'Mid-Century Modern',
      materials: ['Injection-molded polypropylene', 'Fiberglass-reinforced resin (original)', 'Steel or wood base'],
      knownFor: 'being one of the first mass-produced single-shell plastic chairs',
      history:
        'Developed for a MoMA low-cost furniture competition, the shell was originally molded from fiberglass-' +
        'reinforced polyester resin, one of the first one-piece plastic chair shells built for mass production. ' +
        'Herman Miller moved the shell to injection-molded polypropylene in the 1990s over material and ' +
        'environmental concerns, and the silhouette barely changed.',
      facts: [
        'It started as an entry in a MoMA design competition.',
        'The base swaps between wood dowel legs, a wire "Eiffel" base, and a rocker.',
        'Original fiberglass-shell examples are now collected as vintage pieces.'
      ]
    },
    {
      id: 'eames-wire',
      name: 'Eames Wire Chair',
      designer: 'Charles and Ray Eames',
      manufacturer: 'Herman Miller',
      year: 1951,
      origin: 'United States',
      category: 'Side chair',
      style: 'Mid-Century Modern',
      materials: ['Welded steel wire', 'Optional upholstered seat pad'],
      knownFor: 'reducing a chair shell to an open lattice of welded wire',
      history:
        'Once the Eameses had solved the molded-shell chair, they asked whether the shell needed to be solid ' +
        'at all. The wire chair keeps the same silhouette but forms the seat from welded steel rod, a shape ' +
        'they had actually explored before the plastic version existed. The optional fabric-and-foam seat pad, ' +
        'nicknamed the "Bikini" pad, softens it without hiding the frame.',
      facts: [
        'The wire form actually predates the solid plastic shell in the Eameses\' design process.',
        'The seat pad accessory is nicknamed the "Bikini" pad.',
        'It shares its base family with the molded shell chairs.'
      ]
    },
    {
      id: 'eames-aluminum-group',
      name: 'Eames Aluminum Group Management Chair',
      designer: 'Charles and Ray Eames',
      manufacturer: 'Herman Miller',
      year: 1958,
      origin: 'United States',
      category: 'Executive chair',
      style: 'Mid-Century Modern',
      materials: ['Cast aluminum frame', 'Suspended fabric or leather sling'],
      knownFor: 'a taut sling seat suspended between two cast aluminum sides',
      history:
        'Designed for an outdoor patio commission that never shipped, the Aluminum Group instead became one ' +
        'of the defining American executive chairs. Rather than pad a solid frame, the design stretches ' +
        'upholstery like a hammock between two aluminum side pieces, so the chair flexes with the sitter ' +
        'instead of only cushioning them.',
      facts: [
        'It was originally designed for outdoor use, not the office.',
        'The seat and back are suspended fabric, not padding over a solid shell.',
        'It remains in Herman Miller\'s catalog largely unchanged since 1958.'
      ]
    },
    {
      id: 'noguchi-table',
      name: 'Noguchi Table',
      designer: 'Isamu Noguchi',
      manufacturer: 'Herman Miller',
      year: 1948,
      origin: 'United States',
      category: 'Coffee table',
      style: 'Organic Modernism',
      materials: ['Glass top', 'Solid walnut or ebonized wood base'],
      knownFor: 'a two-piece interlocking wood base under a free-form glass top',
      history:
        'Sculptor Isamu Noguchi based the table on a wood-and-rope design he had made earlier for architect ' +
        'A. Conger Goodyear. The base is two identical curved wood pieces that interlock and can pivot, ' +
        'supporting a boomerang-shaped glass top with no hardware holding it down, so it reads as sculpture ' +
        'that happens to hold a coffee cup.',
      facts: [
        'The two base pieces are identical, just rotated against each other.',
        'Noguchi first explored the idea in an earlier table for a different client.',
        'The glass top rests on the base by gravity and friction alone.'
      ]
    },
    {
      id: 'nelson-bench',
      name: 'Nelson Platform Bench',
      designer: 'George Nelson',
      manufacturer: 'Herman Miller',
      year: 1946,
      origin: 'United States',
      category: 'Bench',
      style: 'Mid-Century Modern',
      materials: ['Solid wood or laminate top', 'Wood dowel legs'],
      knownFor: 'a simple slab bench that doubles as a coffee table or entry seat',
      history:
        'George Nelson designed it as flexible, low-cost furniture for a growing postwar Herman Miller line, ' +
        'and its plainness is the point: a flat plane on splayed dowel legs with no single fixed use. It shows ' +
        'up in showrooms as a coffee table, an entryway bench, and extra seating with equal ease.',
      facts: [
        'It has no fixed function by design; the same bench works as a table or a seat.',
        'It was part of Nelson\'s first furniture group for Herman Miller.',
        'Its dowel-leg detail became a recurring signature on other Nelson case pieces.'
      ]
    },
    {
      id: 'nelson-bubble-lamp',
      name: 'Nelson Bubble Lamp (Saucer)',
      designer: 'George Nelson',
      manufacturer: 'Herman Miller',
      year: 1952,
      origin: 'United States',
      category: 'Pendant lamp',
      style: 'Mid-Century Modern',
      materials: ['Steel wire frame', 'Self-webbing plastic spray skin'],
      knownFor: 'a translucent spun-plastic shade sprayed over a wire cage',
      history:
        'Inspired by silk-and-wire lamps Nelson saw pictured in a magazine, the Bubble replaced fragile silk ' +
        'with a self-webbing plastic spray that hardens over a wire skeleton, much cheaper to produce. Shapes ' +
        'ranged from the round Saucer to elongated cigar and cylinder forms, all sharing the same lit-paper-' +
        'lantern glow.',
      facts: [
        'The plastic skin is sprayed on wet and hardens into the shade shape.',
        'It came in several shapes, including the Saucer, Cigar, and Ball.',
        'The technique was borrowed from a cheaper lamp-making method Nelson read about.'
      ]
    },
    {
      id: 'barcelona-chair',
      name: 'Barcelona Chair',
      designer: 'Ludwig Mies van der Rohe and Lilly Reich',
      manufacturer: 'Knoll',
      year: 1929,
      origin: 'Germany',
      category: 'Lounge chair',
      style: 'Bauhaus',
      materials: ['Stainless or chrome-plated steel frame', 'Leather cushions'],
      knownFor: 'an X-shaped steel frame designed for a royal pavilion opening',
      history:
        'Mies van der Rohe designed the chair with Lilly Reich for King Alfonso XIII and Queen Victoria ' +
        'Eugenia to sit on at the opening of the German Pavilion at the 1929 Barcelona International ' +
        'Exposition. The curved steel frame was originally bolted, not welded, since welding a curve that ' +
        'clean was not yet reliable; Knoll later put it into production under license.',
      facts: [
        'It was designed for royalty to sit on at a building opening, not for retail sale.',
        'The original frames were bolted in sections rather than welded.',
        'Knoll has held the licensed production rights for decades.'
      ]
    },
    {
      id: 'womb-chair',
      name: 'Womb Chair',
      designer: 'Eero Saarinen',
      manufacturer: 'Knoll',
      year: 1948,
      origin: 'United States',
      category: 'Lounge chair',
      style: 'Organic Modernism',
      materials: ['Molded fiberglass shell', 'Foam padding', 'Steel rod legs'],
      knownFor: 'a deep, enveloping shell built for curling up rather than sitting upright',
      history:
        'Florence Knoll asked Saarinen for "a chair that was like a basket of pillows" she could curl up in, ' +
        'since most modern chairs of the era were upright and formal. Saarinen answered with one continuous ' +
        'molded shell deep enough to tuck your legs into, one of the first chairs designed around informal, ' +
        'casual posture.',
      facts: [
        'The brief came directly from Florence Knoll\'s own request.',
        'It was designed to be sat in sideways with legs tucked up, not only upright.',
        'It helped launch Saarinen\'s furniture career alongside his architecture practice.'
      ]
    },
    {
      id: 'saarinen-tulip-table',
      name: 'Saarinen Dining Table',
      designer: 'Eero Saarinen',
      manufacturer: 'Knoll',
      year: 1957,
      origin: 'United States',
      category: 'Dining table',
      style: 'Organic Modernism',
      materials: ['Cast aluminum pedestal base', 'Laminate, wood, marble or granite top'],
      knownFor: 'a single central pedestal that erases the "clutter of legs" under a table',
      history:
        'Saarinen designed the pedestal group, table and matching chairs, to solve what he called the ' +
        '"slum of legs" under a typical table. A single tapered base carries the whole top, so the table ' +
        'reads as one clean form from any angle, part of the era\'s broader push toward continuous, ' +
        'sculptural furniture.',
      facts: [
        'Saarinen designed a matching pedestal side chair and armchair in the same collection.',
        'He wanted every surface to feel like it grew out of one continuous shape.',
        'Round, oval and stone-top versions all exist within the same base family.'
      ]
    },
    {
      id: 'bertoia-diamond',
      name: 'Bertoia Diamond Chair',
      designer: 'Harry Bertoia',
      manufacturer: 'Knoll',
      year: 1952,
      origin: 'United States',
      category: 'Lounge chair',
      style: 'Mid-Century Modern',
      materials: ['Welded steel wire mesh', 'Chrome or powder-coated finish', 'Optional seat pad'],
      knownFor: 'a chair shell made entirely from bent and welded steel wire mesh',
      history:
        'Bertoia trained as a sculptor and metalworker before Florence Knoll invited him to design furniture, ' +
        'and he treated the chair as sculpture that happened to hold weight: welded wire mesh bent into a ' +
        'seat shape lets air and light pass through it. He reportedly told Knoll the chairs were "mostly made ' +
        'of air."',
      facts: [
        'Bertoia was primarily a sculptor and kept making sculpture after this design.',
        'He described the chairs as being "mostly made of air" because of the open wire form.',
        'Royalties from the chair funded his later sculpture and sound-art work.'
      ]
    },
    {
      id: 'wassily-chair',
      name: 'Wassily Chair (Model B3)',
      designer: 'Marcel Breuer',
      manufacturer: 'Knoll',
      year: 1925,
      origin: 'Germany',
      category: 'Lounge chair',
      style: 'Bauhaus',
      materials: ['Chrome-plated tubular steel', 'Leather or canvas slings'],
      knownFor: 'the first chair built from bent tubular steel',
      history:
        'Breuer, a Bauhaus student and later instructor, got the idea from the curved handlebars of his Adler ' +
        'bicycle and reasoned that bicycle-grade steel tube could be bent into furniture. Stretched leather ' +
        'slings replaced upholstery entirely. It was nicknamed for painter Wassily Kandinsky, a Bauhaus ' +
        'colleague who admired an early example.',
      facts: [
        'The design was inspired by bicycle handlebar tubing.',
        'It is widely considered the first tubular-steel chair ever produced.',
        'Its nickname credits a Bauhaus colleague, not Breuer himself.'
      ]
    },
    {
      id: 'cesca-chair',
      name: 'Cesca Chair',
      designer: 'Marcel Breuer',
      manufacturer: 'Knoll',
      year: 1928,
      origin: 'Germany',
      category: 'Side chair',
      style: 'Bauhaus',
      materials: ['Cantilevered tubular steel', 'Wood frame', 'Hand-caned seat and back'],
      knownFor: 'a cantilevered steel frame with a hand-caned seat and no back legs',
      history:
        'Breuer followed the Wassily chair with a cantilever design that removes the back legs entirely, ' +
        'letting the steel frame flex slightly for spring. He paired the cold industrial frame with hand-' +
        'woven cane, a deliberately warm, traditional material, to keep the chair from feeling clinical. It ' +
        'is named after his daughter, Francesca.',
      facts: [
        'It has no back legs; the frame cantilevers off the front supports.',
        'The cane seat is woven by hand, not machine-pressed.',
        'Breuer named it after his daughter, Francesca.'
      ]
    },
    {
      id: 'risom-lounge',
      name: 'Risom Lounge Chair',
      designer: 'Jens Risom',
      manufacturer: 'Knoll',
      year: 1943,
      origin: 'United States',
      category: 'Lounge chair',
      style: 'Scandinavian Modern',
      materials: ['Solid wood frame', 'Woven cotton or nylon webbing'],
      knownFor: 'a webbed seat born out of wartime material shortages',
      history:
        'Risom designed it for Hans Knoll\'s first furniture line during World War II, when steel and rubber ' +
        'were rationed for the war effort. He wove surplus parachute webbing across a simple wood frame ' +
        'instead, turning a wartime shortage into a defining, honest-materials look.',
      facts: [
        'It was Knoll\'s very first chair design as a company.',
        'The webbing was originally cut from surplus parachute webbing.',
        'It helped establish Knoll\'s reputation before Mies or Saarinen ever designed for the company.'
      ]
    },
    {
      id: 'platner-collection',
      name: 'Platner Lounge Chair and Table',
      designer: 'Warren Platner',
      manufacturer: 'Knoll',
      year: 1966,
      origin: 'United States',
      category: 'Lounge chair',
      style: 'Mid-Century Modern',
      materials: ['Welded and plated steel wire', 'Molded foam seat', 'Glass top (table)'],
      knownFor: 'hundreds of curved steel rods welded into one glowing form',
      history:
        'Platner set out to design furniture with "a decorative, rich, later Baroque quality," building it ' +
        'from a repetitive lattice of curved steel rods welded to circular frames, close enough together to ' +
        'look almost woven. Each piece uses hundreds of individually curved rods, which made it labor-' +
        'intensive and expensive from day one.',
      facts: [
        'Each chair uses several hundred individually curved steel rods.',
        'Platner wanted the collection to feel decorative rather than strictly minimal.',
        'The rods are welded at top and bottom to circular frames.'
      ]
    },
    {
      id: 'lc4-chaise',
      name: 'LC4 Chaise Longue',
      designer: 'Le Corbusier, Pierre Jeanneret, and Charlotte Perriand',
      manufacturer: 'Cassina',
      year: 1928,
      origin: 'France',
      category: 'Chaise lounge',
      style: 'Modernism',
      materials: ['Tubular chrome steel frame and base', 'Leather or pony-hide cushion'],
      knownFor: 'a cushion that rocks freely on a steel cradle until it finds your recline angle',
      history:
        'The three designers built the chaise so the body, not a mechanism, sets the angle: the padded frame ' +
        'rocks on a curved steel cradle until it settles, then locks against a separate steel base. Charlotte ' +
        'Perriand did much of the hands-on design work, though the piece was long credited mainly to Le ' +
        'Corbusier alone.',
      facts: [
        'The recline angle is found by rocking, then locked by sliding it against the base.',
        'Charlotte Perriand was a full collaborator on the design, not just an assistant.',
        'Cassina has held the licensed rights to Le Corbusier\'s furniture since the 1960s.'
      ]
    },
    {
      id: 'wishbone-chair',
      name: 'Wishbone Chair (CH24)',
      designer: 'Hans Wegner',
      manufacturer: 'Carl Hansen & Søn',
      year: 1949,
      origin: 'Denmark',
      category: 'Dining chair',
      style: 'Danish Modern',
      materials: ['Steam-bent solid beech or oak', 'Hand-woven paper cord seat'],
      knownFor: 'a single steam-bent piece forming the back and arms in one curve',
      history:
        'Wegner drew on portraits of Danish merchants sitting in Ming-dynasty Chinese chairs and simplified ' +
        'the form down to one bent element for the back and arms, supported by a Y-shaped, or "wishbone," ' +
        'back splat. Each seat is still hand-woven from paper cord, a wartime substitute for cane that stuck ' +
        'around because it wears in rather than out.',
      facts: [
        'The back and arms are one continuous steam-bent piece of wood.',
        'The seat cord is woven by hand, taking roughly an hour per chair.',
        'Its design traces back to Wegner\'s study of Ming-dynasty Chinese chairs.'
      ]
    },
    {
      id: 'series-7',
      name: 'Series 7 Chair',
      designer: 'Arne Jacobsen',
      manufacturer: 'Fritz Hansen',
      year: 1955,
      origin: 'Denmark',
      category: 'Stacking chair',
      style: 'Scandinavian Modern',
      materials: ['Molded laminated veneer shell', 'Chrome or wood legs'],
      knownFor: 'a single-piece molded plywood shell shaped like an hourglass',
      history:
        'Jacobsen refined a lamination technique that lets one continuous sheet of veneer twist through the ' +
        'seat, back and sides in a single shell, also strong enough to stack. It became one of the best-' +
        'selling chairs of the twentieth century and shows up everywhere from cafes to corporate boardrooms.',
      facts: [
        'It is frequently cited as one of the best-selling chairs ever produced.',
        'The shell is formed from a single piece of laminated veneer, not joined parts.',
        'It followed Jacobsen\'s earlier Ant chair, using the same shell-molding process refined further.'
      ]
    },
    {
      id: 'egg-chair',
      name: 'Egg Chair',
      designer: 'Arne Jacobsen',
      manufacturer: 'Fritz Hansen',
      year: 1958,
      origin: 'Denmark',
      category: 'Lounge chair',
      style: 'Scandinavian Modern',
      materials: ['Molded foam shell', 'Fabric or leather upholstery', 'Aluminum swivel base'],
      knownFor: 'a wraparound shell built to give a hotel lobby chair some privacy',
      history:
        'Jacobsen designed the Egg for the Royal Hotel in Copenhagen, a building he also designed down to ' +
        'the door handles. The high, curved wings around the seat create a sense of enclosure in an open ' +
        'lobby, an early example of furniture solving a privacy problem rather than only a seating one.',
      facts: [
        'It was designed for a specific building: the Royal Hotel in Copenhagen.',
        'Jacobsen designed nearly every detail of that hotel, not only its furniture.',
        'The high wing sides were meant to create privacy in an open lobby.'
      ]
    },
    {
      id: 'swan-chair',
      name: 'Swan Chair',
      designer: 'Arne Jacobsen',
      manufacturer: 'Fritz Hansen',
      year: 1958,
      origin: 'Denmark',
      category: 'Lounge chair',
      style: 'Scandinavian Modern',
      materials: ['Molded foam shell', 'Fabric or leather upholstery', 'Aluminum swivel base'],
      knownFor: 'sharing the Egg\'s hotel commission but in a lower, more open shell',
      history:
        'Designed alongside the Egg for the same Royal Hotel project, the Swan uses the same foam-over-shell ' +
        'technique but opens the sides up for a lighter, more compact silhouette. The two chairs are often ' +
        'shown together, though the Swan reads as the more casual of the pair.',
      facts: [
        'It was designed for the same hotel commission as the Egg chair.',
        'It uses a lower, more open shell than the Egg.',
        'A two-seat sofa version exists alongside the single chair.'
      ]
    },
    {
      id: 'ant-chair',
      name: 'Ant Chair',
      designer: 'Arne Jacobsen',
      manufacturer: 'Fritz Hansen',
      year: 1952,
      origin: 'Denmark',
      category: 'Stacking chair',
      style: 'Scandinavian Modern',
      materials: ['Molded laminated veneer shell', 'Steel legs'],
      knownFor: 'the three-legged chair that started Jacobsen\'s molded-plywood shell technique',
      history:
        'Jacobsen designed it for the canteen at a Danish pharmaceutical company, giving it a narrow-waisted ' +
        'shell that supposedly earned its insect nickname from the way the silhouette pinches in the middle. ' +
        'It was the first chair to use the molded shell technique Jacobsen later refined into the Series 7.',
      facts: [
        'It originally had three legs, not four, though four-leg versions exist now.',
        'It was designed for a company cafeteria, not a showroom.',
        'Its shell technique became the basis for the later Series 7 chair.'
      ]
    },
    {
      id: 'panton-chair',
      name: 'Panton Chair',
      designer: 'Verner Panton',
      manufacturer: 'Vitra',
      year: 1967,
      origin: 'Denmark',
      category: 'Side chair',
      style: 'Space Age',
      materials: ['Injection-molded plastic'],
      knownFor: 'the first chair molded from a single piece of plastic with no joints or legs',
      history:
        'Panton spent over a decade chasing a cantilevered chair molded as one continuous piece, with no ' +
        'distinction between legs, seat and back. Manufacturing caught up to the idea only when injection-' +
        'molded plastics matured enough to hold the S-curve shape under load, and Vitra put it into ' +
        'production in 1967.',
      facts: [
        'It took roughly a decade of material experiments before production caught up with the design.',
        'It has no legs in the traditional sense; the base is a continuous cantilever.',
        'It can be stacked despite its sculptural, one-piece shape.'
      ]
    },
    {
      id: 'navy-chair',
      name: 'Navy Chair (1006)',
      designer: 'Emeco, developed with Alcoa',
      manufacturer: 'Emeco',
      year: 1944,
      origin: 'United States',
      category: 'Side chair',
      style: 'Industrial',
      materials: ['Recycled aluminum'],
      knownFor: 'a wartime chair engineered to survive on Navy submarines',
      history:
        'The U.S. Navy asked for a lightweight chair that would not corrode, splinter or burn aboard warships, ' +
        'so Emeco worked with Alcoa to develop an aircraft-grade aluminum chair strong enough to be dropped ' +
        'from a height and still stand square. It takes roughly 77 manufacturing steps, and a long warranty ' +
        'follows it.',
      facts: [
        'It was originally engineered for submarines, not offices or homes.',
        'Each chair goes through dozens of separate hand and machine steps to build.',
        'It is made largely from recycled aluminum and carries a long warranty.'
      ]
    },
    {
      id: 'arco-lamp',
      name: 'Arco Floor Lamp',
      designer: 'Achille and Pier Giacomo Castiglioni',
      manufacturer: 'Flos',
      year: 1962,
      origin: 'Italy',
      category: 'Floor lamp',
      style: 'Italian Modernism',
      materials: ['Carrara marble base', 'Stainless steel arc', 'Aluminum shade'],
      knownFor: 'putting overhead light anywhere in a room without a ceiling fixture',
      history:
        'The Castiglioni brothers wanted a floor lamp that could light a dining table the way a hanging ' +
        'pendant does, without any wiring in the ceiling. A heavy marble block anchors a long steel arc that ' +
        'swings the light source out and down, so the lamp reads more like architecture than a table ' +
        'accessory.',
      facts: [
        'The marble base is heavy enough that it is typically carried using a hole cut through it.',
        'It was designed to substitute for a ceiling pendant with no rewiring needed.',
        'The arc lets the light source hang several feet away from where the base sits.'
      ]
    },
    {
      id: 'ph5-lamp',
      name: 'PH5 Pendant Lamp',
      designer: 'Poul Henningsen',
      manufacturer: 'Louis Poulsen',
      year: 1958,
      origin: 'Denmark',
      category: 'Pendant lamp',
      style: 'Scandinavian Modern',
      materials: ['Layered spun metal shades'],
      knownFor: 'a stack of curved shades designed to hide the bulb from every angle',
      history:
        'Henningsen spent decades studying how to shade a bulb so no direct glare reached the eye at any ' +
        'viewing angle while still throwing usable light, working out the shade curves off a logarithmic ' +
        'spiral. The PH5 was his refinement after the standard light bulb changed shape and broke his ' +
        'earlier PH lamps\' calculations.',
      facts: [
        'Its shade geometry follows a logarithmic spiral rather than an arbitrary curve.',
        'Henningsen redesigned it specifically because a change in standard bulb shape broke his earlier version.',
        'No direct bulb glare is visible from any normal viewing angle.'
      ]
    },
    {
      id: 'aj-lamp',
      name: 'AJ Floor Lamp',
      designer: 'Arne Jacobsen',
      manufacturer: 'Louis Poulsen',
      year: 1960,
      origin: 'Denmark',
      category: 'Floor lamp',
      style: 'Scandinavian Modern',
      materials: ['Steel base and stem', 'Aluminum shade'],
      knownFor: 'the lamp Jacobsen designed to match the Egg and Swan chairs at the Royal Hotel',
      history:
        'Designed as part of the same Royal Hotel commission that produced the Egg and Swan chairs, the AJ ' +
        'lamp carries the same restrained, rounded geometry across a completely different object, part of ' +
        'Jacobsen\'s habit of designing a building\'s furniture, lighting and hardware as one coherent system.',
      facts: [
        'It was designed for the same hotel project as the Egg and Swan chairs.',
        'Jacobsen designed it to match a broader family of lighting for the same building.',
        'A matching table lamp and wall sconce exist in the same collection.'
      ]
    },
    {
      id: 'bestlite-bl3',
      name: 'Bestlite BL3 Table Lamp',
      designer: 'Robert Dudley Best',
      manufacturer: 'Gubi',
      year: 1930,
      origin: 'United Kingdom',
      category: 'Table lamp',
      style: 'Industrial',
      materials: ['Stove-enameled steel', 'Brass or chrome fittings'],
      knownFor: 'a fully adjustable task lamp built from stove-enameled steel',
      history:
        'Best designed it after studying under Bauhaus-trained teachers and drew directly on industrial and ' +
        'naval task lighting for the jointed, fully adjustable arm. It furnished British desks and drafting ' +
        'tables for decades, including a long run in Winston Churchill\'s study, before Gubi acquired the ' +
        'rights and revived production.',
      facts: [
        'Its jointed arm design borrows directly from industrial and naval task lamps.',
        'It furnished desks in Winston Churchill\'s study, among other notable interiors.',
        'Gubi later acquired the rights and returned it to production after decades out of print.'
      ]
    },
    {
      id: 'schultz-outdoor',
      name: 'Schultz 1966 Outdoor Lounge Chair',
      designer: 'Richard Schultz',
      manufacturer: 'Knoll',
      year: 1966,
      origin: 'United States',
      category: 'Outdoor lounge chair',
      style: 'Outdoor Modernism',
      materials: ['Powder-coated aluminum frame', 'Vinyl-coated polyester mesh'],
      knownFor: 'the first outdoor furniture engineered to actually survive outdoors',
      history:
        'Florence Knoll asked Schultz to design furniture that could sit outside year-round after seeing how ' +
        'quickly earlier outdoor pieces corroded and faded at her own Florida home. He engineered aluminum ' +
        'joinery and weather-resistant mesh specifically so the collection would not need to come inside for ' +
        'winter, a new idea in outdoor furniture at the time.',
      facts: [
        'It was commissioned after Florence Knoll\'s own patio furniture failed outdoors within a season.',
        'It was engineered to be left outside through winter rather than stored.',
        'The collection includes chaises, dining chairs and tables built on the same hardware system.'
      ]
    },
    {
      id: 'tolix-a-chair',
      name: 'Tolix Chair A',
      designer: 'Xavier Pauchard',
      manufacturer: 'Tolix',
      year: 1934,
      origin: 'France',
      category: 'Stacking chair',
      style: 'Industrial',
      materials: ['Galvanized or lacquered steel'],
      knownFor: 'a riveted sheet-steel chair built for French cafes and factories',
      history:
        'Pauchard applied galvanizing, a rust-proofing process he had used on buckets and containers, to ' +
        'furniture, stamping and folding sheet steel into a light, stackable chair for outdoor cafes and ' +
        'industrial settings. The riveted seams and drainage holes in the seat are functional details that ' +
        'later became the chair\'s signature look.',
      facts: [
        'The galvanizing process was borrowed from Pauchard\'s work making steel buckets and bins.',
        'Small drainage holes in the seat are a functional detail, not decoration.',
        'It was built to stack and to live outdoors, unlike most furniture of its era.'
      ]
    },
    {
      id: 'min-sofa',
      name: 'Min Sofa',
      designer: 'DWR Studio',
      manufacturer: 'Design Within Reach',
      year: 2013,
      origin: 'United States',
      category: 'Sofa',
      style: 'Contemporary',
      materials: ['Kiln-dried hardwood frame', 'High-resiliency foam cushions', 'Performance fabric or leather'],
      knownFor: 'DWR\'s own compact, track-arm sofa built for smaller city rooms',
      history:
        'Developed in-house rather than licensed from an outside designer, Min was built to answer a gap in ' +
        'the vintage-reissue catalog: a clean-lined, track-arm sofa sized and priced for apartment living ' +
        'rather than a licensed museum piece. It is one of several Design Within Reach house collections ' +
        'built to sit alongside the historic designs on the same floor.',
      facts: [
        'It is a Design Within Reach house design, not a licensed reissue.',
        'It was sized specifically for smaller city apartments rather than large rooms.',
        'It ships with a choice of performance fabric or leather cover options.'
      ]
    },
    {
      id: 'eames-storage-unit',
      name: 'Eames Storage Unit (ESU)',
      designer: 'Charles and Ray Eames',
      manufacturer: 'Herman Miller',
      year: 1950,
      origin: 'United States',
      category: 'Storage unit',
      style: 'Mid-Century Modern',
      materials: ['Zinc-plated or painted steel frame', 'Masonite or fiberglass panels', 'Molded plywood case sides'],
      knownFor: 'stacking colorful panels and drawers onto an exposed steel frame like a piece of lab equipment',
      history:
        'The Eameses adapted structural ideas from their wartime plywood and metal work into a modular case-' +
        'goods system, exposing the steel frame rather than hiding it behind a cabinet face, so the unit reads ' +
        'as engineering rather than furniture. Panels, drawers and shelves come in different finishes and can ' +
        'be mixed within the same frame, letting one system serve as a bookcase, room divider or credenza.',
      facts: [
        'The steel frame is left exposed rather than hidden inside a cabinet.',
        'Panels and drawers can be mixed in different finishes within the same frame.',
        'It grew directly out of structural ideas from the Eameses\' wartime plywood work.'
      ]
    },
    {
      id: 'eames-shell-rocker',
      name: 'Eames Molded Plastic Armchair, Rocker Base',
      designer: 'Charles and Ray Eames',
      manufacturer: 'Herman Miller',
      year: 1950,
      origin: 'United States',
      category: 'Rocking chair',
      style: 'Mid-Century Modern',
      materials: ['Molded plastic shell', 'Bent birch rocker base', 'Steel rod supports'],
      knownFor: 'putting the same molded shell used on the armchair onto a bent-wood rocker base',
      history:
        'Developed alongside the Molded Plastic Armchair from the same MoMA-competition-era research, the RAR ' +
        'pairs the one-piece shell with a graceful bent-birch rocker base rather than the usual wire or wood-' +
        'dowel legs, an option added once the shell itself was already in production. It became one of the ' +
        'most recognizable nursery and living-room chairs of the postwar era.',
      facts: [
        'It uses the same molded shell developed for the Molded Plastic Armchair.',
        'The rocker base is bent birch rather than the wire or dowel legs used on other versions.',
        'It was added to the line after the shell chair itself was already in production.'
      ]
    },
    {
      id: 'marshmallow-sofa',
      name: 'Marshmallow Sofa',
      designer: 'George Nelson (Irving Harper)',
      manufacturer: 'Herman Miller',
      year: 1956,
      origin: 'United States',
      category: 'Sofa',
      style: 'Mid-Century Modern',
      materials: ['Steel frame', 'Eighteen round upholstered vinyl cushions'],
      knownFor: 'building a sofa\'s seat and back entirely out of eighteen separate round cushions',
      history:
        'Designed in George Nelson\'s office by Irving Harper, the sofa was an efficient way to upholster a ' +
        'sofa without steaming and shaping large panels: eighteen identical foam-and-vinyl discs bolt onto a ' +
        'simple steel frame instead of one continuous cushion. Its pop-art look made it more sculpture than ' +
        'sofa on most showroom floors, and it was not a strong seller until later decades revived interest in it.',
      facts: [
        'Its seat and back are built from eighteen separate round cushions, not continuous upholstery.',
        'It was designed within George Nelson\'s office, largely by Irving Harper.',
        'It was not a strong commercial seller when first released.'
      ]
    },
    {
      id: 'coconut-chair',
      name: 'Coconut Chair',
      designer: 'George Nelson (Irving Harper)',
      manufacturer: 'Herman Miller',
      year: 1955,
      origin: 'United States',
      category: 'Lounge chair',
      style: 'Mid-Century Modern',
      materials: ['Steel shell', 'Foam padding', 'Fabric or leather upholstery', 'Steel rod legs'],
      knownFor: 'a steel shell shaped like a one-eighth wedge cut from a coconut',
      history:
        'Also designed in Nelson\'s office by Irving Harper, the chair takes its silhouette from a wedge shape ' +
        'roughly one-eighth the size of a coconut shell, padded and upholstered over a steel frame. Slim steel ' +
        'rod legs let the heavy-looking shell appear to float, a contrast the design leans into rather than hides.',
      facts: [
        'Its shape is based on roughly one-eighth of a coconut shell.',
        'It was designed by Irving Harper working in George Nelson\'s studio.',
        'Thin steel rod legs are meant to make the bulky shell look like it is floating.'
      ]
    },
    {
      id: 'sayl-chair',
      name: 'Sayl Chair',
      designer: 'Yves Béhar',
      manufacturer: 'Herman Miller',
      year: 2011,
      origin: 'United States',
      category: 'Office chair',
      style: 'Contemporary',
      materials: ['Elastomeric suspension mesh back', 'Y-shaped internal support', 'Recycled and recyclable plastic'],
      knownFor: 'a suspension bridge engineering principle applied to an office chair back',
      history:
        'Yves Béhar based the chair\'s frameless back on suspension bridge design, using a single Y-shaped ' +
        'internal structure to hold a stretched mesh in tension instead of ringing the back in a rigid frame. ' +
        'It was designed with materials efficiency and recyclability in mind from the start, using noticeably ' +
        'less material than most task chairs while still meeting the same ergonomic standards.',
      facts: [
        'Its back is inspired by suspension bridge engineering rather than a rigid frame.',
        'A single Y-shaped structure holds the mesh in tension.',
        'It was designed with materials efficiency and recyclability as explicit goals.'
      ]
    },
    {
      id: 'aeron-chair',
      name: 'Aeron Chair',
      designer: 'Bill Stumpf and Don Chadwick',
      manufacturer: 'Herman Miller',
      year: 1994,
      origin: 'United States',
      category: 'Office chair',
      style: 'Contemporary',
      materials: ['Pellicle woven suspension mesh', 'Die-cast aluminum frame', 'Adjustable lumbar support'],
      knownFor: 'replacing foam-and-fabric seating with a woven "Pellicle" suspension mesh',
      history:
        'Stumpf and Chadwick built the Aeron around a taut, breathable Pellicle mesh instead of foam padding, ' +
        'arguing that foam traps heat and eventually breaks down while a suspended mesh keeps its shape and ' +
        'stays cool. It became a fixture of 1990s technology-company offices and later entered the permanent ' +
        'design collection of a major museum.',
      facts: [
        'Its seat and back use a woven "Pellicle" mesh instead of foam padding.',
        'It became closely associated with 1990s technology-company offices.',
        'It later entered a major museum\'s permanent design collection.'
      ]
    },
    {
      id: 'eames-walnut-stool',
      name: 'Eames Turned Stool',
      designer: 'Charles and Ray Eames',
      manufacturer: 'Herman Miller',
      year: 1960,
      origin: 'United States',
      category: 'Stool',
      style: 'Mid-Century Modern',
      materials: ['Solid turned wood (walnut and other finishes)'],
      knownFor: 'a sculptural solid-wood stool designed as impromptu seating for a lobby',
      history:
        'The Eameses designed the stool for the lobby of the Time-Life Building in New York, wanting seating ' +
        'that could scatter informally around the space rather than line up in rows. Turned from a single ' +
        'solid block of wood, it works equally as a stool, side table, or plant stand, and comes in four ' +
        'distinct turned shapes.',
      facts: [
        'It was originally designed for the Time-Life Building lobby in New York.',
        'It is turned from a solid block of wood, not assembled from separate pieces.',
        'It is offered in four distinct turned shapes.'
      ]
    },
    {
      id: 'nelson-ball-clock',
      name: 'Nelson Ball Clock',
      designer: 'George Nelson (Irving Harper)',
      manufacturer: 'Vitra',
      year: 1949,
      origin: 'United States',
      category: 'Wall clock',
      style: 'Mid-Century Modern',
      materials: ['Wood or colored balls', 'Steel spokes and rod hands'],
      knownFor: 'replacing clock numerals with colored wood balls on the ends of steel spokes',
      history:
        'Accounts differ on exactly who at Nelson\'s studio sketched it first, with Irving Harper, Isamu ' +
        'Noguchi and Nelson himself all reportedly present the evening the idea emerged in 1949, though it ' +
        'shipped under the Nelson name. Twelve spokes radiate from a center hub, each tipped with a colored ' +
        'ball standing in for a numeral; Vitra now produces it as part of its Design Museum collection.',
      facts: [
        'Several designers were reportedly present when the concept was first sketched.',
        'Colored balls on twelve spokes stand in for numerals on the clock face.',
        'It is now produced by Vitra as part of its Design Museum collection.'
      ]
    },
    {
      id: 'pollock-chair',
      name: 'Pollock Executive Chair',
      designer: 'Charles Pollock',
      manufacturer: 'Knoll',
      year: 1963,
      origin: 'United States',
      category: 'Office chair',
      style: 'Mid-Century Modern',
      materials: ['Steel frame', 'Foam-padded fiberglass shell', 'Aluminum swivel base'],
      knownFor: 'setting the template for the modern upholstered swivel executive chair',
      history:
        'Pollock spent years refining a chair that padded a fiberglass shell just enough to look tailored ' +
        'rather than bulky, wrapping the whole thing in a continuous ribbed upholstery pattern. Its silhouette ' +
        'became so widely copied in the following decades that it is sometimes credited with defining what an ' +
        '"executive chair" is supposed to look like at all.',
      facts: [
        'Its shell is fiberglass, padded and wrapped in a distinctive ribbed upholstery pattern.',
        'It took Pollock years of refinement before Knoll put it into production.',
        'Its silhouette has been widely imitated across the office furniture industry.'
      ]
    },
    {
      id: 'florence-knoll-sofa',
      name: 'Florence Knoll Sofa',
      designer: 'Florence Knoll',
      manufacturer: 'Knoll',
      year: 1954,
      origin: 'United States',
      category: 'Sofa',
      style: 'Mid-Century Modern',
      materials: ['Tailored upholstery', 'Tapered stainless steel legs', 'Kiln-dried hardwood frame'],
      knownFor: 'bringing architecture-grade tailoring to corporate lobby seating',
      history:
        'Trained under Mies van der Rohe and Eero Saarinen before running Knoll\'s design studio, Florence ' +
        'Knoll designed furniture she described as "filler" pieces meant to sit quietly behind the more ' +
        'sculptural chairs her studio also sold, since corporate clients needed sofas as much as showpieces. ' +
        'The clean, tailored lines and slim steel legs read as architecture rather than upholstery.',
      facts: [
        'Florence Knoll trained under both Mies van der Rohe and Eero Saarinen.',
        'She described pieces like this one as "filler" alongside more sculptural showpieces.',
        'It helped establish the look of the modern corporate lobby.'
      ]
    },
    {
      id: 'barcelona-stool',
      name: 'Barcelona Stool',
      designer: 'Ludwig Mies van der Rohe and Lilly Reich',
      manufacturer: 'Knoll',
      year: 1929,
      origin: 'Germany',
      category: 'Ottoman',
      style: 'Bauhaus',
      materials: ['Stainless or chrome-plated steel frame', 'Leather cushion'],
      knownFor: 'sharing the Barcelona Chair\'s X-frame in a backless ottoman',
      history:
        'Designed alongside the Barcelona Chair for the same German Pavilion commission, the stool scales the ' +
        'same curved X-frame down into a low, backless ottoman meant to pair with the chair, using the ' +
        'identical leather-strap cushion construction and frame detailing.',
      facts: [
        'It shares its curved X-frame design with the Barcelona Chair.',
        'It was designed for the same 1929 pavilion commission as the chair.',
        'Its cushion uses the same leather strap construction as the chair.'
      ]
    },
    {
      id: 'brno-chair',
      name: 'Brno Chair',
      designer: 'Ludwig Mies van der Rohe',
      manufacturer: 'Knoll',
      year: 1930,
      origin: 'Germany',
      category: 'Dining chair',
      style: 'Bauhaus',
      materials: ['Flat-bar or tubular steel frame', 'Leather or fabric upholstery'],
      knownFor: 'a cantilevered dining chair designed for a single private house',
      history:
        'Mies designed it for the dining room of the Tugendhat House in Brno, Czechoslovakia, one of his most ' +
        'celebrated residential commissions, offering it in both a flat-bar steel version and a rounder ' +
        'tubular-steel version. The cantilevered frame flexes slightly under weight, scaled to a quieter, more ' +
        'domestic dining chair than his other tubular steel furniture.',
      facts: [
        'It was designed for the dining room of the Tugendhat House in Brno.',
        'It exists in two frame versions: flat-bar steel and round tubular steel.',
        'Like Mies\'s other steel chairs, its cantilevered frame flexes slightly under weight.'
      ]
    },
    {
      id: 'mr-chair',
      name: 'MR Chair',
      designer: 'Ludwig Mies van der Rohe',
      manufacturer: 'Knoll',
      year: 1927,
      origin: 'Germany',
      category: 'Side chair',
      style: 'Bauhaus',
      materials: ['Cantilevered tubular steel', 'Caned or upholstered seat and back'],
      knownFor: 'predating the Barcelona Chair as one of the first cantilevered tubular steel chairs',
      history:
        'Mies designed the MR chair two years before the Barcelona Chair, using a continuous curved steel tube ' +
        'that sweeps from the front feet up and back with no rear legs at all. It debuted at the same ' +
        'Weissenhof housing exhibition that helped launch European modernist furniture to a wider audience.',
      facts: [
        'It predates the Barcelona Chair by about two years.',
        'Its frame is one continuous curved steel tube with no rear legs.',
        'It debuted at the Weissenhof housing exhibition.'
      ]
    },
    {
      id: 'saarinen-tulip-armchair',
      name: 'Saarinen Tulip Armchair',
      designer: 'Eero Saarinen',
      manufacturer: 'Knoll',
      year: 1957,
      origin: 'United States',
      category: 'Armchair',
      style: 'Organic Modernism',
      materials: ['Cast aluminum pedestal base', 'Molded fiberglass shell', 'Foam and fabric or leather upholstery'],
      knownFor: 'the pedestal chair designed to match Saarinen\'s single-leg dining table',
      history:
        'Part of the same pedestal collection as the Saarinen Dining Table, the armchair swaps a table\'s flat ' +
        'top for a molded, slightly reclined shell, still rising from one continuous tapered base with no ' +
        'visible joints, solving the same "clutter of legs" problem Saarinen saw under most dining furniture.',
      facts: [
        'It belongs to the same pedestal collection as the Saarinen Dining Table.',
        'Its base and shell are designed to read as one continuous form.',
        'It was created to solve the same "clutter of legs" problem as the matching table.'
      ]
    },
    {
      id: 'drop-chair',
      name: 'Drop Chair',
      designer: 'Arne Jacobsen',
      manufacturer: 'Fritz Hansen',
      year: 1958,
      origin: 'Denmark',
      category: 'Lounge chair',
      style: 'Scandinavian Modern',
      materials: ['Molded foam shell', 'Fabric or leather upholstery', 'Steel swivel base'],
      knownFor: 'a compact shell chair designed for the same hotel as the Egg and Swan',
      history:
        'Jacobsen designed the Drop for guest rooms at the same Royal Hotel commission that produced the Egg ' +
        'and Swan, giving it a similar molded shell but a smaller, more space-efficient footprint. It went out ' +
        'of production for decades before Fritz Hansen relaunched it after rediscovering original prototypes.',
      facts: [
        'It was designed for guest rooms in the same hotel project as the Egg and Swan.',
        'It has a smaller footprint than the Egg, suited to bedrooms rather than lobbies.',
        'It was out of production for decades before being relaunched from rediscovered prototypes.'
      ]
    },
    {
      id: 'ch07-shell-chair',
      name: 'CH07 Shell Chair',
      designer: 'Hans Wegner',
      manufacturer: 'Carl Hansen & Søn',
      year: 1963,
      origin: 'Denmark',
      category: 'Lounge chair',
      style: 'Danish Modern',
      materials: ['Molded plywood shell', 'Wood or steel base', 'Optional upholstered seat pad'],
      knownFor: 'a single curved plywood shell nicknamed the "Smiling" chair',
      history:
        'Wegner shaped the CH07 from one continuous piece of molded plywood that curves into armrests on ' +
        'either side, its front edge often described as curling into a smile. It sat out of production for ' +
        'years before renewed interest in Wegner\'s catalog brought it back.',
      facts: [
        'Its shell is one continuous piece of molded plywood, arms included.',
        'Its curved front edge has earned it the nickname the "Smiling" chair.',
        'It was out of production for a period before later demand brought it back.'
      ]
    },
    {
      id: 'ch25-lounge',
      name: 'CH25 Lounge Chair',
      designer: 'Hans Wegner',
      manufacturer: 'Carl Hansen & Søn',
      year: 1950,
      origin: 'Denmark',
      category: 'Lounge chair',
      style: 'Danish Modern',
      materials: ['Solid oak or walnut frame', 'Hand-woven paper cord seat', 'Upholstered back cushion'],
      knownFor: 'a low, wide lounge chair built around a woven paper cord seat',
      history:
        'Wegner designed the CH25 as an easy, low-slung lounge chair for relaxed sitting rather than dining, ' +
        'pairing the same hand-woven paper cord used on the Wishbone Chair with a wide, gently curved wood ' +
        'frame and a loose upholstered back cushion.',
      facts: [
        'It uses the same hand-woven paper cord seating as the Wishbone Chair.',
        'It was designed for relaxed, low lounge seating rather than dining.',
        'Its back cushion is a loose upholstered pad rather than a fixed shell.'
      ]
    },
    {
      id: 'lc2-armchair',
      name: 'LC2 Petit Modele Armchair',
      designer: 'Le Corbusier, Pierre Jeanneret, and Charlotte Perriand',
      manufacturer: 'Cassina',
      year: 1928,
      origin: 'France',
      category: 'Armchair',
      style: 'Modernism',
      materials: ['Tubular chrome steel frame', 'Down-filled leather cushions'],
      knownFor: 'cushions that look like they float inside a cage of chrome tube',
      history:
        'The three designers wrapped a simple tubular steel cage entirely around loose, down-filled cushions ' +
        'rather than upholstering a solid frame, so the cushions appear to hover just inside the structure. It ' +
        'was part of the same furniture program that produced the LC4 chaise, developed together for a single ' +
        '1929 exhibition.',
      facts: [
        'Its cushions sit loose inside a steel cage rather than being upholstered to a frame.',
        'It was developed as part of the same collection as the LC4 chaise.',
        'The whole collection debuted together at a single 1929 exhibition.'
      ]
    },
    {
      id: 'lc3-sofa',
      name: 'LC3 Grand Modele Sofa',
      designer: 'Le Corbusier, Pierre Jeanneret, and Charlotte Perriand',
      manufacturer: 'Cassina',
      year: 1928,
      origin: 'France',
      category: 'Sofa',
      style: 'Modernism',
      materials: ['Tubular chrome steel frame', 'Down-filled leather cushions'],
      knownFor: 'scaling the LC2\'s floating-cushion idea up to a full three-seat sofa',
      history:
        'Built on the same principle as the LC2 armchair, the three-seat Grand Confort wraps a wider tubular ' +
        'steel frame around larger down-filled cushions, keeping the same boxy, cage-like silhouette at sofa ' +
        'scale. Le Corbusier reportedly described the piece as a "true machine for sitting."',
      facts: [
        'It scales the same floating-cushion idea used on the LC2 armchair up to a sofa.',
        'Le Corbusier is said to have called it a "machine for sitting."',
        'It shares its cage-like steel frame construction with the LC2 and LC4.'
      ]
    },
    {
      id: 'ph-artichoke-lamp',
      name: 'PH Artichoke Lamp',
      designer: 'Poul Henningsen',
      manufacturer: 'Louis Poulsen',
      year: 1958,
      origin: 'Denmark',
      category: 'Pendant lamp',
      style: 'Scandinavian Modern',
      materials: ['Overlapping copper or steel leaves'],
      knownFor: 'seventy-two overlapping metal leaves arranged in twelve rows',
      history:
        'Commissioned for the restaurant at Copenhagen\'s Langelinie Pavilion, Henningsen arranged seventy-two ' +
        'curved leaves in twelve staggered rows so no direct light or glare escapes from any angle, extending ' +
        'the glare-free logic of his earlier PH lamps into a much larger, sculptural form. Its name comes from ' +
        'its resemblance to the vegetable.',
      facts: [
        'It was originally commissioned for a specific Copenhagen restaurant.',
        'It is built from seventy-two overlapping leaves arranged in twelve rows.',
        'Its name comes from its visual resemblance to the vegetable.'
      ]
    },
    {
      id: 'taccia-lamp',
      name: 'Taccia Lamp',
      designer: 'Achille and Pier Giacomo Castiglioni',
      manufacturer: 'Flos',
      year: 1962,
      origin: 'Italy',
      category: 'Table lamp',
      style: 'Italian Modernism',
      materials: ['Die-cast aluminum base', 'Blown glass diffuser bowl'],
      knownFor: 'a glass bowl reflector that simply rests, unattached, in a cupped stem',
      history:
        'The Castiglioni brothers designed the lamp so its large blown-glass bowl sits loose in a shallow cup ' +
        'at the top of the aluminum stem, held only by its own weight and shape rather than any fastener, in ' +
        'keeping with their broader interest in objects built from a small number of simple, honestly-used ' +
        'parts.',
      facts: [
        'Its glass diffuser bowl is not fastened down; it rests in place by weight and shape alone.',
        'Light bounces up into the bowl before diffusing back out into the room.',
        'The Castiglioni brothers were known for building designs from very few, honestly-used parts.'
      ]
    },
    {
      id: 'snoopy-lamp',
      name: 'Snoopy Lamp',
      designer: 'Achille and Pier Giacomo Castiglioni',
      manufacturer: 'Flos',
      year: 1967,
      origin: 'Italy',
      category: 'Table lamp',
      style: 'Italian Modernism',
      materials: ['Enameled metal shade', 'Marble base'],
      knownFor: 'a rounded snout-shaped shade that earned it an unofficial cartoon nickname',
      history:
        'The Castiglioni brothers designed a low, heavy marble base supporting a swiveling enameled metal ' +
        'shade whose rounded, snout-like profile quickly earned it its popular nickname, unrelated to any ' +
        'official cartoon licensing. The shade angles to direct light onto a desk while the fixture itself ' +
        'stays low and out of the eye line.',
      facts: [
        'Its popular nickname is not an official licensed reference to the cartoon character.',
        'The metal shade swivels to direct light where it is needed.',
        'Its base is solid marble, which keeps the fixture stable despite its top-heavy shade.'
      ]
    },
    {
      id: 'navy-111-chair',
      name: '111 Navy Chair',
      designer: 'Emeco, developed with Coca-Cola',
      manufacturer: 'Emeco',
      year: 2010,
      origin: 'United States',
      category: 'Side chair',
      style: 'Industrial',
      materials: ['Recycled PET plastic (111 bottles per chair)', 'Reclaimed additives'],
      knownFor: 'molding 111 recycled plastic bottles into the classic Navy chair silhouette',
      history:
        'Emeco partnered with Coca-Cola to build a version of its 1944 Navy Chair from recycled plastic ' +
        'bottles instead of aluminum, using exactly 111 bottles\' worth of material per chair, which is where ' +
        'the model name comes from. It keeps the original chair\'s silhouette and stackability while reframing ' +
        'a wartime industrial design as a statement about industrial waste.',
      facts: [
        'Each chair uses the material from exactly 111 recycled plastic bottles.',
        'It was developed through a partnership between Emeco and Coca-Cola.',
        'It keeps the same silhouette as Emeco\'s original 1944 aluminum Navy Chair.'
      ]
    },
    {
      id: 'broom-chair',
      name: 'Broom Counter Stool',
      designer: 'Philippe Starck',
      manufacturer: 'Emeco',
      year: 2016,
      origin: 'United States',
      category: 'Barstool',
      style: 'Industrial',
      materials: ['Reclaimed polypropylene', 'Reclaimed wood fiber', 'Glass fiber'],
      knownFor: 'being built largely from literal factory floor sweepings',
      history:
        'Starck challenged Emeco to build a stool almost entirely from waste already sitting in its own ' +
        'factory, and the result blends reclaimed polypropylene and wood fiber swept up from the shop floor ' +
        'with a small amount of glass fiber for strength, material that would otherwise be discarded.',
      facts: [
        'Much of its material comes from waste swept up off the factory floor.',
        'It combines reclaimed polypropylene and wood fiber with a small amount of glass fiber.',
        'Starck set the waste-material challenge to Emeco directly rather than the other way around.'
      ]
    },
    {
      id: 'beetle-chair',
      name: 'Beetle Chair',
      designer: 'GamFratesi',
      manufacturer: 'Gubi',
      year: 2013,
      origin: 'Denmark',
      category: 'Lounge chair',
      style: 'Contemporary Scandinavian',
      materials: ['Molded foam shell', 'Wood or steel legs', 'Fabric or leather upholstery'],
      knownFor: 'a rounded shell shape inspired by a beetle\'s protective wing case',
      history:
        'The Danish-Italian design duo GamFratesi shaped the chair\'s upholstered shell to echo the smooth, ' +
        'protective curve of a beetle\'s wing casing, aiming for something that felt both soft and armored at ' +
        'once. It comes in dining, lounge and bar height versions, all sharing the same rounded shell language.',
      facts: [
        'Its shell shape is inspired by a beetle\'s wing casing.',
        'It is designed by GamFratesi, a Danish-Italian design duo.',
        'The same shell shape is shared across dining, lounge and bar-height versions.'
      ]
    },
    {
      id: 'multi-lite-pendant',
      name: 'Multi-Lite Pendant',
      designer: 'Louis Weisdorf',
      manufacturer: 'Gubi',
      year: 1972,
      origin: 'Denmark',
      category: 'Pendant lamp',
      style: 'Space Age',
      materials: ['Lacquered or brass-finished metal shades'],
      knownFor: 'two dome-shaped shades that rotate independently to redirect the light',
      history:
        'Weisdorf nested two hemispherical shades, one inside the other, each able to rotate independently so ' +
        'the fixture can throw light straight down, spread it wide, or nearly close it off. Originally ' +
        'produced by the Danish company Lyfa, it fell out of production for decades before Gubi revived it.',
      facts: [
        'Its two dome shades rotate independently of each other.',
        'It can change how much light escapes without needing a dimmer switch.',
        'It was originally produced by a different company before Gubi revived it.'
      ]
    },
    {
      id: 'tolix-stool',
      name: 'Tolix Marais Stool',
      designer: 'Xavier Pauchard',
      manufacturer: 'Tolix',
      year: 1934,
      origin: 'France',
      category: 'Barstool',
      style: 'Industrial',
      materials: ['Galvanized or lacquered steel'],
      knownFor: 'the stacking stool companion to the Tolix Chair A',
      history:
        'Built using the same galvanizing and sheet-steel-folding process Pauchard developed for the Chair A, ' +
        'the stool was designed to stack alongside it in the same cafes, kitchens and factories, carrying over ' +
        'its perforated seat and riveted construction directly from the chair.',
      facts: [
        'It uses the same galvanizing process as the Tolix Chair A.',
        'It was designed to stack alongside the Chair A in the same settings.',
        'Its seat is perforated, matching a functional detail also found on the chair.'
      ]
    },
    {
      id: 'usm-haller',
      name: 'USM Haller Modular Shelving',
      designer: 'Fritz Haller and Paul Schärer',
      manufacturer: 'USM',
      year: 1965,
      origin: 'Switzerland',
      category: 'Modular shelving',
      style: 'Industrial',
      materials: ['Powder-coated steel panels', 'Chrome-plated tubular steel frame', 'Ball-joint connectors'],
      knownFor: 'a shelving system held together entirely by chrome ball joints, with no tools needed to reconfigure it',
      history:
        'Architect Fritz Haller designed the modular frame system for USM\'s own factory buildings before ' +
        'adapting the same logic, and the same chrome ball-joint connectors, into a furniture line with Paul ' +
        'Schärer. Because every joint uses the same connector, a unit can be rebuilt into a different shape ' +
        'without a single screw needing to be added or removed.',
      facts: [
        'The same connector is used at every joint in the system.',
        'It can be reconfigured into different shapes without adding or removing hardware.',
        'It originated from architect Fritz Haller\'s work designing USM\'s own factory buildings.'
      ]
    },
    {
      id: 'eames-plywood-lounge',
      name: 'Eames Molded Plywood Lounge Chair (LCW)',
      designer: 'Charles and Ray Eames',
      manufacturer: 'Herman Miller',
      year: 1946,
      origin: 'United States',
      category: 'Lounge chair',
      style: 'Mid-Century Modern',
      materials: ['Molded plywood seat and back', 'Wood legs', 'Rubber shock mounts'],
      knownFor: 'joining a plywood seat and back to its legs with flexible rubber shock mounts',
      history:
        'Years before the fiberglass shell chairs, the Eameses built the LCW from two curved plywood panels ' +
        'for the seat and back, connected to wood legs through rubber shock mounts that let the whole chair ' +
        'flex slightly. It grew out of molded leg splints the Eameses developed for the U.S. Navy during World ' +
        'War II, and the Museum of Modern Art later called it the best design of the twentieth century.',
      facts: [
        'Its plywood panels connect to the legs through flexible rubber shock mounts.',
        'The molding technique traces back to leg splints the Eameses developed for the Navy.',
        'The Museum of Modern Art later named it the best design of the twentieth century.'
      ]
    },
    {
      id: 'ch20-elbow-chair',
      name: 'CH20 Elbow Chair',
      designer: 'Hans Wegner',
      manufacturer: 'Carl Hansen & Søn',
      year: 1956,
      origin: 'Denmark',
      category: 'Dining chair',
      style: 'Danish Modern',
      materials: ['Solid steam-bent oak', 'Form-pressed veneer seat', 'Optional leather upholstery'],
      knownFor: 'sitting in Wegner\'s archive for nearly fifty years before anyone put it into production',
      history:
        'Wegner designed the chair in 1956, but it sat unused in his archive for close to five decades before ' +
        'Carl Hansen & Søn finally put it into production in 2005, when it won an ICFF Editors\' Award soon ' +
        'after release. Its low, steam-bent backrest doubles as an armrest on both sides, which is where its ' +
        '"elbow" name comes from.',
      facts: [
        'It sat in Wegner\'s archive for nearly fifty years before going into production.',
        'It won an ICFF Editors\' Award shortly after Carl Hansen & Søn released it in 2005.',
        'Its low backrest doubles as an armrest, which is where its name comes from.'
      ]
    },
    {
      id: 'ox-chair',
      name: 'Ox Chair',
      designer: 'Hans Wegner',
      manufacturer: 'Fredericia',
      year: 1960,
      origin: 'Denmark',
      category: 'Lounge chair',
      style: 'Danish Modern',
      materials: ['Solid wood frame', 'Molded cold-cured foam', 'Leather or fabric upholstery', 'Stainless steel base'],
      knownFor: 'a horn-shaped headrest and enveloping wingback form said to be inspired by Picasso',
      history:
        'Wegner departed from his usual restraint with a wingback lounge chair whose flared headrest suggests ' +
        'a pair of horns, a shape he reportedly developed after being struck by a Picasso bull sketch. Its ' +
        'upholstery is demanding enough that Fredericia trains upholsterers for roughly eighteen months before ' +
        'they are qualified to cover one. Wegner summed up his approach to the piece by saying, "we must play, ' +
        'but play seriously."',
      facts: [
        'Its flared headrest shape is said to have been inspired by a Picasso sketch of a bull.',
        'Fredericia reportedly trains upholsterers for about eighteen months before they cover this chair.',
        'Wegner described his approach to it by saying "we must play, but play seriously."'
      ]
    },
    {
      id: 'palissade-chair',
      name: 'Palissade Chair',
      designer: 'Ronan and Erwan Bouroullec',
      manufacturer: 'HAY',
      year: 2016,
      origin: 'Denmark',
      category: 'Outdoor dining chair',
      style: 'Contemporary Scandinavian',
      materials: ['Powder-coated steel', 'Cold-forged steel frame'],
      knownFor: 'a folded steel-rod outdoor chair with a soft, textile-like texture despite being solid metal',
      history:
        'French design duo Ronan and Erwan Bouroullec spent years developing a fine steel-rod construction and ' +
        'a powder-coat finish soft enough to the touch that the chair reads almost like woven fabric despite ' +
        'being entirely metal. Named after the French word for a defensive fence, it was designed to work ' +
        'equally well around a public park bench or a private balcony table.',
      facts: [
        'It is designed by French duo Ronan and Erwan Bouroullec.',
        'Its name comes from the French word for a defensive fence, or "palisade."',
        'Its powder-coat finish is engineered to feel soft despite the frame being solid steel.'
      ]
    },
    {
      id: 'cherner-chair',
      name: 'Cherner Chair',
      designer: 'Norman Cherner',
      manufacturer: 'Cherner Chair Company',
      year: 1958,
      origin: 'United States',
      category: 'Armchair',
      style: 'Mid-Century Modern',
      materials: ['Molded plywood shell', 'Bent plywood legs'],
      knownFor: 'a curved plywood armchair that spent decades tied up in a manufacturing dispute',
      history:
        'Cherner designed the chair for a small manufacturer called Plycraft, which built and sold it while at ' +
        'times crediting other designers on its own advertising instead of Cherner. Production stopped after a ' +
        'few years, and the chair only returned when Cherner\'s sons tracked down the original molds decades ' +
        'later and founded the Cherner Chair Company to build it properly under their father\'s name.',
      facts: [
        'It was originally produced by a manufacturer called Plycraft, not the Cherner Chair Company.',
        'Plycraft\'s own advertising did not always credit Cherner correctly at the time.',
        'Cherner\'s sons founded the Cherner Chair Company decades later after recovering the original molds.'
      ]
    },
    {
      id: 'nelson-swag-leg',
      name: 'Nelson Swag Leg Armchair',
      designer: 'George Nelson',
      manufacturer: 'Herman Miller',
      year: 1958,
      origin: 'United States',
      category: 'Armchair',
      style: 'Mid-Century Modern',
      materials: ['Molded fiberglass shell', 'Cast aluminum cross-shaped legs'],
      knownFor: 'chrome cross-shaped legs that swing out from a single center point',
      history:
        'Nelson\'s studio designed the swag-leg group around a distinctive cast aluminum base whose four legs ' +
        'sweep outward from one central point rather than mounting separately at the shell\'s corners, giving ' +
        'the whole line, chairs and a matching desk alike, a lighter, more sculptural stance than a typical ' +
        'four-leg base.',
      facts: [
        'Its cross-shaped base legs sweep out from one central point rather than four separate corners.',
        'The same swag-leg base was used across a small group of matching pieces, including a desk.',
        'It was designed within George Nelson\'s studio for Herman Miller.'
      ]
    },
    {
      id: 'eames-plywood-lounge-metal',
      name: 'Eames Molded Plywood Lounge Chair (LCM)',
      designer: 'Charles and Ray Eames',
      manufacturer: 'Herman Miller',
      year: 1946,
      origin: 'United States',
      category: 'Lounge chair',
      style: 'Mid-Century Modern',
      materials: ['Molded plywood seat and back', 'Chrome-plated steel legs', 'Rubber shock mounts'],
      knownFor: 'swapping the wood-leg base of the LCW for slender chrome steel legs',
      history:
        'Released alongside the wood-legged LCW from the same molded-plywood research, the LCM trades the ' +
        'wood base for slim chrome-plated steel legs, giving the identical curved plywood seat and back a ' +
        'lighter, more industrial stance. Both versions use the same rubber shock-mount joints that let the ' +
        'shell flex slightly rather than sitting rigid.',
      facts: [
        'It uses the same molded plywood seat and back as the wood-legged LCW.',
        'Its legs are chrome-plated steel rather than the LCW\'s wood legs.',
        'Both versions were developed from the same molded-plywood research at the same time.'
      ]
    }
  ],

  /* ---------- Product know-how: the showroom vocabulary ---------- */
  knowHow: [
    {
      id: 'eight-way',
      topic: 'Construction',
      term: 'Eight-way hand-tied',
      short: 'A coil suspension where each spring is tied by hand in eight directions.',
      detail:
        'Each coil in the seat deck is tied to its neighbors and to the frame in eight directions with twine. ' +
        'It takes real labor, so it shows up in higher price points. The payoff is that the seat flexes as one ' +
        'connected surface instead of as separate springs, so it stays level as it ages.',
      question: 'What does "eight-way hand-tied" describe on upholstered seating?',
      answer: 'A coil seat suspension tied by hand in eight directions',
      distractors: [
        'A stitching pattern used on the outside back',
        'An eight-step wood finishing process',
        'A frame joint using eight screws per corner'
      ]
    },
    {
      id: 'kiln-dried',
      topic: 'Construction',
      term: 'Kiln-dried hardwood frame',
      short: 'Lumber baked down to low moisture so the frame will not warp or split later.',
      detail:
        'Green lumber keeps shrinking as it dries in the customer\'s home, which loosens joints and squeaks. ' +
        'Kiln drying pulls the moisture out before the frame is built, so the wood is dimensionally stable. ' +
        'It is one of the cleanest quality signals you can point to inside a cutaway.',
      question: 'Why is a frame kiln-dried before it is built?',
      answer: 'To remove moisture so the wood will not warp, split or loosen',
      distractors: [
        'To darken the wood so stain takes evenly',
        'To sterilize the lumber against insects only',
        'To soften the wood so staples drive in easier'
      ]
    },
    {
      id: 'foam-density',
      topic: 'Materials',
      term: 'Foam density',
      short: 'Weight per cubic foot, which predicts how long a cushion holds its shape.',
      detail:
        'Density is measured in pounds per cubic foot and it is about durability, not comfort. Firmness is a ' +
        'separate spec. A high-density cushion can feel soft and still resist going flat, which is exactly the ' +
        'distinction a customer needs when they say they want something soft that lasts.',
      question: 'Foam density tells you mainly about which of these?',
      answer: 'How well the cushion resists going flat over time',
      distractors: [
        'How firm the cushion feels when you sit',
        'How much heat the cushion traps',
        'How stain resistant the cover will be'
      ]
    },
    {
      id: 'top-grain',
      topic: 'Leather',
      term: 'Top-grain leather',
      short: 'The outer layer of the hide, sanded and refinished for consistency.',
      detail:
        'Top-grain comes off the outside of the hide with the surface corrected, so color and texture are even ' +
        'across a whole sofa. Full-grain leaves the surface untouched and shows more character and more scars. ' +
        'Bonded leather is neither: it is shredded leather scrap bound to a backing.',
      question: 'How is bonded leather different from top-grain leather?',
      answer: 'It is shredded leather scrap bonded onto a backing material',
      distractors: [
        'It is the untouched outer surface of the hide',
        'It is leather dyed all the way through the hide',
        'It is a thicker cut taken from the same outer layer'
      ]
    },
    {
      id: 'veneer',
      topic: 'Materials',
      term: 'Veneer over solid wood',
      short: 'A thin real-wood layer on a stable core, not a cheap imitation.',
      detail:
        'A veneer is real wood sliced thin and laid over a stable substrate. On wide surfaces like a table top, ' +
        'that resists the seasonal expansion that can crack a solid slab, and it allows grain patterns that solid ' +
        'stock cannot produce. Veneer is a construction choice; laminate is a printed picture of wood.',
      question: 'What is the difference between a wood veneer and a laminate?',
      answer: 'Veneer is a thin layer of real wood; laminate is a printed surface',
      distractors: [
        'Veneer is printed; laminate is real wood sliced thin',
        'They are the same thing under two regional names',
        'Veneer is always thicker than one quarter inch'
      ]
    },
    {
      id: 'martindale',
      topic: 'Materials',
      term: 'Double rubs',
      short: 'An abrasion test count that predicts how a fabric wears.',
      detail:
        'A machine rubs the fabric back and forth and counts cycles until it shows wear. Higher counts mean a more ' +
        'durable fabric. Residential fabrics commonly land in the mid thousands, while heavy commercial goods run ' +
        'far higher. It answers the pet-and-kids question with a number instead of an opinion.',
      question: 'What does a "double rub" count measure on upholstery fabric?',
      answer: 'Abrasion resistance, meaning how well the fabric resists wearing through',
      distractors: [
        'How well the fabric resists fading in sunlight',
        'How much liquid the fabric repels before staining',
        'How many times the cover can be machine washed'
      ]
    },
    {
      id: 'performance-fabric',
      topic: 'Materials',
      term: 'Performance fabric',
      short: 'Fiber engineered for stain and wear resistance, not a spray-on coating.',
      detail:
        'In a true performance fabric the stain resistance is built into the fiber rather than applied to the ' +
        'surface, so it does not wear off with cleaning. Solution-dyed fibers also take color into the fiber ' +
        'itself, which is why they resist fading and can handle stronger cleaning.',
      question: 'In a true performance fabric, where does the stain resistance live?',
      answer: 'Engineered into the fiber itself rather than sprayed on top',
      distractors: [
        'In a topical coating applied at the retailer',
        'In the foam directly beneath the cover',
        'In a removable liner sewn under the cushion'
      ]
    },
    {
      id: 'sinuous',
      topic: 'Construction',
      term: 'Sinuous spring',
      short: 'S-shaped steel wire running front to back across the seat frame.',
      detail:
        'Also called no-sag. It is a serpentine steel wire stretched across the seat, faster to install than ' +
        'hand-tied coils and lighter. It is common in contemporary upholstery and perfectly good construction; ' +
        'the thing to check is gauge and how closely the wires are spaced.',
      question: 'A sinuous or "no-sag" spring is best described as which of these?',
      answer: 'An S-shaped steel wire stretched across the seat frame',
      distractors: [
        'A coil tied by hand in eight directions',
        'A woven nylon strap replacing steel entirely',
        'A steel cradle that sets a chaise\'s recline angle'
      ]
    },
    {
      id: 'cantilever',
      topic: 'Construction',
      term: 'Cantilever frame',
      short: 'A frame with no back legs, flexing on unsupported tube or plastic instead.',
      detail:
        'A cantilever chair extends its base forward so the seat and back hang unsupported past the front legs, ' +
        'with no back legs at all. The overhang itself provides spring, since the material bends slightly under ' +
        'weight, which is why cantilever chairs are almost always metal or molded plastic rather than wood. The ' +
        'Cesca and Panton chairs are both cantilever designs.',
      question: 'What defines a cantilever chair frame?',
      answer: 'It extends the seat and back past a support with no back legs, so it flexes',
      distractors: [
        'It has four evenly spaced legs at each corner',
        'It reclines using a hidden motor and actuator',
        'It uses a metal frame purely for decoration'
      ]
    },
    {
      id: 'bent-plywood',
      topic: 'Construction',
      term: 'Molded, laminated plywood',
      short: 'Thin wood veneers glued and pressed into a curved shell in one piece.',
      detail:
        'Multiple thin layers of veneer are glued with grain running in alternating directions, then pressed in ' +
        'a heated mold to set a curved shape permanently. The result is a single continuous shell, strong along ' +
        'the curve, that solid wood cannot achieve without steaming and bracing it. It is the technique behind ' +
        'the Eames Lounge Chair shells and Jacobsen\'s Series 7.',
      question: 'How does a molded plywood chair shell get its curved shape?',
      answer: 'Thin wood veneers are glued with alternating grain and pressed in a heated mold',
      distractors: [
        'A solid plank is steamed and bent by hand, one layer',
        'It is 3D printed from a wood-fiber resin',
        'It is carved from a solid block after gluing'
      ]
    },
    {
      id: 'cane-webbing',
      topic: 'Materials',
      term: 'Hand-caned seat',
      short: 'Rattan cane woven by hand through drilled holes to form a seat or back.',
      detail:
        'Real cane seating is woven strand by strand through holes drilled around the frame, taking real hours ' +
        'of skilled labor per piece, as on the Cesca and Wishbone chairs. Machine-pressed cane sheet, glued into ' +
        'a routed groove, looks similar but is a faster, lower-cost substitute worth telling apart on the floor.',
      question: 'What separates hand-caned seating from pressed cane sheet?',
      answer: 'Hand caning is woven strand by strand through drilled holes; pressed cane is glued in as a sheet',
      distractors: [
        'Hand caning uses plastic strands; pressed cane uses rattan',
        'Pressed cane is always more expensive to produce',
        'There is no real difference between the two methods'
      ]
    },
    {
      id: 'tubular-steel',
      topic: 'Materials',
      term: 'Bent tubular steel',
      short: 'Steel tube bent into a frame, first borrowed from bicycle manufacturing.',
      detail:
        'Bending hollow steel tube into continuous curved frames, as on the Wassily and Cesca chairs, came ' +
        'directly out of bicycle-frame technology. It is light, strong, and lets a frame flex slightly for ' +
        'comfort without any separate spring or cushion.',
      question: 'The bent tubular steel frame used in Bauhaus-era chairs was adapted from which industry?',
      answer: 'Bicycle manufacturing',
      distractors: [
        'Aerospace manufacturing',
        'Shipbuilding',
        'Railroad construction'
      ]
    },
    {
      id: 'powder-coating',
      topic: 'Materials',
      term: 'Powder-coated finish',
      short: 'A dry pigment sprayed on and baked, common on outdoor aluminum frames.',
      detail:
        'Powder coating sprays a dry, electrostatically charged pigment onto metal, then bakes it into a hard, ' +
        'even shell. It resists chipping and UV fade far better than wet paint, which is why nearly all outdoor ' +
        'aluminum and steel furniture frames use it instead of a sprayed liquid finish.',
      question: 'What makes powder coating a good fit for outdoor metal furniture?',
      answer: 'It bakes into a hard, even shell that resists chipping and UV fade',
      distractors: [
        'It is a clear coat that shows the bare metal underneath',
        'It is applied as a liquid and air-dries at room temperature',
        'It is only cosmetic and adds no weather resistance'
      ]
    },
    {
      id: 'teak-outdoor',
      topic: 'Materials',
      term: 'Teak (outdoor furniture)',
      short: 'A naturally oil-rich hardwood that resists rot and weather without sealing.',
      detail:
        'Teak carries its own natural oils and silica, which is why it was historically used for ship decks, ' +
        'and it needs no sealing to survive outdoors. Left untreated it weathers to a silver-gray patina; ' +
        'oiling keeps the original honey-brown color if the customer prefers that look instead.',
      question: 'Why is teak often left unsealed for outdoor furniture?',
      answer: 'Its natural oils and silica already resist rot and weather on their own',
      distractors: [
        'Sealing teak makes it structurally weaker',
        'Teak cannot absorb any sealant or oil',
        'Unsealed teak is required by furniture safety codes'
      ]
    },
    {
      id: 'sled-base',
      topic: 'Construction',
      term: 'Sled base',
      short: 'A continuous curved runner on each side, replacing four separate legs.',
      detail:
        'Rather than four separate legs, a sled base bends a single continuous piece of tube or flat steel ' +
        'into two curved runners, one on each side, so the chair or table appears to glide rather than stand. ' +
        'It is common on cantilevered task and dining chairs because the curve itself provides a small amount ' +
        'of give underfoot.',
      question: 'What is a "sled base" on a chair or table?',
      answer: 'A continuous curved runner on each side that replaces four separate legs',
      distractors: [
        'A set of four splayed dowel legs',
        'A hydraulic column that adjusts height',
        'A flat steel plate the frame bolts directly to the floor'
      ]
    },
    {
      id: 'book-matched',
      topic: 'Materials',
      term: 'Book-matched veneer',
      short: 'Adjacent veneer slices flipped open like a book so the grain mirrors across the seam.',
      detail:
        'When a log is sliced into veneer sheets, book-matching takes two adjacent slices and flips one over ' +
        'like a page, so the grain pattern mirrors itself across the seam instead of repeating. It shows up on ' +
        'tabletops and case pieces where a symmetrical, almost painterly grain pattern is the selling point ' +
        'rather than a flaw to hide.',
      question: 'What does "book-matched" mean when describing wood veneer?',
      answer: 'Adjacent veneer slices are flipped so the grain mirrors across the seam',
      distractors: [
        'The veneer is cut to match a specific paint color',
        'Every panel on the piece uses a different tree species',
        'The veneer is glued in a random, unmatched pattern on purpose'
      ]
    },
    {
      id: 'ball-joint',
      topic: 'Construction',
      term: 'Ball-joint connector',
      short: 'A chrome ball fitting that lets modular tube furniture bolt together at any angle.',
      detail:
        'A ball-joint connector is a machined metal ball with threaded holes drilled through it at fixed ' +
        'angles, letting tube-frame furniture bolt together into a shelving unit, table base or room divider ' +
        'without welding. Because every joint uses the identical connector, a system built this way can be ' +
        'taken apart and rebuilt into a different shape with the same parts.',
      question: 'What makes a ball-joint connector useful in modular tube furniture?',
      answer: 'It lets tubes bolt together at fixed angles without welding, so the system can be reconfigured',
      distractors: [
        'It hides the seam so the frame looks like one continuous tube',
        'It is a decorative cap with no structural function',
        'It only works on wood frames, not metal ones'
      ]
    },
    {
      id: 'solution-dyed',
      topic: 'Materials',
      term: 'Solution-dyed acrylic',
      short: 'Outdoor fabric colored in the liquid fiber stage, before it is even a thread.',
      detail:
        'Most fabric is dyed after it is woven. Solution-dyed acrylic adds color to the liquid acrylic before ' +
        'it is extruded into fiber, so the color runs all the way through every strand instead of sitting on ' +
        'the surface. That is why it resists sun-fading and can be bleach-cleaned without the color lifting, ' +
        'which is why nearly all quality outdoor cushion fabric uses it.',
      question: 'Why does solution-dyed acrylic resist fading better than surface-dyed fabric?',
      answer: 'The color is added to the fiber itself before it is spun, not applied to the surface afterward',
      distractors: [
        'It is coated in a UV-blocking varnish after weaving',
        'It is woven from two different fiber colors twisted together',
        'It contains no dye at all and gets its color from the weave pattern'
      ]
    },
    {
      id: 'chrome-plating',
      topic: 'Materials',
      term: 'Chrome plating',
      short: 'A thin layer of chromium electroplated over another metal for shine and rust resistance.',
      detail:
        'Chrome plating electroplates a thin layer of chromium onto a base metal, usually steel, which is what ' +
        'gives many mid-century frames their mirror shine. It is a coating, not a solid material: chrome ' +
        'plating can eventually wear through at edges and joints with heavy use, which is one reason some ' +
        'reissues offer a "brushed steel" or matte alternative that skips plating entirely.',
      question: 'What is chrome plating on a steel chair frame?',
      answer: 'A thin layer of chromium electroplated onto the steel for shine and rust resistance',
      distractors: [
        'A solid chrome alloy the entire frame is cast from',
        'A paint color mixed to look metallic',
        'A polishing process that needs no added material at all'
      ]
    },
    {
      id: 'wool-felt',
      topic: 'Materials',
      term: 'Wool felt',
      short: 'Wool fibers matted together under heat and pressure, with no weaving involved.',
      detail:
        'Felt is made by matting wool fibers together with heat, moisture and pressure until they lock into a ' +
        'single dense sheet, unlike woven fabric, which interlaces separate threads. It resists fraying at a ' +
        'cut edge since there is no weave to unravel, which is why it shows up as a raw-edged sleeve on lounge ' +
        'chairs and as sound-dampening panels without needing a hemmed seam.',
      question: 'Why does wool felt not fray at a cut edge the way woven fabric does?',
      answer: 'It is matted fiber with no woven threads to unravel',
      distractors: [
        'It is coated in a clear sealant after cutting',
        'It is always cut on a diagonal bias',
        'It is heat-sealed by a laser during manufacturing'
      ]
    }
  ]
};

/* Convenience lookups built once at load. */
const PRODUCTS = CATALOG.products;
const KNOWHOW = CATALOG.knowHow;
const PRODUCT_BY_ID = Object.fromEntries(PRODUCTS.map(p => [p.id, p]));
