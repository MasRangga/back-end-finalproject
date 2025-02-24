"use strict";

const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let doctors = [
      {
        name: "dr. Luis Schroeder",
        image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1152.jpg",
        email: "Alden.Funk@yahoo.com",
        password: "iaVmLvrRyov6GZ7",
        rating: "5",
        hospital: "Fort Collins Hospital",
        biography: "biography 1",
        specialistId: "S0009",
      },
      {
        name: "dr. Marian Sporer",
        image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/811.jpg",
        email: "Clyde6@yahoo.com",
        password: "YqnyaZqiEQ9fNAE",
        rating: "4",
        hospital: "West Ahmed Hospital",
        biography: "biography 2",
        specialistId: "S0003",
      },
      {
        name: "dr. Cornelius Boyle",
        image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/11.jpg",
        email: "Breanne.Goldner@gmail.com",
        password: "xn73j3ETVqCGO91",
        rating: "4",
        hospital: "West Lafayette Hospital",
        biography: "biography 3",
        specialistId: "S0004",
      },
      {
        name: "dr. Derek Hickle",
        image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/674.jpg",
        email: "Carolyne_Ondricka@gmail.com",
        password: "UoeOHt1vsqiAdfu",
        rating: "4",
        hospital: "Coon Rapids Hospital",
        biography: "biography 4",
        specialistId: "S0006",
      },
      {
        name: "dr. Luther Wisozk",
        image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/534.jpg",
        email: "Ernestina65@gmail.com",
        password: "Gck6eMkoIIYxNzw",
        rating: "5",
        hospital: "New Paytonshire Hospital",
        biography: "biography 5",
        specialistId: "S0007",
      },
      {
        name: "dr. Jared Kulas",
        image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/367.jpg",
        email: "Maddison_Dicki63@hotmail.com",
        password: "VEbcX4pK16rsWg0",
        rating: "4",
        hospital: "Schulistfield Hospital",
        biography: "biography 6",
        specialistId: "S0003",
      },
      {
        name: "dr. Lorene Batz",
        image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1086.jpg",
        email: "Yoshiko14@yahoo.com",
        password: "_2FfrBHye09ktkA",
        rating: "4",
        hospital: "Fort Clovis Hospital",
        biography: "biography 7",
        specialistId: "S0002",
      },
      {
        name: "dr. Angel Osinski",
        image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/45.jpg",
        email: "Ezra9@hotmail.com",
        password: "Cck9rE7laIyhASo",
        rating: "4",
        hospital: "North Waino Hospital",
        biography: "biography 8",
        specialistId: "S0007",
      },
      {
        name: "dr. Caleb Dooley",
        image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/976.jpg",
        email: "Lavern_Gislason20@gmail.com",
        password: "iBVNTm4svBmQoel",
        rating: "5",
        hospital: "East Marisol Hospital",
        biography: "biography 9",
        specialistId: "S0001",
      },
      {
        name: "dr. Bernard Skiles",
        image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1234.jpg",
        email: "Micheal.Kling@yahoo.com",
        password: "68yVcvmQoLylAVp",
        rating: "4",
        hospital: "Mount Vernon Hospital",
        biography: "biography 10",
        specialistId: "S0008",
      },
      {
        name: "dr. Wilbur Flatley",
        image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/422.jpg",
        email: "Shyann.Herman@gmail.com",
        password: "GOT3G7YqI3QKjsH",
        rating: "4",
        hospital: "Macon-Bibb County Hospital",
        biography: "biography 11",
        specialistId: "S0003",
      },
      {
        name: "dr. Candace Murphy",
        image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/690.jpg",
        email: "Lou_Lemke20@hotmail.com",
        password: "hV96RMFqIX9QRht",
        rating: "4",
        hospital: "Satterfieldberg Hospital",
        biography: "biography 12",
        specialistId: "S0007",
      },
      {
        name: "dr. Edwin Bergstrom",
        image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1148.jpg",
        email: "Jerome_Effertz71@hotmail.com",
        password: "Iex1xMKe6190T7T",
        rating: "5",
        hospital: "Jerelstad Hospital",
        biography: "biography 13",
        specialistId: "S0002",
      },
      {
        name: "dr. Levi Okuneva",
        image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/498.jpg",
        email: "Evalyn.Jacobs53@hotmail.com",
        password: "xVlfJsgNWZQ3avC",
        rating: "4",
        hospital: "North Hunterfort Hospital",
        biography: "biography 14",
        specialistId: "S0008",
      },
      {
        name: "dr. Victoria Moore",
        image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/821.jpg",
        email: "Aurore15@yahoo.com",
        password: "AaeIFfzc2KlcbJs",
        rating: "4",
        hospital: "Treutelstead Hospital",
        biography: "biography 15",
        specialistId: "S0009",
      },
      {
        name: "dr. Stacey O'Kon",
        image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/175.jpg",
        email: "Tomas34@yahoo.com",
        password: "TlBnFaSReVzNFxB",
        rating: "5",
        hospital: "West Felicia Hospital",
        biography: "biography 16",
        specialistId: "S0008",
      },
      {
        name: "dr. Mrs. Roman Bernier",
        image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/597.jpg",
        email: "Adrian.Hagenes71@yahoo.com",
        password: "EoxBibpiPdjgOii",
        rating: "5",
        hospital: "Elkhart Hospital",
        biography: "biography 17",
        specialistId: "S0009",
      },
      {
        name: "dr. Christine Cremin",
        image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/650.jpg",
        email: "Annalise11@hotmail.com",
        password: "wfFzOlxjhGCJ3mc",
        rating: "5",
        hospital: "Menifee Hospital",
        biography: "biography 18",
        specialistId: "S0009",
      },
      {
        name: "dr. Sonya Kuhlman",
        image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1133.jpg",
        email: "Gail_Reichel@yahoo.com",
        password: "xeWahd413E3iijh",
        rating: "5",
        hospital: "New Harrisonside Hospital",
        biography: "biography 19",
        specialistId: "S0009",
      },
      {
        name: "dr. Dwight Rohan",
        image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/962.jpg",
        email: "Javon64@hotmail.com",
        password: "MdViPjVRLsenamy",
        rating: "5",
        hospital: "Lucileburgh Hospital",
        biography: "biography 20",
        specialistId: "S0009",
      },
      {
        name: "dr. Rex Wunsch",
        image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/64.jpg",
        email: "Monserrat.Green@hotmail.com",
        password: "Nm8pGB6hEXh_eOz",
        rating: "5",
        hospital: "South Shadfurt Hospital",
        biography: "biography 21",
        specialistId: "S0009",
      },
    ];

    const saltRounds = 10;
    const hashedDoctor = doctors.map((doctor) => {
      const hashedPassword = bcrypt.hashSync(doctor.password, saltRounds);
      return {
        ...doctor,
        password: hashedPassword,
      };
    });

    await queryInterface.bulkInsert("Doctor", hashedDoctor, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Doctor", null, {});
  },
};
