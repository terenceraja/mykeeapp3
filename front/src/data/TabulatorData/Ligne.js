// TABLE LIGNPTF PAGE DETPTF
export const columnsLignPtfSM = [
  {
    title: "QUANTITE",
    field: "SoldeCptaDateArrete_lsn",
    responsive: 0,
    minWidth: 100,
    headerHozAlign: "right",
    hozAlign: "right",
    formatter: "money",
    formatterParams: {
      decimal: ",",
      thousand: " ",
      precision: 5,
    },
  },
  { title: "LIBELLE", field: "Libelle_lmt", minWidth: 200, responsive: 0 },
];

// TABLE MOUVEMENTS PAGE MVT

// TABLE LIGNPTF PAGE DETPTF
export const columnsLignPtfMD = [
  {
    title: "QUANTITE",
    field: "SoldeCptaDateArrete_lsn",
    responsive: 0,
    minWidth: 100,
    headerHozAlign: "right",
    hozAlign: "right",
    formatter: "money",
    formatterParams: {
      decimal: ",",
      thousand: " ",
      precision: 5,
    },
  },
  { title: "LIBELLE", field: "Libelle_lmt", minWidth: 200, responsive: 0 },
  { title: "ISIN", field: "CodeIsin_lst", minWidth: 130, responsive: 0 },
  { title: "DEV", field: "CurrISOCode_lxt", minWidth: 80, responsive: 5 },
  {
    title: "MKTCOT",
    field: "MktCOTDevLIGN_lsn",
    responsive: 1,
    minWidth: 100,
    headerHozAlign: "right",
    hozAlign: "right",
    formatter: "money",
    formatterParams: {
      decimal: ",",
      thousand: " ",
    },
  },
  {
    title: "MVIAAIEUR",
    field: "MVAaiJCptaDevPTF_lsn",
    responsive: 2,
    minWidth: 100,
    headerHozAlign: "right",
    hozAlign: "right",
    formatter: "money",
    formatterParams: {
      decimal: ",",
      thousand: " ",
    },
  },
];

// TABLE LIGNPTF PAGE DETPTF
export const columnsLignPtfLG = [
  { title: "ALLOCATION", field: "LangueNomLocalAlloc_lmt", responsive: 4 },
  {
    title: "QUANTITE",
    field: "SoldeCptaDateArrete_lsn",
    responsive: 0,
    minWidth: 100,
    headerHozAlign: "right",
    hozAlign: "right",
    formatter: "money",
    formatterParams: {
      decimal: ",",
      thousand: " ",
      precision: 5,
    },
  },
  { title: "LIBELLE", field: "Libelle_lmt", minWidth: 200, responsive: 0 },
  { title: "ISIN", field: "CodeIsin_lst", minWidth: 130, responsive: 0 },
  { title: "DEV", field: "CurrISOCode_lxt", minWidth: 80, responsive: 5 },
  {
    title: "PMA",
    field: "PMA_lsn",
    responsive: 6,
    minWidth: 100,
    headerHozAlign: "right",
    hozAlign: "right",
    formatter: "money",
    formatterParams: {
      decimal: ",",
      thousand: " ",
    },
  },
  {
    title: "MKTCOT",
    field: "MktCOTDevLIGN_lsn",
    responsive: 1,
    minWidth: 100,
    headerHozAlign: "right",
    hozAlign: "right",
    formatter: "money",
    formatterParams: {
      decimal: ",",
      thousand: " ",
    },
  },
  {
    title: "VALUE",
    field: "Value",
    responsive: 7,
    minWidth: 100,
    headerHozAlign: "right",
    hozAlign: "right",
    formatter: "money",
    formatterParams: {
      decimal: ",",
      thousand: " ",
      symbol: "%",
      symbolAfter: "%",
    },
  },
  {
    title: "YTD",
    field: "PCTPlusValKpYtoDDevLIGNDebutAnnee_lcn",
    responsive: 8,
    minWidth: 100,
    headerHozAlign: "right",
    hozAlign: "right",
    formatter: "money",
    formatterParams: {
      decimal: ",",
      thousand: " ",
      symbol: "%",
      symbolAfter: "%",
    },
  },
  {
    title: "TAUX",
    field: "TauxBase_lmn",
    responsive: 9,
    minWidth: 100,
    headerHozAlign: "right",
    hozAlign: "right",
    formatter: "money",
    formatterParams: {
      decimal: ",",
      thousand: " ",
      precision: 3,
      symbol: "%",
      symbolAfter: "%",
    },
  },
  {
    title: "MATURITE",
    responsive: 10,
    field: "DateMaturite_lsd",
    minWidth: 100,
    sorter: "date",
  },
  {
    title: "YIELD",
    field: "MktCotYieldDevLIGNAff_lcn",
    responsive: 11,
    minWidth: 100,
    headerHozAlign: "right",
    hozAlign: "right",
    formatter: "money",
    formatterParams: {
      decimal: ",",
      thousand: " ",
      symbol: "%",
      symbolAfter: "%",
    },
  },
  {
    title: "MVIAAIEUR",
    field: "MVAaiJCptaDevPTF_lsn",
    responsive: 2,
    minWidth: 100,
    headerHozAlign: "right",
    hozAlign: "right",
    formatter: "money",
    formatterParams: {
      decimal: ",",
      thousand: " ",
    },
  },
  {
    title: "%",
    field: "PCT",
    responsive: 12,
    minWidth: 100,
    headerHozAlign: "right",
    hozAlign: "right",
    formatter: "money",
    formatterParams: {
      decimal: ",",
      thousand: " ",
      symbol: "%",
      symbolAfter: "%",
    },
  },
  {
    title: "MVLIGNE",
    field: "MVJCptaDevLIGN_lsn",
    responsive: 13,
    minWidth: 100,
    headerHozAlign: "right",
    hozAlign: "right",
    formatter: "money",
    formatterParams: {
      decimal: ",",
      thousand: " ",
    },
  },
  {
    title: "MVEUR",
    field: "MVJCptaDevPTF_lsn",
    responsive: 14,
    minWidth: 100,
    headerHozAlign: "right",
    hozAlign: "right",
    formatter: "money",
    formatterParams: {
      decimal: ",",
      thousand: " ",
    },
  },
  {
    title: "CCEUR",
    field: "CpnCourusTotDevPTF_lsn",
    responsive: 16,
    minWidth: 100,
    headerHozAlign: "right",
    hozAlign: "right",
    formatter: "money",
    formatterParams: {
      decimal: ",",
      thousand: " ",
    },
  },
];
