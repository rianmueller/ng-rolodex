exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "admin",
          name: "Alice",
          email: "admin@nowhere.com",
          address: "123 This Street"
        },
        {
          username: "normalUser",
          name: "Bob",
          email: "bob@nowhere.com",
          address: "123 Headquarters Drive"
        },
        {
          username: "fooUser",
          name: "Foo Bar",
          email: "foobar@nowhere.com",
          address: "123 Foo Street"
        },
        {
          username: "booUser",
          name: "Boo",
          email: "boo@nowhere.com",
          address: "123 Boo Street"
        },
        {
          username: "nobody",
          name: "No Body",
          email: "nobody@nowhere.com",
          address: "123 Nobody Street"
        },
        {
          username: "somebody",
          name: "Somebody Who",
          email: "somebody@nowhere.com",
          address: "123 Somebody Drive"
        }
      ]);
    });
};
