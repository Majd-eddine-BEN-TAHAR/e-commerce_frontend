import React from "react";

const Policy = () => {
  return (
    <section className="w-full max-w-2xl mx-auto p-4">
      <h1 className="uppercase text-6xl my-8 underline">policy</h1>
      <div className="">
        <ol className="list-decimal">
          <li className="text-2xl font-medium my-8">
            <h2 className="">Returns</h2>
            <p className="text-base font-normal">
              We do not accept returns or exchanges unless the item you
              purchased is defective. If you receive a defective item, please
              contact us at{" "}
              <i className="underline">majdeddinebentahar@gmail.com</i> with
              details of the product and the defect. You can send the item you
              consider defective to{" "}
              <i className="underline">
                3 rue de maroc nouvelle ariana, ariana 2080
              </i>{" "}
              Upon receipt of the returned product, we will fully examine it and
              notify you via e-mail, within a reasonable period of time, whether
              you are entitled to a refund or a replacement as a result of the
              defect. If you are entitled to a replacement or refund, we will
              replace the product or refund the purchase price, using the
              original method of payment.
            </p>
          </li>

          <li className="text-2xl font-medium my-8">
            <h2 className="">Exchanges</h2>
            <p className="text-base font-normal">
              We only exchange goods if they are defective or damaged. In
              circumstances where you consider that a product is defective, you
              should promptly contact us at{" "}
              <i className="underline">majdeddinebentahar@gmail.com</i> with
              details of the product and the defect. You can send the item you
              consider defective to:{" "}
              <i className="underline">
                3 rue de maroc nouvelle ariana, ariana 2080
              </i>{" "}
            </p>
          </li>

          <li className="text-2xl font-medium my-8">
            <h2 className="">Exceptions</h2>
            <p className="text-base font-normal">
              Some items are non-refundable and non-exchangeable. These include:
              foods and cosmetic products
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Policy;
