/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
      '828px': '828px',
      '70px' : '70px',
      '188px': '188px',
      '280px': '280px',
      '200px': '200px'
      },
      fontFamily: {
        poppins : ['Poppins', ]
      },
      colors: {
        'hijaubiru' : '#016A70',
        'abukuning' : '#FFFFDD',
        'putih'     : '#FFFFFF',
        'putih2'    : '#EEEEEE',
        'abu'       : '#636363',
        'hitam'     : '#121212',
        'birucerah' : '#36ECF7',
      },
    },
  },
  plugins: [],
}

