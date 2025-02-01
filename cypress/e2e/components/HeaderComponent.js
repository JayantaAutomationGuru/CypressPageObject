export default class HeaderComponent {
    get registerLink() { 
        return cy.get('#top-links a[title="My Account"]'); 
    }
    get logoutLink() { return cy.get('#top-links a').contains('Logout'); }
    get shoppingCart() { return cy.get('#top-links a[title="Shopping Cart"]'); }
    get wishListMenu() { return cy.get('#top-links #wishlist-total'); }
    get searchInput() { return cy.get('#search input[name="search"]'); }
    get searchBtn() { return cy.get('#search button'); }
}