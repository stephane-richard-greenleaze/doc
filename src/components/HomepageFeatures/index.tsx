import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Install GreenLeaze",
    Svg: require("@site/static/img/one.svg").default,
    description: (
      <>Our app is available on Shopify, Prestashop, WooCommerce or via API</>
    ),
  },
  {
    title: "Fix the depreciations",
    Svg: require("@site/static/img/two.svg").default,
    description: (
      <>
        On average, the products we rent depreciate by 25% in 6 months, 35% in
        12 months and 50% in 24 months.
      </>
    ),
  },
  {
    title: "Promote this new option",
    Svg: require("@site/static/img/three.svg").default,
    description: (
      <>
        You remain the master of your brand: it's up to you to promote this new
        format to your customers in order to increase your sales!
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
