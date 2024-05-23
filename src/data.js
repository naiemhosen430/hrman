export const menuItems = [
  {
    name: "Recruitment",
    dropdown: true,
    items: [
      { name: "Manage Jobs", dropdown: false, items: [] },
      { name: "Manage CV", dropdown: false, items: [] },
    ],
  },
  {
    name: "Employees",
    dropdown: true,
    items: [
      {
        name: "Manage User",
        dropdown: true,
        items: [{ name: "Add User", dropdown: false, items: [] }],
      },
    ],
  },
  {
    name: "Payroll",
    dropdown: true,
    items: [
      { name: "Employee Salary", dropdown: false, items: [] },
      { name: "Payslip", dropdown: false, items: [] },
      { name: "Payroll Items", dropdown: false, items: [] },
    ],
  },
  {
    name: "Gratuity",
    dropdown: true,
    items: [{ name: "option", dropdown: false, items: [] }],
  },
  {
    name: "KPI",
    dropdown: true,
    items: [{ name: "option", dropdown: false, items: [] }],
  },
  {
    name: "Documentations",
    dropdown: true,
    items: [{ name: "option", dropdown: false, items: [] }],
  },
  {
    name: "Settings",
    dropdown: true,
    items: [
      { name: "Profile", dropdown: false, items: [] },
      { name: "Account", dropdown: false, items: [] },
      { name: "Preferences", dropdown: false, items: [] },
    ],
  },
  {
    name: "Help and support",
    dropdown: false,
    items: [],
  },
  {
    name: "About us",
    dropdown: false,
    items: [],
  },
  {
    name: "FAQ",
    dropdown: false,
    items: [],
  },
  {
    name: "Rate us",
    dropdown: false,
    items: [],
  },
];
