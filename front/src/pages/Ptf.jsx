import React from "react";
import Card from "../components/Card";
import ChartPie from "../components/ChartPie";
import Modal from "../components/Modal";

// MUI
import { Box } from "@mui/material";
import Table from "../components/Table";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

// REACT
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// UTILS FUNCTIONS
import {
  formatISO,
  getUniqueLanguesWithSum,
  getUniqueDevWithSum,
} from "../utils/functions";

//REDUCERS
import {
  addIdCtraPtfToStore,
  addActivePtfToStore,
  addTotalMVToStore,
  clearStore,
} from "../reducers/primaryKeys";

// HTTP REQUEST
import { fetchPtf, fetchOpe, fetchLign } from "../utils/http";

// TABULATOR COLUMNS & OPTIONS
import {
  columnsOpeLG,
  columnsOpeMD,
  columnsOpeSM,
} from "../data/Tabulator/Operation";
import {
  columnsPtfSM,
  columnsPtfMD,
  columnsPtfLG,
} from "../data/Tabulator/Portefeuille";
const Ptf = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [dataPtf, setdataPtf] = useState([]);
  const [dataOpe, setdataOpe] = useState([]);
  const [columnsOpe, setColumnsOpe] = useState([]);
  const [columnsPtf, setColumnsPtf] = useState([]);
  const [dataClasses, setDataClasses] = useState({});
  const [dataDevises, setDataDevises] = useState({});
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //MODAL
  const setModalStateRef = useRef(null); // Create a ref to store setSnackState function
  // Function to trigger state change in Snack component
  const triggerModalStateChange = (newState) => {
    if (setModalStateRef.current) {
      setModalStateRef.current(newState); // Update Snack component state using the stored function
    }
  };
  const handleOpenModal = () => {
    triggerModalStateChange({
      ...setModalStateRef.current,
      open: true,
      message: `Session expiré ou token introuvable, vous allez être redirigé à la page de connexion`,
      confirmation: "SE RECONNECTER",
    });
  };
  const handleConfirmation = () => {
    dispatch(clearStore());
    setTimeout(() => {
      navigate("/");
    }, 1200);
  };

  // GET CLI ID FROM STORE
  const IdCtraCli = useSelector((state) => state.keys.value.IdCtraCli);

  // RESPONSIVE TABLE
  const isSmartphone = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });

  useEffect(() => {
    if (isSmartphone) {
      setColumnsOpe(columnsOpeSM); // Set columns for mobile
      setColumnsPtf(columnsPtfSM); // Set columns for mobile
    } else if (isTablet) {
      setColumnsOpe(columnsOpeMD); // Set columns for tablet
      setColumnsPtf(columnsPtfMD); // Set columns for mobile
    } else {
      setColumnsOpe(columnsOpeLG); // Set columns for large screens
      setColumnsPtf(columnsPtfLG); // Set columns for mobile
    }
  }, [isSmartphone, isTablet]); // Update columns whenever the screen size changes
  ///

  //CHARTJS DOUGHNUT LABELS AND DATA
  const dataSetClasses = {
    labels: dataClasses.uniqueLangues,
    datasets: [
      {
        data: dataClasses.adjustedSumByLangue,
        backgroundColor: [
          "rgba(75, 192, 192, 0.4)",
          "rgba(65, 105, 225, 0.4)",
          "rgba(255, 192, 203, 0.4)",
          "rgba(255, 165, 0, 0.4)",
          "rgba(255, 99, 71, 0.4)",
          "rgba(128, 0, 128, 0.4)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 0.8)",
          "rgba(65, 105, 225, 0.8)",
          "rgba(255, 192, 203, 0.8)",
          "rgba(255, 165, 0, 0.8)",
          "rgba(255, 99, 71, 0.4)",
          "rgba(128, 0, 128, 0.4)",
        ],
      },
    ],
  };

  const dataSetDevises = {
    labels: dataDevises.uniqueLangues,
    datasets: [
      {
        data: dataDevises.adjustedSumByLangue,
        backgroundColor: [
          "rgba(75, 192, 192, 0.4)",
          "rgba(65, 105, 225, 0.4)",
          "rgba(255, 192, 203, 0.4)",
          "rgba(255, 165, 0, 0.4)",
          "rgba(255, 99, 71, 0.4)",
          "rgba(128, 0, 128, 0.4)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 0.8)",
          "rgba(65, 105, 225, 0.8)",
          "rgba(255, 192, 203, 0.8)",
          "rgba(255, 165, 0, 0.8)",
          "rgba(255, 99, 71, 0.4)",
          "rgba(128, 0, 128, 0.4)",
        ],
      },
    ],
  };

  // GET FETCHING EXAMPLE
  useEffect(() => {
    const fetchDataFromServer = async () => {
      setIsFetching(true);

      try {
        //PORTFOLIOS
        const responsePtf = await fetchPtf({ IdCtraCli });
        console.log(responsePtf);

        // AUTHENTIFICATION
        if (!responsePtf.auth) {
          dispatch(clearStore());
          handleOpenModal();
        }

        const IdCtraPtf = responsePtf.data.map((obj) => {
          return obj.IdCtraPtf;
        });
        dispatch(addIdCtraPtfToStore(IdCtraPtf));
        dispatch(addTotalMVToStore(responsePtf.totMV));
        setdataPtf(responsePtf.data);

        console.log("Ptf IDs", IdCtraPtf);

        //OPERATIONS
        const responseOpe = await fetchOpe({ IdCtraPtf });
        console.log(responseOpe);
        const updateDataOpe = formatISO(responseOpe.data, "DateCptaOPE_lsd");
        setdataOpe(updateDataOpe);

        //LIGNES CLASSES FOR DOUGHNUT
        const responseLignPtf = await fetchLign({ IdCtraPtf });
        const labelsAndDataClasses = getUniqueLanguesWithSum(
          responseLignPtf.data,
          responsePtf.totMV
        );
        setDataClasses(labelsAndDataClasses);

        //LIGNES DEVISES FOR DOUGHNUT
        const labelsAndDataDevises = getUniqueDevWithSum(
          responseLignPtf.data,
          responsePtf.totMV
        );
        setDataDevises(labelsAndDataDevises);
      } catch (error) {
        setError({ message: error.message || "custom error message" });
      } finally {
        setIsFetching(false);
      }
    };

    fetchDataFromServer(); // Call the renamed local function
  }, []);
  //

  // TABLE ROWCLICK
  const rowClick = (row) => {
    const activePtf = row.getData();
    dispatch(addActivePtfToStore(activePtf));
    navigate("/layout/detPtf");
  };

  return (
    <Box sx={styles.content}>
      <Modal
        setModalStateRef={setModalStateRef}
        onConfirmation={handleConfirmation}
      />
      <Card title="PORTEFEUILLES">
        <Table columns={columnsPtf} data={dataPtf} parentClick={rowClick} />
        <CardActions>
          <Button
            onClick={() => navigate("/layout/cons")}
            size="meduim"
            sx={styles.consBtn}
          >
            Consolidation
          </Button>
        </CardActions>
      </Card>

      <Box component="section" sx={styles.chartsContainer}>
        <Card title="CLASSES D'ACTIF">
          <ChartPie data={dataSetClasses} />
        </Card>

        <Card title="DEVISES">
          <ChartPie data={dataSetDevises} />
        </Card>
      </Box>

      <Card title="OPERATIONS">
        <Table columns={columnsOpe} data={dataOpe} />
      </Card>
    </Box>
  );
};

/**@type {import("@mui/material".SxProps)} */
const styles = {
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  consBtn: {
    bgcolor: "primary.main",
    color: "white",
    fontSize: "10px",
    "&:hover": {
      bgcolor: "orange.main",
    },
  },
  chartsContainer: {
    display: "flex",
    width: "100%",
    gap: "12px",
    "@media (max-width: 767px)": {
      flexDirection: "column", // Change to column layout on small screens
    },
  },
};

export default Ptf;
