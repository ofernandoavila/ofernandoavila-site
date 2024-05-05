import { ReactNode } from "react";

interface CardPropsType {
    children: ReactNode;
}

export default function Card({ children }: CardPropsType) {
    return (
        <div className="card">
            <div className="card-body">
                { children }
            </div>
        </div>
    );
}