import create from "zustand";
import { devtools } from "zustand/middleware";

const useStore = create(
  // ! when you finish and you want to deploy make sure to update the url you send to the url of password because you will not use localhost no more
  devtools((set, get) => ({
    modalMessage: null,
    sidebar: false,
    userMenu: false,
    products: [],
    cartState: false,
    cartProducts: [],
    carouselProducts: [],
    orders: [],
    adminUsers: [],
    adminOrders: [],
    userInfo: {},

    jsonHeaders: () => ({
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${get().userInfo.token}`,
      },
    }),

    multipartHeaders: () => ({
      headers: {
        Authorization: `Bearer ${get().userInfo.token}`,
      },
    }),

    subscribeToNewsletter: (email) => {
      fetch(
        `${process.env.REACT_APP_BACKEND_ROOT_URL}/customer-services/newsletter`,
        {
          ...get().jsonHeaders(),
          method: "POST",
          body: JSON.stringify({
            email,
          }),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 201) {
            return get().showModal(res.message);
          }
          get().showModal(res.error);
        })
        .catch((err) => {
          get().showModal(err.error);
        });
    },

    reportProduct: (name, message) => {
      fetch(
        `${process.env.REACT_APP_BACKEND_ROOT_URL}/customer-services/report`,
        {
          ...get().jsonHeaders(),
          method: "POST",
          body: JSON.stringify({
            name,
            message,
          }),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 201) {
            return get().showModal(res.message);
          }
          get().showModal(res.error);
        })
        .catch((err) => {
          get().showModal(err.error);
        });
    },

    contactUs: (name, email, message) => {
      fetch(
        `${process.env.REACT_APP_BACKEND_ROOT_URL}/customer-services/contact-us`,
        {
          ...get().jsonHeaders(),
          method: "POST",
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 201) {
            return get().showModal(res.message);
          }
          get().showModal(res.error);
        })
        .catch((err) => {
          get().showModal(err.error);
        });
    },

    addReview: (productId, rating, comment) => {
      console.log(productId);
      fetch(
        `${process.env.REACT_APP_BACKEND_ROOT_URL}/products/${productId}/review`,
        {
          ...get().jsonHeaders(),
          method: "PUT",
          body: JSON.stringify({
            rating,
            comment,
          }),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 201) {
            return get().showModal(res.message);
          }
          get().showModal(res.error);
        })
        .catch((err) => {
          get().showModal(err.error);
        });
    },

    fetchOrders: () => {
      fetch(`${process.env.REACT_APP_BACKEND_ROOT_URL}/orders`, {
        ...get().jsonHeaders(),
        method: "GET",
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            return set({ orders: res._orders });
          }
          get().showModal(res.error);
        })
        .catch((err) => {
          get().showModal(err.error);
        });
    },

    updateProfile: (name, email, password) => {
      fetch(`${process.env.REACT_APP_BACKEND_ROOT_URL}/users/profile`, {
        ...get().jsonHeaders(),
        method: "PUT",
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            return get().showModal(res.message);
          }

          get().showModal(res.error);
        })
        .catch((err) => {
          get().showModal(err.error);
        });
    },

    placeOrder: (paymentMethod, address, city, postalCode, country) => {
      let selectedProducts;
      try {
        selectedProducts = JSON.parse(localStorage.getItem("cartProducts"));
      } catch (error) {
        localStorage.setItem("cartProducts", "[]");
        get().showModal("error occurred, please, select again your products!");
      }

      return fetch(`${process.env.REACT_APP_BACKEND_ROOT_URL}/orders`, {
        ...get().jsonHeaders(),
        method: "POST",
        body: JSON.stringify({
          products: selectedProducts,
          payment_method: paymentMethod,
          shipping_address: `${(address, city, postalCode, country)}`,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 201) {
            get().showModal(res.message);
            localStorage.setItem("cartProducts", "[]");
            set({ cartProducts: [] });
            return true;
          }
          get().showModal(res.error);
        })
        .catch((err) => {
          get().showModal(err.error);
        });
    },

    changePassword: (token, password, confirmPassword) => {
      fetch(`${process.env.REACT_APP_BACKEND_ROOT_URL}/users/reset/${token}`, {
        ...get().jsonHeaders(),
        method: "PUT",
        body: JSON.stringify({
          password,
          confirmPassword,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            return get().showModal(res.message);
          }
          get().showModal(res.error);
        })
        .catch((err) => {
          get().showModal(err.error);
        });
    },

    requestPasswordReset: (email) => {
      fetch(`${process.env.REACT_APP_BACKEND_ROOT_URL}/users/reset`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 201) {
            get().showModal(res.message);
            return;
          }
          get().showModal(res.error);
        })
        .catch((err) => {
          get().showModal(err.error);
        });
    },

    addNewProduct: (name, price, countInStock, description, image) => {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", name);
      formData.append("price", price);
      formData.append("countInStock", countInStock);
      formData.append("description", description);

      return fetch(`${process.env.REACT_APP_BACKEND_ROOT_URL}/products`, {
        ...get().multipartHeaders(),
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 201) {
            get().fetchProducts();
            get().showModal(res.message);
            return true;
          }
          if (res.status === 401 || res.status === 403) {
            get().showModal("Not authorized");
            get().logout();
            return;
          }
          get().showModal(res.error);
        })
        .catch((err) => {
          get().showModal(err.error);
        });
    },

    updateProduct: (
      productId,
      name,
      price,
      countInStock,
      description,
      image
    ) => {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", name);
      formData.append("price", price);
      formData.append("countInStock", countInStock);
      formData.append("description", description);

      fetch(`${process.env.REACT_APP_BACKEND_ROOT_URL}/products/${productId}`, {
        ...get().multipartHeaders(),
        method: "PUT",
        body: formData,
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            get().fetchProducts();
            get().showModal(res.message);

            return;
          }
          if (res.status === 401 || res.status === 403) {
            get().showModal("Not authorized");
            get().logout();
            return;
          }
          get().showModal(res.error);
        })
        .catch((err) => {
          get().showModal(err.error);
        });
    },

    deleteProduct: (productId) => {
      fetch(`${process.env.REACT_APP_BACKEND_ROOT_URL}/products/${productId}`, {
        ...get().jsonHeaders(),
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            get().fetchProducts();
            get().showModal(res.result);
            return;
          }
          if (res.status === 401 || res.status === 403) {
            get().showModal("Not authorized");
            get().logout();
            return;
          }
          get().showModal(res.error);
        })
        .catch((err) => {
          get().showModal(err.error);
        });
    },

    fetchProducts: (keyword) => {
      fetch(
        `${process.env.REACT_APP_BACKEND_ROOT_URL}/products?keyword=${
          keyword || ""
        }`,
        {
          ...get().jsonHeaders(),
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            return set({ products: res._products });
          }
          get().showModal(res.error);
        })
        .catch((err) => {
          get().showModal(err.error);
        });
    },

    deleteCarouselImage: (imageId) => {
      fetch(
        `${process.env.REACT_APP_BACKEND_ROOT_URL}/products/carousel/${imageId}`,
        {
          ...get().jsonHeaders(),
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            get().fetchCarouselProducts();
            get().showModal(res.result);
            return;
          }
          if (res.status === 401 || res.status === 403) {
            get().showModal("Not authorized");
            get().logout();
            return;
          }
          get().showModal(res.error);
        })
        .catch((err) => {
          get().showModal(err.error);
        });
    },

    uploadCarouselImage: (file) => {
      const formData = new FormData();
      formData.append("image", file);

      fetch(`${process.env.REACT_APP_BACKEND_ROOT_URL}/products/carousel`, {
        ...get().multipartHeaders(),
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 201) {
            get().showModal(res.message);
            get().fetchCarouselProducts();
            return;
          }
          if (res.status === 401 || res.status === 403) {
            get().showModal("Not authorized");
            get().logout();
            return;
          }
          get().showModal(res.error);
        })
        .catch((err) => {
          get().showModal(err.error);
        });
    },

    fetchCarouselProducts: () => {
      fetch(`${process.env.REACT_APP_BACKEND_ROOT_URL}/products/carousel`, {
        ...get().jsonHeaders(),
        method: "GET",
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            return set({ carouselProducts: res._products });
          }
          get().showModal(res.error);
        })
        .catch((err) => {
          get().showModal(err.error);
        });
    },

    updateUserOrder: (orderId, delivered) => {
      fetch(
        `${process.env.REACT_APP_BACKEND_ROOT_URL}/orders/admin/${orderId}`,
        {
          ...get().jsonHeaders(),
          method: "PUT",
          body: JSON.stringify({
            delivered,
          }),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            get().fetchAdminOrders();
            get().showModal(res.result);
            return;
          }
          if (res.status === 401 || res.status === 403) {
            get().showModal("Not authorized");
            get().logout();
            return;
          }
          get().showModal(res.error);
        })
        .catch((err) => {
          get().showModal(err.error);
        });
    },

    fetchAdminOrders: () => {
      fetch(`${process.env.REACT_APP_BACKEND_ROOT_URL}/orders/admin`, {
        ...get().jsonHeaders(),
        method: "GET",
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            return set({ adminOrders: res._orders });
          }
          if (res.status === 401 || res.status === 403) {
            get().showModal("Not authorized");
            get().logout();
            return;
          }
          get().showModal(res.error);
        })
        .catch((err) => {
          get().showModal(err.error);
        });
    },

    updateUserRole: (userId, role) => {
      fetch(`${process.env.REACT_APP_BACKEND_ROOT_URL}/users/${userId}`, {
        ...get().jsonHeaders(),
        method: "PUT",
        body: JSON.stringify({
          userId,
          role: role,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            get().fetchUsers();
            get().showModal(res.result);
            return;
          }
          if (res.status === 401 || res.status === 403) {
            get().showModal("Not authorized");
            get().logout();
            return;
          }
          get().showModal(res.error);
        })
        .catch((err) => {
          get().showModal(err.error);
        });
    },

    deleteUser: (userId) => {
      fetch(`${process.env.REACT_APP_BACKEND_ROOT_URL}/users/${userId}`, {
        ...get().jsonHeaders(),
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            get().fetchUsers();
            get().showModal(res.result);
            return;
          }
          if (res.status === 401 || res.status === 403) {
            get().showModal("Not authorized");
            get().logout();
            return;
          }
          get().showModal(res.error);
        })
        .catch((err) => {
          get().showModal(err.error);
        });
    },

    fetchUsers: () => {
      fetch(`${process.env.REACT_APP_BACKEND_ROOT_URL}/users`, {
        ...get().jsonHeaders(),
        method: "GET",
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            return set({ adminUsers: res._users });
          }
          if (res.status === 401 || res.status === 403) {
            get().showModal("Not authorized");
            get().logout();
            return;
          }
          get().showModal(res.error);
        })
        .catch((err) => {
          get().showModal(err.error);
        });
    },

    signIn: (email, password) => {
      fetch(`${process.env.REACT_APP_BACKEND_ROOT_URL}/users/login`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            get().setUserInfo({
              token: res.token,
              role: res.role,
              name: res.name,
              email: res.email,
            });
            window.location.reload();
            return;
          }
          get().showModal(res.error);
        })
        .catch((err) => {
          get().showModal(err.error);
        });
    },

    signUp: (name, email, password) => {
      fetch(`${process.env.REACT_APP_BACKEND_ROOT_URL}/users/signup`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            get().setUserInfo({
              token: res.token,
              role: res.role,
              name: res.name,
              email: res.email,
            });
            window.location.reload();
            return;
          }
          get().showModal(res.error);
        })
        .catch((err) => {
          get().showModal(err.error);
        });
    },

    logout: () => {
      get().setUserInfo({});
      window.location.reload();
    },

    loggedIn: () => {
      const userInfo = get().userInfo;
      if (userInfo) return userInfo.token;
      return null;
    },
    userRole: () => {
      const userInfo = get().userInfo;
      if (userInfo) return userInfo.role;
      return null;
    },

    setUserInfo: (userInfo) => {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      set({ userInfo: userInfo });
    },

    numOfProducts: () => get().cartProducts.length,

    productById: (productId) =>
      get().products.filter(({ _id }) => _id === productId)[0],

    totalPrice: () =>
      get()
        .cartProducts.map(({ price, quantity }) => price * quantity)
        .reduce((acc, curr) => acc + curr, 0)
        .toFixed(2),

    showModal: (errorMessage) => set({ modalMessage: errorMessage }),
    removeModal: () => set({ modalMessage: null }),
    closeSidebar: () => set({ sidebar: false }),
    openSidebar: () => set({ sidebar: true }),
    setSidebar: () => set((state) => ({ sidebar: !state.sidebar })),
    openCloseUserMenu: () => set((state) => ({ userMenu: !state.userMenu })),
    closeUserMenuAndSidebar: () => set({ sidebar: false, userMenu: false }),
    openCart: () => set({ cartState: true }),
    closeCart: () => set({ cartState: false }),
    addProductsToCart: (products) => set({ cartProducts: products }),

    addProductToCart: ({ _id, name, image_url, price, quantity }) => {
      const updatedCartProducts = [
        ...get().cartProducts,
        { _id, name, image_url, price, quantity },
      ];
      set({
        cartProducts: updatedCartProducts,
      });
      localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));
    },

    removeProductFromCart: (_id) => {
      const updatedCartProducts = get().cartProducts.filter(
        (product) => product._id !== _id
      );
      set({
        cartProducts: updatedCartProducts,
      });
      localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));
    },

    isExistInCart: (productId) =>
      get().cartProducts.find(({ _id }) => _id === productId),

    updateProductQuantity: (prodId, newQuantity) => {
      const updatedCartProducts = get().cartProducts;
      var foundIndex = get().cartProducts.findIndex(
        ({ _id }) => _id === prodId
      );
      updatedCartProducts[foundIndex].quantity = newQuantity;
      set({
        cartProducts: updatedCartProducts,
      });
      localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));
    },
  }))
);

export default useStore;
