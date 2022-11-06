import axios from "axios";
import { useEffect, useState, createContext } from "react";

export const AncientHimalayanContext = createContext();

export const AncientHimalayanContextProvider = ({ children }) => {
  const [mails, setMails] = useState([]);
  const [cmsData, setCmsData] = useState({});

  useEffect(() => {
    const fetchAllMails = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/contact");
        setMails(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllMails();
  }, []);

  useEffect(() => {
    const fetchCmsData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/cms");
        setCmsData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCmsData();
  }, []);

  return <AncientHimalayanContext.Provider value={{ mails,cmsData }}>{children}</AncientHimalayanContext.Provider>;
};
