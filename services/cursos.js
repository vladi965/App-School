import React, { useState, useEffect, Fragment } from "react";
import { db } from "./firebase-config";
import { v4 as uuidv4 } from "uuid";

function SnapshotFirebase() {
  const [LIST_CURSOS, setCursos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nombre, setNombre] = useState("");
  const [desc, setDesc] = useState("");
  const [imagenUri, setImagenURI] = useState("");

  const ref = db.collection("Cursos");

  //REALTIME GET FUNCTION
  function getCursos() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setCursos(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getCursos();
    // eslint-disable-next-line
  }, []);

  // AÑADIR FUNCTION
  function addSchool(newCurso) {
    ref
      .doc(newCurso.id)
      .set(newCurso)
      .catch((err) => {
        console.error(err);
      });
  }

  //BORRAR FUNCTION
  function deleteSchool(curso) {
    ref
      .doc(curso.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }

  // EDITAR FUNCTION
  function editSchool(updatedCurso) {
    setLoading();
    ref
      .doc(updatedCurso.id)
      .update(updatedCurso)
      .catch((err) => {
        console.error(err);
      });
  }
}

export default SnapshotFirebase;
