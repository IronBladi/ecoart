import { useEffect, useState } from "react";

import { propietarioService } from "../services/propietarioService";

import type { Propietario } from "../types";

const usePropietarios = () => {

    const [propietarios, setPropietarios] = useState<Propietario[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const cargar = async () => {

            try {

                const data =
                    await propietarioService.obtenerTodos();

                setPropietarios(data);

            }
            catch {

                setError("No se pudieron cargar los propietarios.");

            }
            finally {

                setLoading(false);

            }

        };

        cargar();

    }, []);

    return {

        propietarios,
        loading,
        error,

    };

};

export default usePropietarios;