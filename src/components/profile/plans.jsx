import { useState } from "react";
import "./plans.css";
import { Paypal } from "../../icons/methodOfPay/Paypal.jsx";
import { TransferenciaBancaria } from "../../icons/methodOfPay/TransferenciaBancaria.jsx";
import { MercadoPago } from "../../icons/methodOfPay/MercadoPago.jsx";
import { useGetDollarPrice } from "../../hooks/useConvertion.jsx";
import { Efectivo } from "../../icons/methodOfPay/Efectivo.jsx";

export function Plans({ plans }) {
  const { methodOfPay, types } = plans;
  const { price: priceDollar } = useGetDollarPrice();

  const [activeTab, setActiveTab] = useState("standard");

  const handleOpen = (tab) => setActiveTab(tab);

  const getButtonClass = (tab) => (activeTab === tab ? `${tab} active` : tab);

  const filteredPlans = types?.filter((plan) => plan.id === activeTab);

  const METHOD_ICONS = {
    PayPal: Paypal,
    TransferenciaBancaria,
    MercadoPago,
    Efectivo,
  };

  return (
    <section id="plans">
      <div className="buttons-plans">
        <button
          id="btn-basic"
          className={getButtonClass("basic")}
          onClick={() => handleOpen("basic")}
        >
          Plan básico
        </button>
        <button
          id="btn-standard"
          className={getButtonClass("standard")}
          onClick={() => handleOpen("standard")}
        >
          Plan standard
        </button>
        <button
          id="btn-premium"
          className={getButtonClass("premium")}
          onClick={() => handleOpen("premium")}
        >
          Plan premium
        </button>
      </div>
      <div className="content-plans">
        {filteredPlans.map(
          ({
            id,
            title,
            description,
            price,
            divisa,
            deliveryTime,
            hirePlan,
          }) => {
            return (
              <div id={id} className={`plan plan-${id}`} key={id}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="price">
                  <span>{price}</span>
                  <span>{divisa}</span>
                  <div className="convertion-price">
                    <span className="price-ars">
                      ≈ {price * priceDollar} ARS
                    </span>
                    <span>precio aproximado en pesos argentinos</span>
                  </div>
                </div>
                <span>
                  Entrega estimada en: <b>{deliveryTime}</b>
                </span>

                <h4>Metodos de pago</h4>
                <ul className="methodOfPay">
                  {methodOfPay?.map(({ method }) => {
                    const iconName = method === "Paypal" ? "Paypal" : method;
                    const Icon = METHOD_ICONS[iconName];
                    return (
                      <li key={method}>
                        {Icon && <Icon />}
                        <span>
                          {method == "TransferenciaBancaria"
                            ? "Transferencia Bancaria"
                            : method}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <a href={hirePlan}>Contratar {title}</a>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}
