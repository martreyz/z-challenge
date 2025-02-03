"use client";

import { useSmartphoneDetailContext } from "@/ui/contexts/SmartphoneDetailContext";
import { useMessages } from "@/ui/hooks/useMessages";

const SmartphoneDetailSpecsTable = () => {
  const { smartphoneDetail } = useSmartphoneDetailContext();
  const messages = useMessages();

  return (
    <section>
      <table border="1">
        <tbody>
          <tr>
            <td>{messages("smartphoneDetail.specs.brand")}</td>
            <td>{smartphoneDetail.brand}</td>
          </tr>
          <tr>
            <td>{messages("smartphoneDetail.specs.name")}</td>
            <td>{smartphoneDetail.name}</td>
          </tr>
          <tr>
            <td>{messages("smartphoneDetail.specs.description")}</td>
            <td>{smartphoneDetail.description}</td>
          </tr>
          <tr>
            <td>{messages("smartphoneDetail.specs.screen")}</td>
            <td>{smartphoneDetail.specs.screen}</td>
          </tr>
          <tr>
            <td>{messages("smartphoneDetail.specs.resolution")}</td>
            <td>{smartphoneDetail.specs.resolution}</td>
          </tr>
          <tr>
            <td>{messages("smartphoneDetail.specs.processor")}</td>
            <td>{smartphoneDetail.specs.processor}</td>
          </tr>
          <tr>
            <td>{messages("smartphoneDetail.specs.mainCamera")}</td>
            <td>{smartphoneDetail.specs.mainCamera}</td>
          </tr>
          <tr>
            <td>{messages("smartphoneDetail.specs.selfieCamera")}</td>
            <td>{smartphoneDetail.specs.selfieCamera}</td>
          </tr>
          <tr>
            <td>{messages("smartphoneDetail.specs.battery")}</td>
            <td>{smartphoneDetail.specs.battery}</td>
          </tr>
          <tr>
            <td>{messages("smartphoneDetail.specs.os")}</td>
            <td>{smartphoneDetail.specs.os}</td>
          </tr>
          <tr>
            <td>{messages("smartphoneDetail.specs.screenRefreshRate")}</td>
            <td>{smartphoneDetail.specs.screenRefreshRate}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default SmartphoneDetailSpecsTable;
