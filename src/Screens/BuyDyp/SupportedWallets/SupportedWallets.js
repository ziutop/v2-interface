import React, { useState } from "react";
import { shortAddress } from "../../../hooks/shortAddress";
import useWindowSize from "../../../hooks/useWindowSize";
import Success from "../../../components/Success/Success";



const SupportedWallets = () => {
  const wallets = [
    {
      logo: "coinbase.svg",
      title: "Coinbase",
    },
    {
      logo: "metamask.svg",
      title: "Metamask",
    },
    {
      logo: "trustwallet.svg",
      title: "Trust wallet",
    },
    {
      logo: "coin98.svg",
      title: "Coin98",
    },
    {
      logo: "safepal.svg",
      title: "SafePal",
    },
  ];

  const windowSize = useWindowSize();
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleCopy = (address) => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
      setCopied(false);
    }, 2000);
  };

  


  return (
    <div className="supportedwallet-wrapper container-lg mt-5 mb-5">
      <div>
        <div className="row ml-0 mr-0 gap-lg-3 gap-xl-3 gap-md-3 gap-0  justify-content-lg-between justify-content-xl-between justify-content-md-between justify-content-end mb-xl-0 mb-lg-0 mb-2  align-items-center">
          <h1>Supported wallets</h1> 
          <div>
            <div className="row ml-0 mr-0 gap-2 align-items-center">
              <div className="d-flex flex-column dypaddr-wrapper ">
                <span className="dypcontractaddr">
                  DYP Contract Address (Ethereum, BNB Chain, Avalanche):
                 
                </span>
                <span className="contractaddr justify-content-center">
                  {windowSize.width < 526
                    ? shortAddress("0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17")
                    : "0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17"}
                  <img
                    src={require("../assets/copy.svg").default}
                    alt=""
                    className="ml-2"
                    style={{
                      cursor: "pointer",
                      display: copied === true ? "none" : "",
                    }}
                    onClick={() => {
                      handleCopy("0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17");
                    }}
                  />
                  {copied === true && (
                    <span
                      className="d-inline-block"
                      tabindex="0"
                      data-toggle="tooltip"
                      title="Copied"
                      data-placement="top"
                    >
                      <Success svgColor={"#544ED5"} bgColor={"#FFF"} />
                    </span>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0 gap-2 justify-content-center">
          {wallets.length > 0 &&
            wallets.map((item, index) => {
              return (
                <div className="walletitem" key={index}>
                  <img
                    src={require(`../assets/buydypItems/${item.logo}`)}
                    alt=""
                    className="walletimg"
                  />
                  <span className="wallettitle">{item.title}</span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SupportedWallets;
