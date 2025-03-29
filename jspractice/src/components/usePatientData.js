import { useState, useEffect } from "react";
const username = "coalition";
const password = "skills-test";
const basicAuth = btoa(`${username}:${password}`);

export default function usePatientData() {
  const [patients, setPatient] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        {
          method: "GET",
          headers: {
            Authorization: `Basic ${basicAuth}`,
          },
        }
      );

      if (!response.ok) {
        return;
      }

      const data = await response.json();
      setPatient(data);

      const jessica = data.find((p) => p.name === "Jessica Taylor");
      setSelectedPatient(jessica);
    }

    fetchData();
  }, []);

  const handleSelect = (name) => {
    const p = patients.find((p) => p.name === name);
    setSelectedPatient(p);
  };


  return {
    patients,
    selectedPatient,
    onSelect: handleSelect,
    onSelectedPatient: setSelectedPatient,
  };
}
