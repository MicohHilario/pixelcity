import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faReplyAll,
  faColumns,
  faMoneyBillTrendUp,
  faPeopleRoof,
  faRoadSpikes,
} from "@fortawesome/free-solid-svg-icons";

import { Card, CardBody, Typography } from "@material-tailwind/react";

const Benefits = () => {
  return (
    <div className="grid w-[80vw] m-auto lg:grid-cols-2 place-items-center items-center  xl:grid-cols-3 justify-center">
      <Card className="mt-6 w-[21rem] h-[21rem] text-center p-5 shadow-2xl shadow-black">
        <CardBody>
          <FontAwesomeIcon
            className=" text-[4rem] pb-4 p-1 text-cyan-950"
            icon={faChartPie}
          />
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-2xl font-bold font-poppins"
          >
            Cost-Effective
          </Typography>
          <Typography>
            Online advertisement is cost-effective compared to print
            advertisement and enables you to make on-the-fly changes, given that
            you are using a CMS.
          </Typography>
        </CardBody>
      </Card>

      <Card className="mt-6 w-[21rem] h-[21rem] text-center p-5 shadow-2xl shadow-black">
        <CardBody>
          <FontAwesomeIcon
            className=" text-[4rem] pb-4 p-1 text-cyan-950"
            icon={faReplyAll}
          />
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-2xl font-bold font-poppins"
          >
            Wider Demographic Reach
          </Typography>
          <Typography>
            Unlike having a local brick and mortar establishment, a business
            Website transmits your business profile around the world, permitting
            for enhanced exposure and sales, due to a wider demographic reach.
          </Typography>
        </CardBody>
      </Card>

      <Card className="mt-6 w-[21rem] h-[21rem] text-center p-5 shadow-2xl shadow-black">
        <CardBody>
          <FontAwesomeIcon
            className=" text-[4rem] pb-4 p-1 text-cyan-950"
            icon={faColumns}
          />
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-2xl font-bold font-poppins"
          >
            Business Credibility
          </Typography>
          <Typography>
            If you have a professional looking and user-friendly Website,
            consumers will likely have a greater chance of considering your
            business credible over companies who either do not have a Web
            presence, or have a poor Website presence.
          </Typography>
        </CardBody>
      </Card>

      <Card className="mt-6 w-[21rem] h-[21rem] text-center p-5 shadow-2xl shadow-black">
        <CardBody>
          <FontAwesomeIcon
            className=" text-[4rem] pb-4 p-1 text-cyan-950"
            icon={faMoneyBillTrendUp}
          />
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-2xl font-bold font-poppins"
          >
            Increased Sales
          </Typography>
          <Typography>
            When owning a business exposure is key to attracting customers. An
            effective Website with great content increases the probability for
            increased sales.
          </Typography>
        </CardBody>
      </Card>

      <Card className="mt-6 w-[21rem] h-[21rem] text-center p-5 shadow-2xl shadow-black">
        <CardBody>
          <FontAwesomeIcon
            className=" text-[4rem] pb-4 p-1 text-cyan-950"
            icon={faPeopleRoof}
          />
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-2xl font-bold font-poppins"
          >
            Consumer Convenience
          </Typography>
          <Typography>
            In branching off from the above noted benefit, being available to
            meet the needs of consumers at any time day or night provides added
            convenience, giving them access to products and information whenever
            they need.
          </Typography>
        </CardBody>
      </Card>

      <Card className="mt-6 w-[21rem] h-[21rem] text-center p-5 shadow-2xl shadow-black">
        <CardBody>
          <FontAwesomeIcon
            className=" text-[4rem] pb-4 p-1 text-cyan-950"
            icon={faRoadSpikes}
          />
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-2xl font-bold font-poppins"
          >
            Competitive Opportunity
          </Typography>
          <Typography>
            Chances are your competitors have a Website and they’re using it to
            their fullest advantage. In order to keep up or surpass the
            competition, having a Website is a must.
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default Benefits;
