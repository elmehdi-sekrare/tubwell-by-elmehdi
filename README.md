<div align="center">

# Tubwell by El Mehdi

### A dog & cat grooming studio website: prices by size, a booking request, a pickup shop and a studio tour

21 pages with page transitions, a size picker that reprices the whole menu, a five-step booking form with a live appointment card,<br>
and a pickup shop with a bag drawer and checkout. Responsive, self-hosted assets, deployed on Netlify.

[![Live demo](https://img.shields.io/badge/Live_demo-tubwell--by--elmehdi.netlify.app-111111?style=for-the-badge&logo=netlify&logoColor=white)](https://tubwell-by-elmehdi.netlify.app/)

![HTML5](https://img.shields.io/badge/HTML5-21_pages-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-custom-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![WordPress](https://img.shields.io/badge/WordPress-Elementor_theme-21759B?style=flat-square&logo=wordpress&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-hosted_+_Functions-00C7B7?style=flat-square&logo=netlify&logoColor=white)

<br>

<a href="https://tubwell-by-elmehdi.netlify.app/"><img src="docs/hero.gif" alt="Home page: the 'Muddy in. Fluffy out.' hero with pets peeking over the service cards, then a scroll into the size picker and price tags" width="100%"></a>

</div>

<br>

## ✦ Highlights

- **"Muddy in. Fluffy out." hero**: pets peek over four service cards, soap bubbles float past, and a first-visit loader and page transitions tie the pages together
- **Prices by size**: pick Small, Medium, Large or Giant and every price tag on the line updates (a full groom goes from $105 to $130 for a large dog)
- **Five-step booking request**: pet, service, day, you, review, with an appointment card beside the form that fills in as you answer, inline validation and a confirmation screen
- **Pickup shop**: 13 products with filters (brushes & combs, treats, cats), product pages with quantity, a bag drawer that remembers its items in the browser, and a checkout with inline errors and a "here's what happens next" screen
- **Grooming menu**: a letterboard price list, a drag-to-compare before/after slider, extras and the policies in plain words
- **Self-wash and studio**: a "take a number" ticket for the tubs, the corner storefront, a drawn floor plan and the team rota
- **Live details**: an "open now" line worked out from the opening hours on Morocco time, plus `aria-live` updates for the bag and forms and `prefers-reduced-motion` support
- **Static hosting**: no server to run; one Netlify Function answers the forms, a custom 404 page, `/x` → `/x/` redirects and immutable caching for theme assets

<br>

## ✦ Screenshots

<table>
  <tr>
    <td width="50%"><img src="docs/desktop-home.webp" alt="Home page hero: Muddy in. Fluffy out., with pets over the service cards"><p align="center"><b>Home</b>: muddy in, fluffy out</p></td>
    <td width="50%"><img src="docs/desktop-grooming.webp" alt="Grooming page: every groom, priced up front, with a letterboard menu"><p align="center"><b>Grooming</b>: the menu, priced up front</p></td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/desktop-book.webp" alt="Booking page: request a groom in five steps with an appointment card"><p align="center"><b>Book</b>: five steps and a live appointment card</p></td>
    <td width="50%"><img src="docs/desktop-shop.webp" alt="Shop page: take home what we use, with a pickup receipt"><p align="center"><b>Shop</b>: order online, collect at the counter</p></td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/desktop-shop-curry.webp" alt="Product page: rubber curry brush, $12, add to bag"><p align="center"><b>Product</b>: rubber curry</p></td>
    <td width="50%"><img src="docs/desktop-studio.webp" alt="Studio page: the corner shop, with a street sign and the storefront"><p align="center"><b>Studio</b>: the corner shop</p></td>
  </tr>
</table>

### On phone

<p align="center"><img src="docs/phone.webp" alt="Home, Shop and Book pages on a phone" width="100%"></p>

<br>

## ✦ Pages

| Page | What's on it |
|---|---|
| `/` | Hero with service cards, size picker and price tags, the day at the studio, regulars, rules poster, self-wash station, shop rail, visit info |
| `/grooming/` | Letterboard menu, full menu by size, extras, before/after slider, policies, self-wash "take a number" |
| `/book/` | Five-step booking request with a live appointment card and confirmation |
| `/shop/` + 13 product pages | Shop window, filters, shelves, product pages, bag drawer and pickup checkout |
| `/studio/` | Storefront, floor plan, team rota, address and a contact postcard |
| `/privacy/` · `/terms/` | Legal pages with a table of contents |
| `/404.html` | Custom "page not found" |

<br>

## ✦ Stack

- **Pages**: HTML, CSS and vanilla JavaScript, built with a custom WordPress + Elementor theme and published as static files
- **Fonts**: Bricolage Grotesque and Figtree, self-hosted
- **Hosting**: Netlify (`netlify.toml`), with `netlify/functions/request.mjs` for the booking and bag forms
- **Local preview**: `scripts/serve.mjs` (Node, no dependencies)

<br>

## ✦ Getting started

```bash
git clone https://github.com/elmehdi-sekrare/tubwell-by-elmehdi.git
cd tubwell-by-elmehdi
npm start            # http://localhost:5332
```

Node 18+. There is nothing to install: `scripts/serve.mjs` serves `site/` the way Netlify does (`/x` → `/x/`, the 404 page)
and answers the forms like the Netlify Function.

<br>

## ✦ Deploy

Connect the repo in Netlify, leave the build settings empty, and name the site `tubwell-by-elmehdi`.
`netlify.toml` publishes `site/` as it is, routes the forms to the function and sets the headers (noindex, nosniff, caching).
The forms run in demo mode: nothing is stored or sent.

<br>

## ✦ Project structure

```
site/                     21 pages + theme assets (CSS, JS, fonts, images)
netlify/functions/        request.mjs: answers the booking and bag forms
scripts/serve.mjs         local preview
docs/                     README screenshots and preview
netlify.toml              publish folder, form route, headers
```

<br>

## ✦ Contact

[![LinkedIn](https://img.shields.io/badge/LinkedIn-El_Mehdi_Sekrare-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/el-mehdi-sekrare-77000629b)
[![Email](https://img.shields.io/badge/Email-elmehdisekrare%40gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:elmehdisekrare@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-elmehdi--sekrare-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/elmehdi-sekrare)

---

<sub>Based on the Tubwell template by Visuvate.</sub>
