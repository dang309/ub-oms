// routes
import i18n from "src/locales/i18n";
import { PATH_DASHBOARD } from "src/routes/paths";
// ----------------------------------------------------------------------

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: "",
    items: [
      {
        title: i18n.t(`__NAV__.overview`),
        path: PATH_DASHBOARD.overview,
        icon: "eva:pie-chart-outline",
      },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: i18n.t(`__SIDEBAR__.management`),
    items: [
      {
        title: i18n.t(`__NAV__.inventory`),
        icon: "eva:cube-outline",
        children: [
          {
            title: i18n.t(`__NAV__.overview`),
            path: PATH_DASHBOARD.management.inventory.overview,
          },
          {
            title: i18n.t(`__NAV__.supplier`),
            path: PATH_DASHBOARD.management.inventory.supplier.all,
          },
          {
            title: i18n.t(`__NAV__.po`),
            path: PATH_DASHBOARD.management.inventory.po.all,
          },
          {
            title: i18n.t(`__NAV__.return`),
            path: PATH_DASHBOARD.management.inventory.return.all,
          },
        ],
      },

      {
        title: i18n.t(`__SIDEBAR__.product`),
        path: PATH_DASHBOARD.management.product.all,
        icon: "eva:shopping-bag-outline",
        children: [
          {
            title: i18n.t(`__NAV__.product`),
            path: PATH_DASHBOARD.management.product.all,
          },
          {
            title: i18n.t(`__NAV__.promotion`),
            path: PATH_DASHBOARD.management.product.promotion,
          },
        ],
      },

      {
        title: i18n.t(`__NAV__.customer`),
        path: PATH_DASHBOARD.management.customer.all,
        icon: "eva:people-outline",
      },

      {
        title: i18n.t(`__SIDEBAR__.order`),
        icon: "eva:file-text-outline",
        children: [
          {
            title: i18n.t(`__NAV__.order`),
            path: PATH_DASHBOARD.management.order.all,
          },
        ],
      },

      {
        title: i18n.t(`__SIDEBAR__.shipment`),
        icon: "eva:car-outline",
        children: [
          {
            title: i18n.t(`__NAV__.overview`),
            path: PATH_DASHBOARD.management.shipment.overview,
          },
          {
            title: i18n.t(`__NAV__.shipment`),
            path: PATH_DASHBOARD.management.shipment.all,
          },
          {
            title: i18n.t(`__NAV__.packing`),
            path: PATH_DASHBOARD.management.shipment.packing,
          },
          {
            title: i18n.t(`__NAV__.dispatching`),
            path: PATH_DASHBOARD.management.shipment.dispatching,
          },
          {
            title: i18n.t(`__NAV__.booking`),
            path: PATH_DASHBOARD.management.shipment.booking,
          },
        ],
      },

      {
        title: i18n.t(`__NAV__.finance`),
        icon: "eva:credit-card-outline",
        children: [
          {
            title: i18n.t(`__NAV__.overview`),
            path: PATH_DASHBOARD.management.finance.overview,
          },
          {
            title: i18n.t(`__NAV__.orderReconcliliation`),
            path: PATH_DASHBOARD.management.finance.orderReconciliation,
          },
          {
            title: i18n.t(`__NAV__.codReconcliliation`),
            path: PATH_DASHBOARD.management.finance.codReconciliation,
          },
          {
            title: i18n.t(`__NAV__.cost`),
            path: PATH_DASHBOARD.management.finance.cost,
          },
        ],
      },
    ],
  },

  {
    subheader: i18n.t(`__SIDEBAR__.saleChannel`),
    items: [
      {
        title: "Shoppee",
        icon: "eva:pie-chart-outline",
        children: [
          {
            title: i18n.t(`__NAV__.overview`),
            path: PATH_DASHBOARD.saleChannel.shoppee.overview,
          },
        ],
      },

      {
        title: "Lazada",
        icon: "eva:pie-chart-outline",
        children: [
          {
            title: i18n.t(`__NAV__.overview`),
            path: PATH_DASHBOARD.saleChannel.lazada.overview,
          },
        ],
      },

      {
        title: "Tiki",
        icon: "eva:pie-chart-outline",
        children: [
          {
            title: i18n.t(`__NAV__.overview`),
            path: PATH_DASHBOARD.saleChannel.tiki.overview,
          },
        ],
      },

      {
        title: "Tiktok Shop",
        icon: "eva:pie-chart-outline",
        children: [
          {
            title: i18n.t(`__NAV__.overview`),
            path: PATH_DASHBOARD.saleChannel.tiki.overview,
          },
        ],
      },
    ],
  },
];

export default sidebarConfig;
