'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // await queryInterface.bulkInsert(
    //   "Teas",
    //   [
    //     {
    //       teaName: "Black",
    //       place: "Keniya",
    //       picture: "picture",
    //       description: "Very tasty",
    //       userId: 1,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       teaName: "Green",
    //       place: "China",
    //       picture: "picture",
    //       description: "Vkysno",
    //       userId: 2,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       teaName: "Yagodnyi",
    //       place: "Japan",
    //       picture: "picture",
    //       description: "Ochen vkysno",
    //       userId: 3,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //   ],
    // );

    await queryInterface.bulkInsert(
      "Comments",
      [
        {
          ownerId: 1,
          teaId: 4,
          commentBody: "Очень вкусный чай",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 2,
          teaId: 5,
          commentBody: "Понравилось сочетание ягод",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 2,
          teaId: 6,
          commentBody: "Приятный кенийский чай",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Teas", null, {});
    await queryInterface.bulkDelete("Comments", null, {});
    
  }
};
