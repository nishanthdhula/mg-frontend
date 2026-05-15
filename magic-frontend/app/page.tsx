"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
}

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await api.get("/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    void fetchProperties();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Properties1</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {properties.map((property: Property) => (
          <div
            key={property.id}
            className="border p-5 rounded-lg shadow"
          >
            <h2 className="text-xl font-semibold">
              {property.title}
            </h2>

            <p>{property.location}</p>

            <p className="text-green-600 font-bold">
              ₹ {property.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}