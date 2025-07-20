export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "phones", label: "Mobile Phones" },
      { id: "accessories", label: "Mobile Accessories" },
      { id: "vip_numbers", label: "VIP Phone Numbers" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "apple", label: "Apple" },
      { id: "samsung", label: "Samsung" },
      { id: "oneplus", label: "OnePlus" },
      { id: "xiaomi", label: "Xiaomi" },
      { id: "oppo", label: "Oppo" },
      { id: "vivo", label: "Vivo" },
      { id: "NA", label: "NA" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  // {
  //   id: "home",
  //   label: "Home",
  //   path: "/shop/home",
  // },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "phones",
    label: "Mobile Phones",
    path: "/shop/listing",
  },
  {
    id: "accessories",
    label: "Accessories",
    path: "/shop/listing",
  },
  {
    id: "vip_numbers",
    label: "VIP Phone Numbers",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  phones: "Mobile Phones",
  accessories: "Mobile Accessories",
  vip_numbers: "VIP Phone Numbers",
};

export const brandOptionsMap = {
  apple: "Apple",
  samsung: "Samsung",
  oneplus: "OnePlus",
  xiaomi: "Xiaomi",
  oppo: "Oppo",
  vivo: "Vivo",
  NA: "NA"
};

export const filterOptions = {
  category: [
    { id: "phones", label: "Mobile Phones" },
    { id: "accessories", label: "Mobile Accessories" },
    { id: "vip_numbers", label: "VIP Phone Numbers" },
  ],
  brand: [
    { id: "apple", label: "Apple" },
    { id: "samsung", label: "Samsung" },
    { id: "oneplus", label: "OnePlus" },
    { id: "xiaomi", label: "Xiaomi" },
    { id: "oppo", label: "Oppo" },
    { id: "vivo", label: "Vivo" },
    { id: "NA", label: "NA" }
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
