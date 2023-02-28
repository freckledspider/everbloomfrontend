# Everbloom Florist

### Concept
Everbloom is an online florist shop that offers a variety of fresh flowers and arrangements for every occasion. With a simple and elegant design, customers can easily browse through different bouquets and select their preferred flowers, as well as add a gift card message if they choose.

<a href="https://everbloomflorist.netlify.app/">Live Demo</a>

### CRUD Concept
- Create: Add to cart
- Read: Item show page
- Update: Edit card message
- Delete: Remove from cart

### Technologies Used
#### Backend
<a href="https://github.com/freckledspider/everbloombackend">Backend Repo</a>
- Django
- Python
- PostgreSQL

#### Frontend
<a href="https://github.com/freckledspider/everbloomfrontend">Frontend Repo</a>
- HTML
- CSS
- Javascript

### Routes, Loaders, and Actions
| Path | Action | Loader |
|------|--------|--------|
| "/" |  | IndexLoader |
| "/flowers/:id" |  | ShowLoader |
| "create" | CreateAction |  |
| "update/:id" | UpdateAction | |
| "delete/:id" | DeleteAction | |

#### Components
- Header.js: Will include navigation
- Footer.js
#### Pages
- Index.js
- Show.js
- Cart.js

### Database Schema
| Name | Data type |
|----|--------|
| id | Serial |
| Product | varchar(20) |
| Image | varchar(200) |
| Price | Integer |
| Description | varchar(250) |
| Card | varchar(100) |

### Screenshots
#### Browser
<img src="https://i.imgur.com/DD1JFFu.png" width="500"/> <img src="https://i.imgur.com/fpVIiVi.png" width="500"/>

#### Mobile
<img src="https://i.imgur.com/BcDoTQO.png" height="400"/> <img src="https://i.imgur.com/dkFU4tx.png" height="400"/>

### Mockups
#### Browser
<img src="https://i.imgur.com/pYQIUog.png" width="500"/> <img src="https://i.imgur.com/zwDCYIb.png" width="500"/>

#### Mobile
<img src="https://i.imgur.com/oSx7WhP.png" height="400"/> <img src="https://i.imgur.com/1qppiME.png" height="400"/>

### Goals
| Date  | Goal |
| ------------- | ------------- |
| 02/20/23  | Project Approval  |
| 02/21/23 | Create backend, testing |
| 02/22/23 | Create frontend, testing |
| 02/23/23 | Testing, Work on styling CSS |
| 02/24/23 | Work on responsive design |
| 02/25/23 - 02/27/23 | Continue working on styling, possibly implement authentication, testing again, and making sure deployment is all working. |
| 02/28/23 | Present project |
