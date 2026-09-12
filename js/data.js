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
      photo: "https://images.hermanmiller.group/asset/71f5a747-9615-4ed1-a54a-68fecc55c5c9/W/WS_ELO_5667_100077567.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/m/4fac97ea917e9f62/W-HM_2552200_100366391_cocoa_chrome_walnut_f.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/m/9c287f893071866a/W-HM_519_100068558_black_black_f.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/asset/5bd8699d-5903-4f3b-9fab-9733ba6c4bac/W/HM_841_425698_white_f.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/m/22104549db2c5204/W-OCC_32058_20170721141830739.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/asset/6a36c688-8e57-4b4b-8d25-904324e372ac/W/LI_NEL_P_20120715_176.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/asset/b7ae9f8d-eb75-412b-9e89-89187cc0cb18/W/HM_6241_101738_white_f3.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
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
      photo: "https://images.hermanmiller.group/asset/d5d43a76-fdb3-4d6c-9931-61c4d255b288/W/DWR_1318_100079557_tan_a.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/asset/d59faaf6-5be8-4b84-87dc-9c0e58daade2/W/DWR_7876_100360310_puff_cloud_f.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/asset/35d4d8ca-3f8f-480c-9e53-d774ce1e6503/W/KNO_7204_100801207_oval_78_emperador_light_cream_f.png",
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
      photo: "https://images.hermanmiller.group/m/20e16212ed67c314/W-KNO_463_100496928_air_a.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/m/5dbcaaf6f152102d/W-KNO_7852_100547487_black_black_a.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/asset/e216ba27-43db-403b-88bc-d78316fdc51d/W/KNO_2020_341943_natural_beech_chrome_a-tif.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
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
      photo: "https://images.hermanmiller.group/m/549504ad223c12c0/W-DWR_2210_7119_FRAME_walnut_WEBBING_black-jpg.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/m/691a886381301079/W-DWR_1570_100208777_nickel_knoll_velvet_marina_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
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
      photo: "https://images.hermanmiller.group/m/b169b147e945d8e6/W-DWR_6515_100130924_cowhide_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
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
      photo: "https://images.hermanmiller.group/m/438cc11b4ce10460/W-DWR_2582_516396_oak_f.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/asset/d629fbc1-c57a-4203-83cf-13c940c9306d/W/DWR_7318_100663657_lacquered_blue_chromed_f-tif.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/asset/4ab1bb8e-88d3-495b-9e60-68c26b027b9d/W/DWR_1390_270953_black_f.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/asset/72aac65b-651e-4bf2-9b3f-2df29d4beffe/W/DWR_7501_100521366_atom_green_f.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/m/979c5c4744afb79c/W-DWR_711_653183_black_f.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/asset/ce77dce8-324a-4591-b72a-4cd8a350acb2/W/DWR_6044_106412_white_f-tif.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/m/1fe5620b36f47231/W-DWR_2122_100281_brushed_f.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/asset/6f050174-9f13-4eaa-af9b-6f90a56074a4/W/DWR_780_158343_steel_grey_p.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f0f0f0&bg=f0f0f0&auto=format&w=1000&h=1000&fit=fill",
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
      photo: "https://images.hermanmiller.group/asset/61d08bb5-9402-4a83-9add-d99812fb9620/W/DWR_6013_100738621_blue_chrome_f3.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/asset/4e17a021-4167-449f-a93a-19b8d6d8e02d/W/DWR_4621_100738616_olive_green_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f0f0f0&bg=f0f0f0&auto=format&w=1000&h=1000&fit=fill",
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
      photo: null,
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
      photo: "https://images.hermanmiller.group/asset/67b1000b-4267-4dd6-bd65-0819ff120edd/W/DWR_3777_10002624_onyx_f.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: null,
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
      photo: null,
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
      photo: "https://images.hermanmiller.group/m/86a81230d035578a/W-HM_5280_194884_multi_a.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/m/92af71e2ac4c0e8c/W-HM_2197712_100366457_white_chrome_maple_a.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/asset/7c59b182-dfb5-46ac-8c3d-9bd1b695f8c8/W/HM_6230_100590820_alder_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f0f0f0&bg=f0f0f0&auto=format&w=1000&h=1000&fit=fill",
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
      photo: "https://images.hermanmiller.group/asset/c7cdf648-9a86-402f-bd59-2529619f6862/W/HM_975_100188160_goldenrod_white_f.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/m/37240250314b7974/W-HM_2294_100209035_fog_studio_white_cadet_hghtadjs_a.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/asset/1008c72d-64bd-4146-905e-3e54dfd39b53/W/HM_2195348_100069170_graphite_f-tif.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/asset/75d47e3a-e29b-425c-a05a-60ae1ddcaa14/W/HM_237_103701_walnut_f.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/m/66434da5ad173583/W-HM_1745_110259_multi_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f0f0f0&bg=f0f0f0&auto=format&w=1000&h=1000&fit=fill",
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
      photo: "https://images.hermanmiller.group/asset/3005e654-295c-4537-b7f3-39a5bf443a54/W/DWR_4461_100290232_volo_leather_aluminum_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f0f0f0&bg=f0f0f0&auto=format&w=1000&h=1000&fit=fill",
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
      photo: "https://images.hermanmiller.group/asset/8eb620a8-bccf-42ca-bc5b-fc58d46e8ffb/W/DWR_4034_452311_volo_leather_black_a.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/asset/003a5b88-3cd0-49c0-b465-1e50696be314/W/KNO_6823_204316_volo_black_f.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/asset/0bee86dd-1d8d-430f-ab96-ee6a003f2931/W/DWR_4840_207577_black_f.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/m/46c695bf2e9545be/W-DWR_968_100132443_rattan_a.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/asset/c6202920-9357-4b08-a5cb-6896494467e7/W/KNO_7224_100789545_seatpad_cato_brunette_cream_a.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill",
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
      photo: "https://images.hermanmiller.group/asset/9ca5657d-f241-4e63-be30-bbc11c6668e7/W/DWR_1206_100702863_black_chrome_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
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
      photo: "https://images.hermanmiller.group/m/3bd69fe3c3ab3c97/W-DWR_7345_516402_walnut_black_a-jpg.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
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
      photo: "https://images.hermanmiller.group/m/c036d2e1803946bc/W-DWR_5305_699921_oiled_oak_natural_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
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
      photo: "https://images.hermanmiller.group/m/bab4a7280e6b5de6/W-DWR_4026_100130881_grafite_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=2500&h=2500&q=60&fit=fill&fill=solid",
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
      photo: "https://images.hermanmiller.group/m/6b5447cbf3721379/W-DWR_1855_100213213_anthracite_black_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
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
      photo: "https://images.hermanmiller.group/asset/10c10eb6-2aee-4f26-8557-523f6f4d2636/W/DWR_4215_100668050_smokey_blue-brass_f1.png",
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
      photo: "https://images.hermanmiller.group/m/832e394fdf16b8f3/W-DWR_7532_100127744_black_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
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
      photo: "https://images.hermanmiller.group/m/29f23c00844060ae/W-DWR_2514587_100581698_blue_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
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
      photo: "https://images.hermanmiller.group/m/4b5968d2824c58b0/W-DWR_3773_458382_red_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
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
      photo: "https://images.hermanmiller.group/m/f81cd6ed322a23a4/W-DWR_4644_9017289_white_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
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
      photo: "https://images.hermanmiller.group/asset/b1fca7c3-e31c-4efb-910c-a556f1971a58/W/DWR_2197545_100148691_dove_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
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
      photo: "https://images.hermanmiller.group/m/adf41b9a54784d52/W-DWR_2197921_100106242_brass_f.png",
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
      photo: "https://images.hermanmiller.group/asset/93ecd1cd-aad2-4560-8fae-3cab4aae2aa9/W/DWR_6345_9039306_white_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
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
      photo: "https://images.hermanmiller.group/m/fa9282a2a7bcea40/W-DWR_2609576_100157741_white_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
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
      photo: "https://images.hermanmiller.group/asset/06420238-b6cb-457c-8fc3-5f6c64a9b12b/W/DWR_1378_675956_santos_palisander_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
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
      photo: "https://images.hermanmiller.group/m/d5c1c433e4a44b89/W-DWR_4020_100159059_soaped_oak_brown_vendor_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
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
      photo: "https://images.hermanmiller.group/asset/e9186ce5-9dd3-4e5d-b602-446967557c46/W/DWR_2613539_100774885_cognac_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
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
      photo: "https://images.hermanmiller.group/m/c1f424bf7d45b979/W-HAY_2514621_100127981_olive_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
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
      photo: "https://images.hermanmiller.group/m/31c83cd4be1b3b7a/W-DWR_5641_100073191_classic_ebony_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
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
      photo: "https://images.hermanmiller.group/m/59a20595d4244975/W-LI_NSL_P_20120815_131.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
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
      photo: "https://images.hermanmiller.group/asset/1d84af65-f13d-4cd4-8954-afc7f0a746c6/W/HM_628_100098815_palisander_alder_chrome_a.png",
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
    },
    {
      id: 'platner-dining-table',
      photo: "https://images.hermanmiller.group/asset/f310ce6b-0ee6-4b13-a524-002bab787307/W/DWR_5955_10002097_gold_glass_vendor_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Platner Dining Table',
      designer: 'Warren Platner',
      manufacturer: 'Knoll',
      year: 1966,
      origin: 'United States',
      category: 'Dining table',
      style: 'Mid-Century Modern',
      materials: ['Nickel- or gold-plated steel wire rod base', 'Tempered glass top', 'Clear lacquer finish'],
      knownFor: 'a base of hundreds of curved steel rods taking as many as a thousand welds to build',
      history:
        'Platner worked with I.M. Pei and Eero Saarinen before developing his own collection, which he ' +
        'built around the belief that modernism had room for decorative, graceful design in the spirit of ' +
        'a period style like Louis XV. The dining table uses the same welded wire-rod language as his ' +
        'lounge chair, and a single piece can take as many as a thousand welds. Made in Italy.',
      facts: [
        'A single piece can require as many as a thousand individual welds.',
        'Platner worked with both I.M. Pei and Eero Saarinen before designing this collection.',
        'He wanted modernism to allow for decoration, citing Louis XV as a reference point.'
      ]
    },
    {
      id: 'nelson-x-leg-table',
      photo: "https://images.hermanmiller.group/m/2c344a885b3e1848/W-LI_NXL_P_20110130_074.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Nelson X-Leg Table',
      designer: 'George Nelson',
      manufacturer: 'Herman Miller',
      year: 1950,
      origin: 'United States',
      category: 'Dining table',
      style: 'Mid-Century Modern',
      materials: ['Walnut or santos palisander veneer top', 'Tubular steel legs', 'Chrome or powder-coated finish'],
      knownFor: 'a table deliberately designed to work as a desk, a dining table or a work surface',
      history:
        'Nelson worked at home and in the office with little distinction between the two, and the X-Leg ' +
        'Table reflects that: it was designed to be universal rather than assigned to one room. It pairs ' +
        'equally well with dining chairs or a task chair, which is exactly the point of its plain crossed ' +
        'steel base.',
      facts: [
        'It was designed to work as a desk and a dining table interchangeably.',
        'Its crossed tubular steel legs give the design its name.',
        'Nelson\'s lack of separation between home and office life shaped the brief.'
      ]
    },
    {
      id: 'eames-table-round',
      photo: "https://images.hermanmiller.group/asset/9f585459-7832-4947-b5e3-a909a158f5b1/W/HM_104_100115229_white_black_aluminum_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Eames Table, Round',
      designer: 'Charles and Ray Eames',
      manufacturer: 'Herman Miller',
      year: 1964,
      origin: 'United States',
      category: 'Dining table',
      style: 'Mid-Century Modern',
      materials: ['Walnut, ash or laminate top', 'Powder-coated steel column', 'Aluminum base'],
      knownFor: 'a single central column that keeps legroom clear in both homes and offices',
      history:
        'The Eameses designed the table as a durable, unfussy solution that would work in a home or a ' +
        'commercial space without modification. A single streamlined column carries the top, leaving ' +
        'legroom uninterrupted, and leveling glides handle uneven floors. Depending on options it is ' +
        'built from varying percentages of recycled and recyclable material.',
      facts: [
        'It was designed to work equally in residential and commercial settings.',
        'Leveling floor glides let it sit flat on uneven floors.',
        'Depending on the options chosen it uses varying amounts of recycled material.'
      ]
    },
    {
      id: 'lc6-table',
      photo: "https://images.hermanmiller.group/m/1fda89b7eca2dd62/W-DWR_5014_221122_black_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'LC6 Table',
      designer: 'Le Corbusier, Pierre Jeanneret, and Charlotte Perriand',
      manufacturer: 'Cassina',
      year: 1928,
      origin: 'France',
      category: 'Dining table',
      style: 'Modernism',
      materials: ['Glass top', 'Elliptical tubular steel base', 'Polyester-epoxy powder-coated finish'],
      knownFor: 'an aircraft-wing-profile steel base carrying a plain sheet of glass',
      history:
        'Part of the same 1928 furniture program as the LC2 and LC4, the LC6 pares a dining table down to ' +
        'a welded steel base and a glass top, with the base built from elliptical tube closer to an ' +
        'aircraft wing section than a furniture leg. Each piece is signed and numbered, produced by ' +
        'Cassina under exclusive license from the Le Corbusier Foundation.',
      facts: [
        'Its base is built from elliptical tube rather than round tube.',
        'Each one is signed and numbered by Cassina.',
        'It comes from the same 1928 collection as the LC2 armchair and LC4 chaise.'
      ]
    },
    {
      id: 'florence-knoll-table',
      photo: "https://images.hermanmiller.group/m/4c338b325df63bb5/W-DWR_2527589_100203700_satin_carrara_chrome_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Florence Knoll Table, Rectangular',
      designer: 'Florence Knoll',
      manufacturer: 'Knoll',
      year: 1954,
      origin: 'United States',
      category: 'Dining table',
      style: 'Mid-Century Modern',
      materials: ['Solid marble top', 'Polished chrome base'],
      knownFor: 'pairing a solid stone slab with a minimal chrome frame',
      history:
        'Florence Knoll ran the Knoll Planning Unit and approached interiors as total design, furniture ' +
        'included. The table shows the same architectural restraint as the rest of her work: a solid ' +
        'marble top, a polished chrome base, and no decoration anywhere. Made in Italy.',
      facts: [
        'Its top is solid marble rather than a stone veneer.',
        'Florence Knoll ran the Knoll Planning Unit, which planned whole interiors.',
        'She approached furniture as part of a total interior rather than as standalone objects.'
      ]
    },
    {
      id: 'aalto-l-leg-table',
      photo: "https://images.hermanmiller.group/asset/d58acd07-c61e-4037-96f3-06d8b667a6c8/W/DWR_2603528_100716449_white_laminate_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'L-Leg Round Table',
      designer: 'Alvar Aalto',
      manufacturer: 'Artek',
      year: 1933,
      origin: 'Finland',
      category: 'Dining table',
      style: 'Scandinavian Modern',
      materials: ['Solid birch legs', 'Birch, laminate or linoleum top'],
      knownFor: 'a bent birch leg that turns ninety degrees into the tabletop with no bracket',
      history:
        'Aalto developed the L-Leg with manufacturer Otto Korhonen in the late 1920s: precise saw cuts ' +
        'are made into solid birch and veneer strips glued in, letting the wood bend a right angle and ' +
        'attach straight to the underside of the top. Patented in 1933, Aalto called the result the ' +
        'little sister of the architectural column. Made in Finland.',
      facts: [
        'The leg bends by sawing the solid birch and gluing veneer strips into the cuts.',
        'Aalto called the L-Leg \'the little sister of the architectural column\'.',
        'The bending technique was patented in 1933.'
      ]
    },
    {
      id: 'barcelona-table',
      photo: "https://images.hermanmiller.group/m/8a7a55fd209d18f5/W-DWR_27_215589_glass_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Barcelona Table',
      designer: 'Ludwig Mies van der Rohe',
      manufacturer: 'Knoll',
      year: 1930,
      origin: 'Germany',
      category: 'Coffee table',
      style: 'Bauhaus',
      materials: ['Bar stock steel with hand-ground, hand-buffed chrome', 'Polished glass top with beveled edge'],
      knownFor: 'a single-piece steel base hand-ground and hand-buffed to a mirror',
      history:
        'Designed as the companion to the Barcelona Chair, the table uses the same hand-finished ' +
        'approach: the base is formed as a single piece of bar stock steel, then hand-ground and ' +
        'hand-buffed rather than machine-polished. The glass carries a slight green tint and a beveled ' +
        'edge, and the table is still built to Mies\'s original specifications.',
      facts: [
        'Its base is made as a single piece rather than joined sections.',
        'The chrome is hand-ground and hand-buffed rather than machine finished.',
        'It was designed as the companion piece to the Barcelona Chair.'
      ]
    },
    {
      id: 'eames-plywood-coffee-table',
      photo: "https://images.hermanmiller.group/m/1616bd40e4dc136e/W-HM_5328_294782_walnut_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Eames Molded Plywood Coffee Table',
      designer: 'Charles and Ray Eames',
      manufacturer: 'Herman Miller',
      year: 1946,
      origin: 'United States',
      category: 'Coffee table',
      style: 'Mid-Century Modern',
      materials: ['Molded five-ply top', 'Molded eight-ply legs', 'Walnut, ash or ebonized ash veneer'],
      knownFor: 'applying the Eameses\' Kazam! plywood machine to a table instead of a chair',
      history:
        'The Eameses spent the early 1940s pressing thin veneer against a heated membrane in a homemade ' +
        'rig they nicknamed the Kazam! Machine, and this table came straight out of that work. The top is ' +
        'five plies, the legs eight, all fused and bent rather than cut and joined.',
      facts: [
        'It came out of the same Kazam! Machine plywood experiments as the Eames chairs.',
        'The top is five plies thick while the legs are eight.',
        'It was released the same year as the LCW plywood lounge chair.'
      ]
    },
    {
      id: 'noguchi-rudder-table',
      photo: "https://images.hermanmiller.group/m/34e14dfb0d9649c4/W-HM_6109_9052884_white_ash_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Noguchi Rudder Table',
      designer: 'Isamu Noguchi',
      manufacturer: 'Herman Miller',
      year: 1949,
      origin: 'United States',
      category: 'Coffee table',
      style: 'Organic Modernism',
      materials: ['Ebonized maple, walnut or ash veneer over plywood', 'Chromed steel hairpin legs'],
      knownFor: 'a rudder-shaped wood leg paired with two hairpin legs that nearly disappear',
      history:
        'Noguchi balanced the top on one broad, rudder-shaped wooden leg and two thin chromed steel ' +
        'hairpins. At a glance the metal legs vanish and the top looks like it rests on the wood alone, ' +
        'which is the sleight of hand the design is built around.',
      facts: [
        'Its wooden leg is shaped like a boat rudder, which gives the table its name.',
        'The two thin steel hairpin legs are meant to visually disappear.',
        'It arrived a year after Noguchi\'s better-known glass-topped coffee table.'
      ]
    },
    {
      id: 'laccio-table',
      photo: "https://images.hermanmiller.group/m/05871145720c0a06/W-DWR_1420_297455_white_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Laccio Table',
      designer: 'Marcel Breuer',
      manufacturer: 'Knoll',
      year: 1924,
      origin: 'Germany',
      category: 'Side table',
      style: 'Bauhaus',
      materials: ['Seamless tubular steel frame', 'Marble or plastic laminate top'],
      knownFor: 'the low table Breuer designed to sit alongside the Wassily Chair',
      history:
        'Breuer designed the Laccio as a companion to the Wassily, using the same bent tubular steel ' +
        'logic at table scale. The frame is seamless, the top simply rests within it, and the two sizes ' +
        'nest. Each table carries an individual number for identification.',
      facts: [
        'It was designed to accompany Breuer\'s Wassily Chair.',
        'Its tubular steel frame is seamless rather than joined.',
        'Each table is individually numbered.'
      ]
    },
    {
      id: 'girard-flower-table',
      photo: "https://images.hermanmiller.group/asset/314f5c3f-7024-4547-9162-34549f07888b/W/HM_GFT_61827.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Girard Flower Table',
      designer: 'Alexander Girard',
      manufacturer: 'Herman Miller',
      year: 1977,
      origin: 'United States',
      category: 'Coffee table',
      style: 'Mid-Century Modern',
      materials: ['Powder-coated steel'],
      knownFor: 'a petal-shaped base under a scalloped top, usable indoors or out',
      history:
        'Girard spent decades running Herman Miller\'s textile division, and the Flower Table carries the ' +
        'same decorative instinct into steel: a petal-shaped base beneath a scalloped top. It comes in ' +
        'two sizes and works indoors or outdoors.',
      facts: [
        'Its base is shaped like flower petals and its top is scalloped to match.',
        'Girard led Herman Miller\'s textile division for over two decades.',
        'It is built for both indoor and outdoor use.'
      ]
    },
    {
      id: 'e1027-table',
      photo: "https://images.hermanmiller.group/m/3ad53a8989553c0/W-DWR_436_510790_COLOR_chrome-jpg.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Adjustable Table E1027',
      designer: 'Eileen Gray',
      manufacturer: 'ClassiCon',
      year: 1927,
      origin: 'Ireland',
      category: 'Side table',
      style: 'Modernism',
      materials: ['Chromed tubular steel', 'Clear glass top'],
      knownFor: 'a cantilevered side table that slides over a bed or sofa and adjusts in height',
      history:
        'Gray designed it for E1027, the seaside house she built for herself, reportedly so her sister ' +
        'could take breakfast in bed. The C-shaped base is cantilevered so the top can hover over a bed ' +
        'or chair rather than bumping into it, and the height adjusts by sliding the column.',
      facts: [
        'It is named after E1027, the house Gray designed and built for herself.',
        'Its cantilevered base lets the top extend over a bed or sofa.',
        'The height adjusts by sliding the central column.'
      ]
    },
    {
      id: 'nelson-swag-leg-desk',
      photo: "https://images.hermanmiller.group/m/c763e9fa6eccb32d/W-HM_6255_276658_walnut_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Nelson Swag Leg Desk',
      designer: 'George Nelson',
      manufacturer: 'Herman Miller',
      year: 1958,
      origin: 'United States',
      category: 'Desk',
      style: 'Mid-Century Modern',
      materials: ['Swaged steel legs', 'Solid walnut stretcher', 'Walnut veneer top', 'Formed plastic organizer trays'],
      knownFor: 'legs shaped by a metal-swaging process that curves and tapers steel tube',
      history:
        'The collection takes its name from swaging, a manufacturing process that uses pressure to curve ' +
        'and taper metal tubing, which is what gives the legs their profile. The desk adds brightly ' +
        'colored plastic cubbies across the back and a solid walnut stretcher for stability.',
      facts: [
        'Swaging, the tube-forming process, is where the collection\'s name comes from.',
        'Brightly colored plastic dividers form the storage cubbies.',
        'A solid walnut stretcher ties the legs together for rigidity.'
      ]
    },
    {
      id: 'eames-desk-unit',
      photo: "https://images.hermanmiller.group/m/cb42b581199dd55b/W-HM_1366_192460_multi_zinc_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Eames Desk Unit',
      designer: 'Charles and Ray Eames',
      manufacturer: 'Herman Miller',
      year: 1952,
      origin: 'United States',
      category: 'Desk',
      style: 'Mid-Century Modern',
      materials: ['Plywood top', 'Painted hardboard panels', 'Zinc-coated steel frame'],
      knownFor: 'the desk built on the same exposed steel frame system as the Eames storage units',
      history:
        'The desk is the writing-surface member of the same modular family as the Eames Storage Unit, ' +
        'using the identical zinc-coated steel frame with colored panels dropped into it. A file drawer ' +
        'hangs on the right and nylon glides keep it easy on floors.',
      facts: [
        'It uses the same exposed steel frame system as the Eames Storage Unit.',
        'A file drawer is built into the right-hand side.',
        'Its colored panels are painted hardboard set into the frame.'
      ]
    },
    {
      id: 'risom-desk',
      photo: "https://images.hermanmiller.group/m/107bd6e3f9670aa/W-DWR_2213_643115_black_walnut_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Risom Desk',
      designer: 'Jens Risom',
      manufacturer: 'Design Within Reach',
      year: 1968,
      origin: 'United States',
      category: 'Desk',
      style: 'Mid-Century Modern',
      materials: ['Solid walnut, oak or ebonized oak', 'Leather top with protective finish'],
      knownFor: 'a small-space desk Risom first designed for his own home',
      history:
        'Risom designed it for his own house as a compact answer to not having room for a real office. He ' +
        'described it plainly as a writing surface rather than a desk. A leather top with a ' +
        'stain-resistant finish sits in the solid wood frame, and a single drawer holds a removable tray.',
      facts: [
        'Risom originally designed it for his own home.',
        'He described it as \'really a writing surface\' rather than a desk.',
        'Its leather top carries a stain-resistant protective finish.'
      ]
    },
    {
      id: 'magis-spun-chair',
      photo: "https://images.hermanmiller.group/m/6769ebcdc8a72120/W-DWR_9540_100566464_blue_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Magis Spun Chair',
      designer: 'Thomas Heatherwick',
      manufacturer: 'Magis',
      year: 2010,
      origin: 'United Kingdom',
      category: 'Outdoor lounge chair',
      style: 'Contemporary',
      materials: ['Rotational-molded polyethylene'],
      knownFor: 'a chair that stands up like a sculpture and spins a full circle on its side',
      history:
        'Heatherwick\'s studio works across design, architecture and urban planning, and the Spun reflects ' +
        'that blurring: upright it reads as a sculptural object, tipped onto its side it becomes a seat ' +
        'that rotates a full 360 degrees while you sit in it. It is rotationally molded in one piece and ' +
        'works indoors or out.',
      facts: [
        'Standing upright it functions as sculpture; on its side it becomes a seat.',
        'It spins a full 360 degrees while someone is sitting in it.',
        'It is rotationally molded as a single piece of polyethylene.'
      ]
    },
    {
      id: 'risom-outdoor-lounge',
      photo: "https://images.hermanmiller.group/m/79736146ba81abb4/W-DWR_2547800_100342231_fern_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Risom Outdoor Lounge Chair',
      designer: 'Jens Risom',
      manufacturer: 'Knoll',
      year: 1942,
      origin: 'United States',
      category: 'Outdoor lounge chair',
      style: 'Outdoor Modernism',
      materials: ['Oiled teak frame', 'Sunbrella acrylic webbing'],
      knownFor: 'the wartime webbed chair rebuilt in teak and Sunbrella for outdoor use',
      history:
        'Knoll took Risom\'s 1942 webbed lounge chair, the company\'s first commissioned design, and ' +
        'rebuilt it for outside three-quarters of a century later. The parachute-surplus webbing becomes ' +
        'water-repellent Sunbrella and the wood frame becomes oiled teak, which weathers to a silver ' +
        'patina. Each piece carries the KnollStudio logo and the designer\'s signature.',
      facts: [
        'The original 1942 version was one of the first pieces Knoll ever commissioned.',
        'Its outdoor webbing is Sunbrella acrylic rather than the original parachute surplus.',
        'The teak frame is left to weather to a silver patina.'
      ]
    },
    {
      id: 'sculptura-lounge',
      photo: "https://images.hermanmiller.group/asset/f52f3d11-3c21-4e02-8d37-fe8ff01f7661/W/DWR_2601505_100708010_black_f1.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Sculptura Lounge Chair',
      designer: 'Russell Woodard',
      manufacturer: 'Woodard Furniture Company',
      year: 1956,
      origin: 'United States',
      category: 'Outdoor lounge chair',
      style: 'Outdoor Modernism',
      materials: ['Powder-coated iron mesh frame', 'Outdoor foam cushions', 'Sunbrella fabric'],
      knownFor: 'hand-formed iron mesh, still shaped by hand decades later',
      history:
        'Woodard Furniture has been building outdoor furniture in Michigan since 1866, and Russell ' +
        'Woodard\'s 1956 Sculptura brought modernism into that line with a commanding hand-formed iron ' +
        'mesh shell. The chair is still formed entirely by hand, now with weatherproof finishes.',
      facts: [
        'The shell is hand-formed iron mesh rather than machine-pressed.',
        'Woodard Furniture Company was founded in Michigan in 1866.',
        'It is lightweight despite the iron construction.'
      ]
    },
    {
      id: 'pacha-outdoor',
      photo: "https://images.hermanmiller.group/asset/bf7ad2bd-7734-44b5-b840-dab7ccb34ab0/W/DWR_2536187_100265338_white_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Pacha Outdoor Lounge Chair',
      designer: 'Pierre Paulin',
      manufacturer: 'Gubi',
      year: 1975,
      origin: 'France',
      category: 'Outdoor lounge chair',
      style: 'Space Age',
      materials: ['Metal swivel base', 'Wood frame', 'Cut foam cushions', 'Outdoor polypropylene fabric'],
      knownFor: 'a legless, ground-hugging lounge shape from the era of low-level living',
      history:
        'Paulin was central to the 1960s idea of low-level living, which did away with chair legs and put ' +
        'people closer to the floor. Pacha is that idea in an enveloping organic form, lifted only a few ' +
        'inches on a slim swivel base. The outdoor version wraps two layers of fabric, the inner one ' +
        'water-repellent.',
      facts: [
        'It sits only a few inches off the ground on a swiveling base.',
        'Paulin helped popularize \'low-level living\' seating in the 1960s.',
        'The outdoor version uses two fabric layers, the inner one water-repellent.'
      ]
    },
    {
      id: 'masters-chair',
      photo: "https://images.hermanmiller.group/m/64bb62e9187d8014/W-DWR_1017_9197336_gray_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Masters Chair',
      designer: 'Philippe Starck and Eugeni Quitllet',
      manufacturer: 'Kartell',
      year: 2010,
      origin: 'Italy',
      category: 'Indoor/outdoor dining chair',
      style: 'Contemporary',
      materials: ['Batch-dyed polypropylene'],
      knownFor: 'weaving the back silhouettes of three famous chairs into one',
      history:
        'Starck and Quitllet built the back from the outlines of three mid-century icons at once: ' +
        'Jacobsen\'s Series 7, the Eames molded shell, and Saarinen\'s Tulip armchair, interlaced into a ' +
        'single form. It is fully recyclable polypropylene and works indoors or out. Made in Italy.',
      facts: [
        'Its back interlaces the silhouettes of three different famous chairs.',
        'The three referenced designs are the Series 7, the Eames shell and the Tulip armchair.',
        'It is made from fully recyclable batch-dyed polypropylene.'
      ]
    },
    {
      id: 'louis-ghost-chair',
      photo: "https://images.hermanmiller.group/m/13d17cffb95a3a7/W-DWR_1872_433143_black_f-tif.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Louis Ghost Chair',
      designer: 'Philippe Starck',
      manufacturer: 'Kartell',
      year: 2002,
      origin: 'Italy',
      category: 'Indoor/outdoor dining chair',
      style: 'Postmodern',
      materials: ['Single-piece injection-molded polycarbonate'],
      knownFor: 'a Louis XVI armchair reissued as one piece of transparent polycarbonate',
      history:
        'Starck took the classic Louis XVI armchair, medallion back and all, and reproduced it in a ' +
        'single injection-molded piece of transparent polycarbonate. The result is a historical ' +
        'silhouette that visually disappears in a room. A small red Kartell logo on the back marks it as ' +
        'authentic, and it stacks six high.',
      facts: [
        'It reinterprets the Louis XVI armchair in transparent polycarbonate.',
        'The whole chair is molded as one single piece.',
        'It stacks up to six high despite the armchair form.'
      ]
    },
    {
      id: 'bellini-chair',
      photo: "https://images.hermanmiller.group/asset/8592a09e-ebe5-4fbc-945e-8e6e0c22197c/W/DWR_2135_100697512_reed_green_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Bellini Chair',
      designer: 'Mario Bellini',
      manufacturer: 'Heller',
      year: 1998,
      origin: 'Italy',
      category: 'Indoor/outdoor dining chair',
      style: 'Contemporary',
      materials: ['Fiberglass-reinforced polypropylene'],
      knownFor: 'winning its designer his eighth Compasso d\'Oro and a place in MoMA\'s collection',
      history:
        'Bellini\'s stacking chair earned him his eighth Compasso d\'Oro in 2001 and entered MoMA\'s ' +
        'permanent collection. Heller now builds it with a plastic engineered to biodegrade in soil ' +
        'within three to five years without shedding microplastics, with no compromise to durability in ' +
        'use. Made in the USA.',
      facts: [
        'It won Mario Bellini his eighth Compasso d\'Oro award in 2001.',
        'It is in the permanent collection at MoMA.',
        'Its plastic is engineered to biodegrade underground within three to five years.'
      ]
    },
    {
      id: 'serge-mouille-floor-lamp',
      photo: "https://images.hermanmiller.group/m/43d2f7425c64d705/W-DWR_2302_100200256_white_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Serge Mouille Three Arm Floor Lamp',
      designer: 'Serge Mouille',
      manufacturer: 'Serge Mouille',
      year: 1952,
      origin: 'France',
      category: 'Floor lamp',
      style: 'Mid-Century Modern',
      materials: ['Lacquered aluminum shades', 'Steel tubing', 'Brass ball joints'],
      knownFor: 'breast-shaped reflectors on thin steel arms that pivot on brass ball joints',
      history:
        'Mouille was a trained silversmith, and it shows in the metalwork: hand-shaped aluminum ' +
        'reflectors, thin steel arms, and visible washer-and-hex-screw hardware. Each arm swivels on a ' +
        'brass ball joint, so the lamp reads as a kinetic object rather than a fixture. Each one is ' +
        'stamped and numbered.',
      facts: [
        'Mouille trained as a silversmith before designing lighting.',
        'Each arm pivots on a brass ball joint.',
        'Every lamp is stamped and numbered.'
      ]
    },
    {
      id: 'grasshopper-floor-lamp',
      photo: "https://images.hermanmiller.group/m/1710cb9a47529da2/W-DWR_567_580984_black_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Grasshopper Floor Lamp',
      designer: 'Greta Magnusson Grossman',
      manufacturer: 'Gubi',
      year: 1948,
      origin: 'Sweden',
      category: 'Floor lamp',
      style: 'Mid-Century Modern',
      materials: ['Powder-coated steel frame and shade', 'Solid brass hardware', 'Fabric-covered cord'],
      knownFor: 'a tripod stance and long conical shade that reads like the insect it is named for',
      history:
        'Grossman trained in Sweden and moved to California in 1940, blending European modernism with a ' +
        'looser West Coast sensibility. The Grasshopper leans on a lithe tripod frame with an elongated ' +
        'conical shade on a ball joint, so light can be aimed anywhere without glare.',
      facts: [
        'Grossman trained in Sweden before moving to California in 1940.',
        'Its shade is mounted on a ball joint so it aims in any direction.',
        'The angled tripod stance is what earned it the grasshopper name.'
      ]
    },
    {
      id: 'ic-floor-lamp',
      photo: "https://images.hermanmiller.group/m/a6d8c9647023b587/W-DWR_4520_100109791_brass_p.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'IC Floor Lamp',
      designer: 'Michael Anastassiades',
      manufacturer: 'Flos',
      year: 2013,
      origin: 'United Kingdom',
      category: 'Floor lamp',
      style: 'Contemporary',
      materials: ['Brass or powder-coated steel frame', 'Frosted blown glass diffuser'],
      knownFor: 'a glass sphere balanced on a thin rod as if about to roll off',
      history:
        'Anastassiades trained in engineering before design, and the IC is an exercise in apparent ' +
        'instability: a blown glass sphere perches on an ultra-thin frame looking like it might drop at ' +
        'any moment. The tension is the whole point of the design. Made in Italy.',
      facts: [
        'Its glass sphere is deliberately positioned to look precarious.',
        'Anastassiades studied engineering before turning to design.',
        'The frame is intentionally ultra-thin to heighten the effect.'
      ]
    },
    {
      id: 'panthella-lamp',
      photo: "https://images.hermanmiller.group/asset/b2ababcf-0494-447c-9561-afcbf3e6c410/W/DWR_2517941_100705300_opal_white_f1.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Panthella Table Lamp',
      designer: 'Verner Panton',
      manufacturer: 'Louis Poulsen',
      year: 1971,
      origin: 'Denmark',
      category: 'Table lamp',
      style: 'Space Age',
      materials: ['Powder-coated aluminum or acrylic shade and base'],
      knownFor: 'a half-sphere shade over a trumpet base, both acting as reflectors',
      history:
        'Panton designed the Panthella so that both the dome shade and the flared base diffuse light ' +
        'rather than just the shade, throwing a soft glow in every direction. It is one of the most ' +
        'enduring designs from a career built on organic shapes and saturated color.',
      facts: [
        'Both the shade and the base work as light diffusers.',
        'It comes from the same designer as the one-piece Panton Chair.',
        'Its half-sphere-over-trumpet profile has stayed unchanged since 1971.'
      ]
    },
    {
      id: 'atollo-lamp',
      photo: "https://images.hermanmiller.group/asset/9c64f7e1-85c2-4bc5-938a-2937b9bbb40c/W/DWR_2195605_100155306_black_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Atollo Table Lamp',
      designer: 'Vico Magistretti',
      manufacturer: 'Oluce',
      year: 1977,
      origin: 'Italy',
      category: 'Table lamp',
      style: 'Italian Modernism',
      materials: ['Opaline glass or lacquered aluminum diffuser', 'Glass or metal base'],
      knownFor: 'reducing a lamp to a cone, a cylinder and a hemisphere',
      history:
        'Magistretti stripped the table lamp down to three pure geometric solids stacked on each other: ' +
        'cylinder, cone and dome. It is often described as the archetypal table lamp for exactly that ' +
        'reason, and it sits in the permanent collections of major design museums.',
      facts: [
        'Its form is built from three basic geometric solids.',
        'It sits in the permanent collections of major design museums.',
        'Larger sizes include an on-cord dimmer switch.'
      ]
    },
    {
      id: 'tizio-lamp',
      photo: "https://images.hermanmiller.group/asset/b43a3a0b-67a6-4049-a39c-ba457cd5d925/W/DWR_2460_100203490_micro_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Tizio Desk Lamp',
      designer: 'Richard Sapper',
      manufacturer: 'Artemide',
      year: 1972,
      origin: 'Italy',
      category: 'Desk lamp',
      style: 'Italian Modernism',
      materials: ['Anticorrosion-treated aluminum body', 'Zinc alloy counterweights'],
      knownFor: 'running its electricity through the arms so it needs no wires along them',
      history:
        'Sapper balanced the lamp on counterweights so it moves with a push and stays put with no knob to ' +
        'tighten. The current runs through the metal arms themselves, which removes any visible wiring ' +
        'and is the detail the design is best known for. It won the Compasso d\'Oro in 1979 and is in ' +
        'MoMA\'s collection.',
      facts: [
        'Electricity runs through the arms themselves instead of through cables.',
        'It stays in position by counterweight, with no knobs to tighten.',
        'It won the Compasso d\'Oro in 1979.'
      ]
    },
    {
      id: 'anglepoise-1227',
      photo: "https://images.hermanmiller.group/m/a09295fe143e9634/W-DWR_9155_100106239_linen_white_p2.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Original 1227 Task Lamp',
      designer: 'George Carwardine',
      manufacturer: 'Anglepoise',
      year: 1935,
      origin: 'United Kingdom',
      category: 'Desk lamp',
      style: 'Industrial',
      materials: ['Spun aluminum shade', 'Aluminum arms', 'Cast-iron base'],
      knownFor: 'borrowing car suspension spring theory to hold a lamp in any position',
      history:
        'Carwardine spent years engineering vehicle suspension systems before his employer went bankrupt ' +
        'in 1929. Working from a home workshop in Bath, he applied spring-and-lever thinking to lighting, ' +
        'and a new kind of spring let him build an arm that moves freely yet holds position. It carries a ' +
        'lifetime warranty.',
      facts: [
        'Carwardine was a vehicle suspension engineer before designing lamps.',
        'Its constant-tension spring mechanism holds any position without locking.',
        'It is backed by a lifetime warranty.'
      ]
    },
    {
      id: 'flowerpot-vp3',
      photo: "https://images.hermanmiller.group/asset/d10cbaae-3332-4b99-ba5b-77741da7e00a/W/DWR_2517168_100608619_grey_beige_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'VP3 Flowerpot Table Lamp',
      designer: 'Verner Panton',
      manufacturer: '&Tradition',
      year: 1968,
      origin: 'Denmark',
      category: 'Table lamp',
      style: 'Space Age',
      materials: ['Spun brass or steel shades'],
      knownFor: 'two facing hemispheres that hide the bulb entirely',
      history:
        'Panton built the Flowerpot from two half-spheres facing each other, the smaller one hiding the ' +
        'bulb so only reflected light escapes. It became a signature of 1960s Danish pop design, and its ' +
        'colors were as much the point as its shape.',
      facts: [
        'It is built from two hemispheres facing one another.',
        'The upper hemisphere conceals the bulb so light is indirect.',
        'It was designed in the same era as Panton\'s molded plastic chair.'
      ]
    },
    {
      id: 'semi-pendant',
      photo: "https://images.hermanmiller.group/m/f304deb688b7ade2/W-DWR_2297_739238_matte_black_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Semi Pendant Lamp',
      designer: 'Claus Bonderup and Torsten Thorup',
      manufacturer: 'Gubi',
      year: 1968,
      origin: 'Denmark',
      category: 'Pendant lamp',
      style: 'Scandinavian Modern',
      materials: ['Powder-coated aluminum', 'Brass or chrome diffuser', 'Fabric-covered cord'],
      knownFor: 'a shade whose profile comes from the gap between two overlapping circles',
      history:
        'Bonderup and Thorup were architecture students who wanted crisp geometry in a design world then ' +
        'dominated by soft organic shapes. They placed two circles back to back and took the shape from ' +
        'the negative space between them, giving a shade whose diameter equals each circle\'s. It won ' +
        'first prize in their school\'s 1968 design competition.',
      facts: [
        'Its profile is derived from the negative space between two circles.',
        'Its designers were still architecture students when they made it.',
        'It won first prize in a 1968 school design competition.'
      ]
    },
    {
      id: 'eames-sofa',
      photo: "https://images.hermanmiller.group/m/bf8434696b534af7/W-HM_226_100426530_balsa_oiled_walnut_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Eames Sofa',
      designer: 'Charles and Ray Eames',
      manufacturer: 'Herman Miller',
      year: 1967,
      origin: 'United States',
      category: 'Sofa',
      style: 'Mid-Century Modern',
      materials: ['Solid walnut or teak frame', 'Die-cast polished aluminum legs', 'Leather upholstery', 'Rubber webbing suspension'],
      knownFor: 'pairing solid wood, leather and polished aluminum in one frame',
      history:
        'The Eameses designed the sofa to sit alongside their Soft Pad Collection, which is why the ' +
        'polished aluminum detailing matches. Wood, leather and aluminum each stay visible rather than ' +
        'being wrapped in upholstery, and the seat is suspended on fabric-reinforced rubber webbing.',
      facts: [
        'It was designed to complement the Eames Soft Pad Collection.',
        'Its seat is suspended on fabric-reinforced rubber webbing.',
        'Wood, leather and polished aluminum are all left visible in the design.'
      ]
    },
    {
      id: 'togo-sofa',
      photo: "https://images.hermanmiller.group/m/20404a623095e6c5/W-DWR_2544356_100574434_nightfall_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'TOGO Sofa',
      designer: 'Michel Ducaroy',
      manufacturer: 'Ligne Roset',
      year: 1973,
      origin: 'France',
      category: 'Sofa',
      style: 'Space Age',
      materials: ['Multiple-density polyurethane foam', 'Channeled quilted upholstery'],
      knownFor: 'having no frame or base at all, just folded layers of foam',
      history:
        'Ducaroy eliminated the frame entirely: Togo is built from multiple densities of polyurethane ' +
        'foam folded back on itself like a tube of toothpaste, wrapped in channeled quilting. Nothing ' +
        'rigid runs through it, which is why it slouches the way it does. It has stayed in production for ' +
        'over fifty years.',
      facts: [
        'It contains no frame or base whatsoever, only foam.',
        'Ducaroy compared its folded form to a tube of toothpaste.',
        'It has been in continuous production since 1973.'
      ]
    },
    {
      id: 'quilton-sectional',
      photo: "https://images.hermanmiller.group/asset/aa8d5fb5-3ffd-4172-97de-69b8c75a4862/W/HAY_2530332_100821671_turf_blue_grey_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Quilton Sectional',
      designer: 'Doshi Levien',
      manufacturer: 'HAY',
      year: null,
      origin: 'United Kingdom',
      category: 'Sectional',
      style: 'Contemporary',
      materials: ['Plywood, pine and beech internal frame', 'Spring suspension', 'Polyurethane foam', 'Vegan leather platform'],
      knownFor: 'a sofa system its designers describe as a quilted landscape',
      history:
        'Nipa Doshi and Jonathan Levien designed Quilton as a quilted landscape sofa system rather than a ' +
        'single sofa, with sculpted sections that sit on a platform bound in vegan leather. It is built ' +
        'to be a central surface for working, socializing and lounging rather than one fixed seating ' +
        'arrangement.',
      facts: [
        'Its designers describe it as a \'quilted landscape sofa system\'.',
        'The sections rest on a platform bound in vegan leather.',
        'Doshi Levien is the studio of Nipa Doshi and Jonathan Levien.'
      ]
    },
    {
      id: 'luva-sectional',
      photo: "https://images.hermanmiller.group/asset/3959298c-fc55-4bcf-b762-3ecc74d34ef6/W/HM_2560903_100406776_fir_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Luva Modular Sectional',
      designer: 'Gabriel Tan',
      manufacturer: 'Herman Miller',
      year: 2022,
      origin: 'Singapore',
      category: 'Sectional',
      style: 'Contemporary',
      materials: ['Steel frame', 'Webbed suspension', 'Layered foam of varied densities', 'Fabric or leather upholstery'],
      knownFor: 'a back that folds down or opens up to change how upright you sit',
      history:
        'Tan built an adjustable back into the sectional itself: opened up it drops you into a reclined ' +
        'lounge position, folded down it holds you upright. One piece of furniture covers both postures ' +
        'without a mechanism or a separate recliner.',
      facts: [
        'Its back can be opened out or folded down to change seating posture.',
        'Opened up it supports a reclined lounge position; closed it sits you upright.',
        'It uses layered foam of several different densities.'
      ]
    },
    {
      id: 'fat-sectional',
      photo: "https://images.hermanmiller.group/asset/9f6bec01-586f-4b5a-89e9-ce34ee0eb433/W/DWR_2594197_100669035_royal_velvet_almond_beige_grey_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Fat Modular Sofa',
      designer: 'Tom Dixon',
      manufacturer: 'Tom Dixon',
      year: 2024,
      origin: 'United Kingdom',
      category: 'Sectional',
      style: 'Contemporary',
      materials: ['Fabric upholstery', 'Foam', 'Plywood and MDF', 'Steel'],
      knownFor: 'deliberately exaggerated proportions on an otherwise minimal shape',
      history:
        'Dixon pushed a minimal silhouette to exaggerated proportions: oversized backrests wrap the ' +
        'sitter while low, curved seats allow a range of slouched positions. Each piece is hand-finished ' +
        'and hand-upholstered, and the modules recombine into many configurations.',
      facts: [
        'Its proportions are deliberately exaggerated against a minimal outline.',
        'Each piece is hand-finished and hand-upholstered.',
        'The modules can be recombined into many different configurations.'
      ]
    },
    {
      id: 'bertoia-bench',
      photo: "https://images.hermanmiller.group/m/7190c9100eb9dae7/W-KNO_792_311595_black_chrome_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Bertoia Bench',
      designer: 'Harry Bertoia',
      manufacturer: 'Knoll',
      year: 1952,
      origin: 'United States',
      category: 'Bench',
      style: 'Mid-Century Modern',
      materials: ['Solid wood slats', 'Welded steel rod base', 'Plastic glides'],
      knownFor: 'being the first piece Bertoia designed for Knoll',
      history:
        'Bertoia designed exactly one furniture collection in his life, and the bench was his first piece ' +
        'in it. Where the Diamond Chair is all open wire, the bench sets solid wood slats on the same ' +
        'welded steel rod language, so the two read as a family without repeating each other.',
      facts: [
        'It was the first piece Bertoia designed for Knoll.',
        'Bertoia designed only one furniture collection in his entire career.',
        'It sets solid wood slats on the same welded rod base as his chairs.'
      ]
    },
    {
      id: 'florence-knoll-bench',
      photo: "https://images.hermanmiller.group/asset/db290238-5834-425c-8a50-cb5fe2bd1481/W/DWR_552_337953_volo_leather_black_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Florence Knoll Bench',
      designer: 'Florence Knoll',
      manufacturer: 'Knoll',
      year: 1954,
      origin: 'United States',
      category: 'Bench',
      style: 'Mid-Century Modern',
      materials: ['Chrome-plated steel frame', 'Full-grain semi-aniline leather'],
      knownFor: 'a leather top made of individually sewn squares on an exposed chrome frame',
      history:
        'Florence Knoll revolutionized interior planning with a total design approach that covered ' +
        'architecture, graphics and textiles together. The bench distills that discipline: an exposed ' +
        'chrome-plated steel frame topped with individually sewn leather squares. Frame made in Italy, ' +
        'upholstery in the United States.',
      facts: [
        'Its leather top is built from individually sewn squares.',
        'Its steel frame is left fully exposed rather than skirted.',
        'Its frame is made in Italy and its upholstery in the United States.'
      ]
    },
    {
      id: 'womb-ottoman',
      photo: "https://images.hermanmiller.group/asset/6ea868fe-f628-4024-b017-1eab5970353e/W/KNO_7882_331623_pearl_chrome_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Womb Ottoman',
      designer: 'Eero Saarinen',
      manufacturer: 'Knoll',
      year: 1946,
      origin: 'United States',
      category: 'Ottoman',
      style: 'Organic Modernism',
      materials: ['Reinforced fiberglass shell', 'Polyester fiber over foam core', 'Steel rod frame'],
      knownFor: 'the footrest built for the chair Florence Knoll asked to curl up in',
      history:
        'Saarinen designed the ottoman as part of the answer to Florence Knoll\'s request for a chair she ' +
        'could curl up in. It uses the same reinforced fiberglass shell construction and steel rod frame ' +
        'as the chair, so the two form one continuous shape when used together.',
      facts: [
        'It was designed alongside the Womb Chair as one piece of the same brief.',
        'It uses the same reinforced fiberglass shell construction as the chair.',
        'Its steel rod frame comes in black, polished chrome or gold plate.'
      ]
    },
    {
      id: 'egg-footstool',
      photo: "https://images.hermanmiller.group/asset/073ccdd8-4581-48ff-9bb1-b70792ee73cf/W/DWR_6633_335478_walnut_f-jpg.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Egg Footstool',
      designer: 'Arne Jacobsen',
      manufacturer: 'Fritz Hansen',
      year: 1958,
      origin: 'Denmark',
      category: 'Ottoman',
      style: 'Scandinavian Modern',
      materials: ['Foam shell over fiberglass-reinforced polyurethane', 'Satin-chromed steel column', 'Aluminum base', 'Leather upholstery'],
      knownFor: 'a molded foam top that works with either the Egg or the Swan chair',
      history:
        'Built for the same Royal Hotel commission as the Egg and Swan, the footstool shapes molded foam ' +
        'beneath its upholstery so the top curves to support the legs rather than sitting flat. It pairs ' +
        'with either chair from the collection.',
      facts: [
        'It was designed for the same Royal Hotel commission as the Egg and Swan.',
        'Molded foam under the upholstery gives its top a curved profile.',
        'It can be used with either the Egg chair or the Swan chair.'
      ]
    },
    {
      id: 'girard-color-wheel-ottoman',
      photo: "https://images.hermanmiller.group/asset/861ab9a5-1d6c-43f8-8978-3a961371ff6e/W/HM_GIR_61800.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Girard Color Wheel Ottoman',
      designer: 'Alexander Girard',
      manufacturer: 'Herman Miller',
      year: 1967,
      origin: 'United States',
      category: 'Ottoman',
      style: 'Mid-Century Modern',
      materials: ['Polished aluminum legs', 'Wool and nylon upholstery', 'Foam cushion over MDF'],
      knownFor: 'a pinwheel of colored wool wedges on polished aluminum legs',
      history:
        'Girard created more than three hundred textiles during his two decades running Herman Miller\'s ' +
        'textile division, and the Color Wheel Ottoman puts that work on top of a piece of furniture: ' +
        'wedges of colored wool arranged as a pinwheel over a foam cushion.',
      facts: [
        'Girard designed over three hundred textiles for Herman Miller.',
        'Its top is arranged as a pinwheel of colored wool wedges.',
        'He led Herman Miller\'s textile division from 1952 into the 1970s.'
      ]
    },
    {
      id: 'string-shelving',
      photo: "https://images.hermanmiller.group/m/5efcd5dc3044d955/W-DWR_2198146_100146692_white_oak_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'String Wall Shelving',
      designer: 'Nils and Kajsa Strinning',
      manufacturer: 'String Furniture',
      year: 1949,
      origin: 'Sweden',
      category: 'Shelving',
      style: 'Scandinavian Modern',
      materials: ['Powder-coated steel wire side panels', 'Lacquered or veneered MDF shelves'],
      knownFor: 'ladder-like bent wire side panels that shelves simply hook onto',
      history:
        'The Strinnings won a 1949 competition to design a bookshelf for a Swedish publisher, answering ' +
        'with bent steel wire side panels that shelves hook straight into. It ships flat, mounts to the ' +
        'wall, and expands by adding more panels and shelves, which is why it has stayed in production ' +
        'for seven decades.',
      facts: [
        'It began as the winning entry in a 1949 bookshelf design competition.',
        'Its side panels are bent steel wire that shelves hook directly onto.',
        'The system expands by adding more panels rather than replacing the unit.'
      ]
    },
    {
      id: 'royal-system-shelving',
      photo: "https://images.hermanmiller.group/m/fa4a052d30c9f1ac/W-DWR_7153_100118633_walnut_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Royal System Shelving',
      designer: 'Poul Cadovius',
      manufacturer: 'dk3',
      year: 1948,
      origin: 'Denmark',
      category: 'Shelving',
      style: 'Danish Modern',
      materials: ['Solid walnut or oak', 'Veneer over MDF', 'Brass or stainless steel brackets'],
      knownFor: 'being one of the first wall-mounted storage systems, lifting furniture off the floor',
      history:
        'Cadovius thought heavy case furniture wasted floor space, so he moved storage onto the wall ' +
        'entirely. The Royal System was among the first wall-hung shelving systems anywhere, and the idea ' +
        'of freeing up the floor for light and space became a defining move of Danish mid-century ' +
        'interiors.',
      facts: [
        'It was one of the first wall-mounted storage systems ever produced.',
        'Cadovius designed it specifically to free up floor space.',
        'Shelves and cabinets hang from wall-mounted uprights rather than standing on legs.'
      ]
    },
    {
      id: 'elysee-bookshelf',
      photo: "https://images.hermanmiller.group/m/4659b57a1d503af1/W-DWR_2560598_100428817_walnut_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Elysée Bookshelf',
      designer: 'Pierre Paulin',
      manufacturer: 'Magis',
      year: 1971,
      origin: 'France',
      category: 'Bookcase',
      style: 'Space Age',
      materials: ['American walnut or lacquered oak plywood', 'Galvanized steel wall hook', 'ABS joints and feet'],
      knownFor: 'curved bentwood brackets designed for a French president\'s private apartment',
      history:
        'Paulin designed the original shelves in 1971 for President Georges Pompidou\'s private apartments ' +
        'at the Élysée Palace, part of a wholesale modernization of the state rooms. The curved bentwood ' +
        'brackets turn a bookshelf into a sculptural object, and it can stand against a wall or divide a ' +
        'room. Made in Italy.',
      facts: [
        'It was originally designed for the Élysée Palace under President Pompidou.',
        'Its curved brackets are bentwood rather than straight brackets.',
        'It can be used against a wall or freestanding as a room divider.'
      ]
    },
    {
      id: 'bm0253-bookcase',
      photo: "https://images.hermanmiller.group/m/f6811fa177ac9847/W-DWR_2525375_100196942_walnut_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'BM0253 Bookcase',
      designer: 'Børge Mogensen',
      manufacturer: 'Carl Hansen & Søn',
      year: 1958,
      origin: 'Denmark',
      category: 'Bookcase',
      style: 'Danish Modern',
      materials: ['FSC-certified oak or walnut veneer', 'Powder-coated tubular steel frame'],
      knownFor: 'a 1958 Mogensen design that waited decades to reach production',
      history:
        'Mogensen drew the bookcase in 1958, but Carl Hansen & Søn only put it into production recently, ' +
        'making it new to the market despite its age. It pairs FSC-certified wood shelving with a slim ' +
        'tubular steel frame in the plain, durable idiom Mogensen was known for.',
      facts: [
        'It was designed in 1958 but only recently entered production for the first time.',
        'Its wood is FSC-certified.',
        'Mogensen was known for plain, hard-wearing furniture for ordinary homes.'
      ]
    },
    {
      id: 'stacked-bookcase',
      photo: "https://images.hermanmiller.group/m/7e6debc2f45b6cf6/W-MTO_2588186_100631457_oak_f-tif.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Stacked Storage Bookcase',
      designer: 'JDS Architects',
      manufacturer: 'Muuto',
      year: null,
      origin: 'Denmark',
      category: 'Bookcase',
      style: 'Contemporary Scandinavian',
      materials: ['PU-lacquered MDF', 'Oak-veneered fiberboard', 'Powder-coated steel clips and podium'],
      knownFor: 'open modules that clip together into any shape you like',
      history:
        'Designed by JDS Architects for Muuto, the system is a set of boxes that clip together with bent ' +
        'steel clips rather than screws, so shelves, cabinets and surfaces can be combined and ' +
        'recombined. It comes as pre-configured combinations or as individual modules.',
      facts: [
        'Its modules join with bent steel clips rather than fasteners.',
        'It can be bought pre-configured or assembled module by module.',
        'It is designed to suit both home and office settings.'
      ]
    },
    {
      id: 'nelson-thin-edge-buffet',
      photo: "https://images.hermanmiller.group/asset/92653ff8-d4b1-492f-8b07-2e3e09f43a06/W/HM_6212_9046537-ash_aluminum_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Nelson Thin Edge Buffet',
      designer: 'George Nelson',
      manufacturer: 'Herman Miller',
      year: 1952,
      origin: 'United States',
      category: 'Credenza',
      style: 'Mid-Century Modern',
      materials: ['Walnut, ash, oak or santos palisander veneer', 'Solid birch drawers', 'Polished aluminum legs and pulls'],
      knownFor: 'cabinet walls thinned down until the case looks like it is floating',
      history:
        'Originally sold as the Rosewood Case Series, Thin Edge got its name from the deliberately thin ' +
        'cabinet walls, which make the case look lighter than a storage piece has any right to. Slim ' +
        'polished aluminum legs continue the effect. It is still built to the original proportions with ' +
        'modern sustainable veneers.',
      facts: [
        'It was first sold under the name Rosewood Case Series.',
        'Its name comes from the deliberately thinned cabinet walls.',
        'Its drawers are solid birch rather than veneered panels.'
      ]
    },
    {
      id: 'nelson-basic-credenza',
      photo: "https://images.hermanmiller.group/asset/78d67d88-33a3-4fa2-b415-c920f8242518/W/HM_2583474_100582075_walnut_cupcake_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Nelson Basic Cabinet Series Credenza',
      designer: 'George Nelson',
      manufacturer: 'Herman Miller',
      year: 1946,
      origin: 'United States',
      category: 'Credenza',
      style: 'Mid-Century Modern',
      materials: ['Walnut or oak veneer over MDF', 'Aluminum alloy or solid wood pulls', 'Solid wood legs'],
      knownFor: 'the earliest Nelson storage group, six pieces meant to be combined',
      history:
        'The Basic Cabinet Series was among the first things Nelson designed after taking over as Herman ' +
        'Miller\'s design director, and it set the pattern for everything after: six plain pieces meant to ' +
        'be used alone or grouped into a wall of storage. It was reintroduced for contemporary homes.',
      facts: [
        'It was part of Nelson\'s earliest work as Herman Miller\'s design director.',
        'The collection comprises six pieces intended to be combined.',
        'It was reintroduced in recent years after decades out of production.'
      ]
    },
    {
      id: 'florence-knoll-credenza',
      photo: "https://images.hermanmiller.group/asset/4b30b35f-1395-413e-b9a1-784fa49929e7/W/KNO_1070_100810766_two_position_oak_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Florence Knoll Credenza',
      designer: 'Florence Knoll',
      manufacturer: 'Knoll',
      year: 1961,
      origin: 'United States',
      category: 'Credenza',
      style: 'Mid-Century Modern',
      materials: ['Polished chrome steel base', 'Marble, veneer or lacquer top', 'Veneer or lacquer doors'],
      knownFor: 'a piece Florence Knoll designed because nothing on the market fit the job',
      history:
        'Florence Knoll designed furniture to fill the gaps her interiors left, and the credenza is a ' +
        'clear case: a restrained storage piece for linens, tableware or office files, raised on a ' +
        'polished chrome base. It comes in several sizes and materials. Made in Italy.',
      facts: [
        'She designed it because no existing piece met the need in her interiors.',
        'It is offered in several sizes, colors and top materials.',
        'Its base is polished chrome steel with adjustable floor glides.'
      ]
    },
    {
      id: 'finn-juhl-credenza',
      photo: "https://images.hermanmiller.group/m/45a6b84ce4a35b91/W-DWR_598_100059048_walnut_blue_f1.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Finn Juhl Credenza',
      designer: 'Finn Juhl',
      manufacturer: 'House of Finn Juhl',
      year: 1955,
      origin: 'Denmark',
      category: 'Credenza',
      style: 'Danish Modern',
      materials: ['Walnut veneer', 'Lacquered sliding doors and trays', 'Hand-burnished steel frame'],
      knownFor: 'sliding door panels colored from Goethe\'s colour wheel',
      history:
        'Juhl drew on cubism and on Goethe\'s colour theory for the credenza, using interlocking geometric ' +
        'planes and sliding doors and trays finished in either the warm or the cool half of the wheel. ' +
        'Inside, one side holds adjustable shelves and the other an open compartment beside the trays. ' +
        'Made in Denmark.',
      facts: [
        'Its colored panels draw on Goethe\'s colour wheel.',
        'Its form takes cues from the cubist movement.',
        'One interior side has adjustable shelves, the other an open tray compartment.'
      ]
    },
    {
      id: 'nelson-thin-edge-bed',
      photo: "https://images.hermanmiller.group/asset/c111dcfa-a771-4776-b76b-09aeadef6a64/W/HM_3419_100763995_oak_cane_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Nelson Thin Edge Bed',
      designer: 'George Nelson',
      manufacturer: 'Herman Miller',
      year: 1954,
      origin: 'United States',
      category: 'Bed',
      style: 'Mid-Century Modern',
      materials: ['Solid walnut or ash frame', 'Veneer headboard', 'Natural woven cane', 'Chrome headboard supports'],
      knownFor: 'a caned headboard revived from the Herman Miller archives',
      history:
        'Bringing the bed back into production started in the Herman Miller Archives, where engineers ' +
        'studied surviving examples and Nelson\'s original drawings. In keeping with his intent that the ' +
        'collection adapt over time, it is now made in mattress sizes that were not common in the 1950s.',
      facts: [
        'Its reissue began with study of archive pieces and original drawings.',
        'It is now offered in larger sizes than were common in the 1950s.',
        'Its headboard uses natural woven cane.'
      ]
    },
    {
      id: 'ruche-bed',
      photo: "https://images.hermanmiller.group/asset/5bb151fe-cdad-4b53-a27b-58040b1500d4/W/DWR_2554727_100375323_snowman_natural_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Ruché Bed',
      designer: 'Inga Sempé',
      manufacturer: 'Ligne Roset',
      year: 2011,
      origin: 'France',
      category: 'Bed',
      style: 'Contemporary',
      materials: ['Wood frame', 'Quilted velvet or fabric upholstery'],
      knownFor: 'taking its name and its look from a garment-quilting technique',
      history:
        'Sempé named the bed after ruching, a dressmaking technique that gathers fabric to add texture ' +
        'and dimension. The quilted upholstery is draped over the wood frame rather than stretched tight, ' +
        'so the bed reads more like bedding than like joinery.',
      facts: [
        'Ruching is a garment technique that gathers fabric for texture.',
        'Its upholstery is draped over the frame rather than pulled taut.',
        'Inga Sempé is a French designer known for soft, textile-led work.'
      ]
    },
    {
      id: 'matera-bed',
      photo: "https://images.hermanmiller.group/asset/a0d7564c-597e-4739-922d-78e1052d639f/W/DWR_5114_309493_walnut_a.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Matera Bed',
      designer: 'Sean Yoo',
      manufacturer: 'Design Within Reach',
      year: 2007,
      origin: 'United States',
      category: 'Bed',
      style: 'Contemporary',
      materials: ['Solid walnut or oak frame', 'Veneer headboard', 'Solid ash slats'],
      knownFor: 'slotted mortise-and-tenon corner joints left visible on the frame',
      history:
        'A visit to the Noguchi Museum pushed Sean Yoo out of city planning and into furniture design, ' +
        'and the Matera shows that sculptural bias: clean lines, beveled edges and slotted ' +
        'mortise-and-tenon corners left on show. An optional version adds six soft-closing storage ' +
        'drawers.',
      facts: [
        'A visit to the Noguchi Museum prompted Yoo to switch from city planning to design.',
        'Its corner joints are slotted mortise-and-tenon and left visible.',
        'An optional storage version adds six soft-closing drawers.'
      ]
    },
    {
      id: 'nest-storage-bed',
      photo: "https://images.hermanmiller.group/m/77db01a48938a4a2/W-DWR_1727_100252591_lute_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Nest Storage Bed',
      designer: 'Niels Bendtsen',
      manufacturer: 'Design Within Reach',
      year: 2014,
      origin: 'Canada',
      category: 'Bed',
      style: 'Contemporary',
      materials: ['Plywood frame and headboard', 'Foam and polyester fiber', 'Gas pistons', 'Removable fabric or leather slipcover'],
      knownFor: 'a mattress platform that lifts on gas pistons to hide storage underneath',
      history:
        'Bendtsen designed Nest for small spaces: the whole mattress platform rises on gas pistons to ' +
        'reveal a storage compartment that stays completely hidden when closed. A leather pull handle ' +
        'operates it and the slipcover comes off for cleaning.',
      facts: [
        'Its mattress platform lifts on gas pistons to reveal storage.',
        'The storage compartment is invisible when the bed is closed.',
        'Its slipcover is removable for dry cleaning.'
      ]
    },
    {
      id: 'componibili',
      photo: "https://images.hermanmiller.group/m/22249a1620164f3b/W-DWR_2515224_100371136_toffee_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Componibili Storage Unit',
      designer: 'Anna Castelli Ferrieri',
      manufacturer: 'Kartell',
      year: 1969,
      origin: 'Italy',
      category: 'Storage unit',
      style: 'Space Age',
      materials: ['Injection-molded polycarbonate or ABS'],
      knownFor: 'round stacking modules whose name is simply Italian for modular',
      history:
        'Componibili means modular in Italian, and that is exactly what it is: cylindrical modules with ' +
        'sliding doors and a tongue-and-groove edge so they stack into a column. Castelli Ferrieri was ' +
        'one of the first women to graduate in architecture from the Politecnico di Milano and later ' +
        'became Kartell\'s art director.',
      facts: [
        'Its name is simply the Italian word for \'modular\'.',
        'Modules stack using a tongue-and-groove edge detail.',
        'Castelli Ferrieri was among the first women to earn an architecture degree from the Politecnico di Milano.'
      ]
    },
    {
      id: 'line-dresser',
      photo: "https://images.hermanmiller.group/m/3eb08d2d6dab4574/W-DWR_2514768_100120313_walnut_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1000&q=70&h=1000&viewtype=hero",
      name: 'Line Five Drawer Dresser',
      designer: 'Nathan Yong',
      manufacturer: 'Design Within Reach',
      year: 2019,
      origin: 'Singapore',
      category: 'Dresser',
      style: 'Contemporary',
      materials: ['Solid walnut or oak frame', 'Veneer over MDF', 'Leveling floor glides'],
      knownFor: 'strong horizontal lines meant to echo a landscape horizon',
      history:
        'Yong built the Line collection around a precisely made solid wood frame whose strong horizontal ' +
        'lines are meant to recall natural landscapes and bring a sense of calm to a bedroom. The dresser ' +
        'joined the collection in 2019 with soft-closing drawers.',
      facts: [
        'Its horizontal lines are intended to evoke natural landscapes.',
        'The Line collection debuted in 2010; the dresser followed in 2019.',
        'Its drawers are soft-closing.'
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

/*
  Browsing groups. `category` stays granular because the quiz asks about it
  ("what type of piece is this?"); these coarser buckets are what someone
  picks when they want to study all the sofas or all the lighting at once.
  A category missing from this map falls into "Other" rather than vanishing.
*/
const GROUPS = [
  { id: 'seating',  label: 'Chairs & Seating', emoji: '🪑', categories: [
      'Lounge chair', 'Side chair', 'Armchair', 'Dining chair', 'Stacking chair',
      'Rocking chair', 'Executive chair', 'Office chair', 'Chaise lounge',
      'Stool', 'Barstool', 'Bench', 'Ottoman'] },
  { id: 'sofas',    label: 'Sofas & Sectionals', emoji: '🛋️', categories: ['Sofa', 'Sectional'] },
  { id: 'tables',   label: 'Tables & Desks', emoji: '🪵', categories: [
      'Dining table', 'Coffee table', 'Side table', 'Desk'] },
  { id: 'lighting', label: 'Lighting', emoji: '💡', categories: [
      'Table lamp', 'Floor lamp', 'Pendant lamp', 'Desk lamp', 'Ceiling lamp'] },
  { id: 'storage',  label: 'Storage', emoji: '🗄️', categories: [
      'Credenza', 'Bookcase', 'Shelving', 'Modular shelving', 'Storage unit', 'Dresser'] },
  { id: 'bedroom',  label: 'Bedroom', emoji: '🛏️', categories: ['Bed', 'Nightstand'] },
  { id: 'outdoor',  label: 'Outdoor', emoji: '🌤️', categories: [
      'Outdoor lounge chair', 'Outdoor dining chair', 'Indoor/outdoor dining chair'] },
  { id: 'decor',    label: 'Decor', emoji: '🕰️', categories: ['Wall clock'] }
];

const GROUP_BY_CATEGORY = {};
GROUPS.forEach(g => g.categories.forEach(c => { GROUP_BY_CATEGORY[c] = g.id; }));

function groupIdOf(product) { return GROUP_BY_CATEGORY[product.category] || 'other'; }

/* Only groups that actually have products, plus an Other catch-all if needed. */
function activeGroups() {
  const counts = {};
  PRODUCTS.forEach(p => { const g = groupIdOf(p); counts[g] = (counts[g] || 0) + 1; });
  const list = GROUPS.filter(g => counts[g.id]).map(g => Object.assign({ count: counts[g.id] }, g));
  if (counts.other) {
    list.push({ id: 'other', label: 'Other', emoji: '📦', categories: [], count: counts.other });
  }
  return list;
}
