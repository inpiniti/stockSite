import { h } from 'vue';
import { _ as _sfc_main$1 } from './DataTableDropDown-Nh08_0KG.mjs';
import { ArrowUpDown } from 'lucide-vue-next';
import { _ as _sfc_main } from './index-K3pjwam9.mjs';
import './DropdownMenuContent-uyRRRG_b.mjs';
import 'vue/server-renderer';
import 'radix-vue';
import './state-1CyKPjUP.mjs';
import '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';

const columns = [
  {
    accessorKey: "img",
    header: "img",
    cell: ({ row }) => {
      const img = row.getValue("img");
      return h("img", {
        class: "relative w-12 object-cover",
        src: img
      });
    }
  },
  {
    accessorKey: "jp",
    header: ({ column }) => {
      return h(
        _sfc_main,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc")
        },
        () => ["Jp", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "lowercase" }, row.getValue("jp"))
  },
  {
    accessorKey: "kr",
    header: "Kr"
  },
  {
    accessorKey: "sales",
    header: ({ column }) => {
      return h(
        _sfc_main,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc")
        },
        () => ["Sales", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "lowercase" }, row.getValue("sales"))
  },
  {
    accessorKey: "rank",
    header: "rank"
  },
  {
    accessorKey: "booknum",
    header: "booknum"
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return h(
        _sfc_main,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc")
        },
        () => ["Date", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "lowercase" }, row.getValue("date"))
  },
  {
    accessorKey: "name",
    header: "name"
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const book = row.original;
      return h(
        "div",
        { class: "relative" },
        h(_sfc_main$1, {
          book
        })
      );
    }
  }
];

export { columns };
//# sourceMappingURL=columns-yFwicqFI.mjs.map
