"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Comments",
      [
        {
          ownerId: 1,
          teaId: 1,
          commentBody: "this is a comment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 1,
          teaId: 1,
          commentBody: "this is a comment2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 2,
          teaId: 1,
          commentBody: "this is a comment3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 2,
          teaId: 2,
          commentBody: "this is a comment4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 2,
          teaId: 2,
          commentBody: "this is a comment5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
