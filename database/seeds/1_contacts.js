exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("contacts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("contacts").insert([
        {
          name: "Charlie Brown",
          address: "123 Woodstock Street",
          mobile: "555-555-5555",
          work: "555-555-5555",
          home: "555-555-5555",
          twitter: "@charliebrown",
          instagram: "@charliebrown",
          github: "charliebrown"
        },
        {
          name: "Dagwood Bumstead",
          address: "123 Blondie Street",
          mobile: "555-555-5555",
          work: "555-555-5555",
          home: "555-555-5555",
          twitter: "@dagwood",
          instagram: "@dagwood",
          github: "dagwoodbumstead"
        },
        {
          name: "Jon Arbuckle",
          address: "123 Garfield Lane",
          mobile: "555-555-5555",
          work: "555-555-5555",
          home: "555-555-5555",
          twitter: "@jonarbuckle",
          instagram: "@jonarbuckle",
          github: "jonarbuckle"
        }
      ]);
    });
};
