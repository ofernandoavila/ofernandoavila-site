import { useEffect, useState } from "react";

export default function Signature() {
    const [year, setYear] = useState<number>();

    useEffect(() => {
        const date = new Date();

        setYear(date.getFullYear());
    }, []);

    return (
        <div className="site-signature">
            <span>{ year } © ofernandoavila.com</span>
        </div>
    );
}