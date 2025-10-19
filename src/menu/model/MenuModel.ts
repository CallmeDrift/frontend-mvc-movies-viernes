import MenuItem from '../types/MenuItem.js'

export default class MenuModel {
  private readonly menu: MenuItem[]

  constructor() {
    this.menu = [
      {
        label: 'Home',
        link: '#home',
        active: false,
        action: () => {
          console.log('Home clicked')
        },
      },
      {
        label: 'Rentals',
        link: '#rentals',
        active: true,
        action: () => {
          console.log('Rentals clicked')
        },
      },
      {
        label: 'About',
        link: '#about',
        active: false,
        action: () => {
          
          console.log('About clicked')
        },
      },
      {
        label: "Login",
        link: "#login",
        active: false,
        action: () => {
          console.log('Login clicked')
        },
      },
      {
        label: "CRUD",
        link: "#crud",
        active: false,
        action: () => {
          console.log('CRUD clicked')
        },
      }
    ]
  }

  readonly getMenu = (): MenuItem[] => this.menu

  readonly initComponent = () => {}
}
