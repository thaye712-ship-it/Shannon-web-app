/* ============================================================
   Shannon — Design Within Reach product catalog
   ------------------------------------------------------------
   Real products sold by Design Within Reach (dwr.com), researched
   from published design history rather than scraped from the live
   site (dwr.com could not be reached directly from this build
   environment). This is a first batch of roughly a quarter of the
   eventual catalog, weighted toward the iconic, licensed design
   classics DWR is best known for selling — the pieces sales
   associates most need cold. More products can be added later in
   the same shape with no other code changes required.
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
    }
  ]
};

/* Convenience lookups built once at load. */
const PRODUCTS = CATALOG.products;
const KNOWHOW = CATALOG.knowHow;
const PRODUCT_BY_ID = Object.fromEntries(PRODUCTS.map(p => [p.id, p]));
