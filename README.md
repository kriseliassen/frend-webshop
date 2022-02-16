# Frend - webshop

## Description

This is a simple frontend for an imaginary/non-existent webshop.

### Technologies

The products with their respective details, images, and categories come from Frend's own API.

The website is built in React with Create React App, and the data from the API is fetched using React Query. React Router is used to create the dynamic routes for each category and product.

React Query allows for easy access to the status of the API call, any errors, and the returned data. It also automatically caches the data from each API call. This means that when a call is made for the categories on the product page within a set time, in order to get the relevant category ID, the data is returned immediately from the cache, as that data has already been fetched for the home page.

The styling is done in pure CSS, without any additional frameworks.

### Functionality

On the website, you have the possibility to browse through categories of clothing or look at one specific product to see its details, any variants, and to add the product to cart.

When an item is added to cart, it will show up on the cart page with details like its price, quantity, variant, subtotal, and you'll see the total for the content of your cart. Here you can also remove an item from your cart. The cart icon on the top right will also show the number of items currently in your cart.

The button for "Go to checkout" is not functional, and does not go anywhere or do anything, as there is no checkout or payment functionality implemented.

The links in the footer are also non-functional and are merely an aesthetic choice and work as a placeholder.

### Design

I have chosen a minimalistic design, with the pops of color mainly coming from the product pictures. The design is inspired in part by webshops like [Monki](https://www.monki.com/en_nok/index.html) and [Weekday](https://www.weekday.com/en_nok/index.html).

The images on the home page are from Unsplash:
- [Hero image - Clark Street Mercantile](https://unsplash.com/photos/qnKhZJPKFD8)
- [T-shirt - Sincerely Media](https://unsplash.com/photos/9ShY-Tq70Mc)
- [Hoodie - Logan Weaver](https://unsplash.com/photos/N6BP12FB_XU)
- [Outerwear - Toa Heftiba](https://unsplash.com/@heftiba)
- [Knitwear - Irina Sergeeva](https://unsplash.com/photos/sv9Dc1UkffU)
- [Trousers - Djurdjica Boskovic](https://unsplash.com/photos/3QEb9uH4gqA)

The placeholder logo is from [Logo Ipsum](https://logoipsum.com/).

## Running the project

To run this project, install it locally using npm.

```
npm install
npm start
```
