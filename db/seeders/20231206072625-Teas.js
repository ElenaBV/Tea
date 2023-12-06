"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Teas",
      [
        {
          teaName: "White tea",
          place: "California",
          picture: "https://charitea.ru/wp-content/uploads/2020/01/Vietnam-White-tea-old-trees-635x635.jpg",
          description: "Белый чай Калифорнийский",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          teaName: "Black tea",
          place: "India",
          picture: "https://shop.evalar.ru/upload/iblock/236/236034ee8fcfaa011de7ffc6f39ae967.jpg",
          description: "Индийский черный чай",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          teaName: "Green tea",
          place: "Абхазия",
          picture: "https://shop.evalar.ru/upload/iblock/f5e/f5e81683e579cf3f7aa16b5b387fdfae.jpg",
          description: "Абхазский чай",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Teas", null, {});
  },
};
