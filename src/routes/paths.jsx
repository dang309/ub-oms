// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOT_AUTH_PATH = "/auth";
const ROOT_DASHBOARD_PATH = "/dashboard";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOT_AUTH_PATH,
  login: path(ROOT_AUTH_PATH, "/signin"),
  register: path(ROOT_AUTH_PATH, "/register"),
  resetPassword: path(ROOT_AUTH_PATH, "/reset-password"),
  verify: path(ROOT_AUTH_PATH, "/verify"),
};

export const PATH_PAGE = {
  page404: "/404",
};

export const PATH_DASHBOARD = {
  root: ROOT_DASHBOARD_PATH,
  overview: path(ROOT_DASHBOARD_PATH, "/overview"),
  management: {
    inventory: {
      overview: path(ROOT_DASHBOARD_PATH, "/inventory/overview"),
      supplier: {
        all: path(ROOT_DASHBOARD_PATH, "/inventory/suppliers"),
        detail: path(ROOT_DASHBOARD_PATH, "/inventory/suppliers/:id"),
      },
      po: {
        all: path(ROOT_DASHBOARD_PATH, "/inventory/po"),
        form: {
          create: path(ROOT_DASHBOARD_PATH, "/inventory/po/create"),
          edit: path(ROOT_DASHBOARD_PATH, "/inventory/po/edit/:id"),
        },
      },
      return: {
        all: path(ROOT_DASHBOARD_PATH, "/inventory/returns"),
        form: {
          create: path(ROOT_DASHBOARD_PATH, "/inventory/returns/create"),
          edit: path(ROOT_DASHBOARD_PATH, "/inventory/returns/edit/:id"),
        },
      },
    },
    product: {
      all: path(ROOT_DASHBOARD_PATH, "/products"),
      form: {
        create: path(ROOT_DASHBOARD_PATH, "/products/create"),
        edit: path(ROOT_DASHBOARD_PATH, "/products/edit/:id"),
      },
      catalogue: path(ROOT_DASHBOARD_PATH, "/products/catalogue"),
      promotion: path(ROOT_DASHBOARD_PATH, "/products/promotion"),
    },
    customer: {
      all: path(ROOT_DASHBOARD_PATH, "/customers"),
    },

    order: {
      all: path(ROOT_DASHBOARD_PATH, "/orders"),
      form: {
        create: path(ROOT_DASHBOARD_PATH, "/orders/create"),
        edit: path(ROOT_DASHBOARD_PATH, "/orders/edit/:id"),
      },
    },
    shipment: {
      all: path(ROOT_DASHBOARD_PATH, "/shipments"),
      overview: path(ROOT_DASHBOARD_PATH, "/shipments/overview"),
      packing: path(ROOT_DASHBOARD_PATH, "/shipments/packing"),
      dispatching: path(ROOT_DASHBOARD_PATH, "/shipments/dispatching"),
      booking: path(ROOT_DASHBOARD_PATH, "/shipments/booking"),
    },
    finance: {
      overview: path(ROOT_DASHBOARD_PATH, "/finance/overview"),
      orderReconciliation: path(ROOT_DASHBOARD_PATH, "/finance/order-reconciliation"),
      codReconciliation: path(ROOT_DASHBOARD_PATH, "/finance/cod-reconciliation"),
      cost: path(ROOT_DASHBOARD_PATH, "/finance/cost"),
    },
  },
  saleChannel: {
    shoppee: {
      overview: path(ROOT_DASHBOARD_PATH, "/sale-channel/shoppee/overview"),
    },
    lazada: {
      overview: path(ROOT_DASHBOARD_PATH, "/sale-channel/lazada/overview"),
    },
    tiki: {
      overview: path(ROOT_DASHBOARD_PATH, "/sale-channel/tiki/overview"),
    },
    tiktokShop: {
      overview: path(ROOT_DASHBOARD_PATH, "/sale-channel/tiktok-shop/overview"),
    },
  },
};
