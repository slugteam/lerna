import {
  ClockIcon,
  CogIcon,
  CollectionIcon,
  CubeTransparentIcon,
  EmojiHappyIcon,
  GlobeIcon,
  LightningBoltIcon,
  ShareIcon,
  SparklesIcon,
  TemplateIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import clsx from "clsx";
import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate from '@docusaurus/Translate';
import styles from "./about-lerna.module.css";

interface Callout {
  title: React.ReactNode;
  text: React.ReactNode;
  link: string;
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
}

const callouts: Callout[] = [
  {
    title: <Translate>Never Rebuilds Same Code Twice</Translate>,
    text:
    <Translate>Lerna won't run the tasks it executed before, and instead will restore the files and the terminal output from its cache.</Translate>,
    link: "/docs/core-concepts/computation-caching",
    icon: CogIcon,
  },
  {
    title: <Translate>Distributed Cache</Translate>,
    text:
    <Translate>Computation cache can be shared between developers or CI/CD machines, drastically reducing average CI times.</Translate>,
    link: "/docs/core-concepts/computation-caching#distributed-computation-caching",
    icon: ShareIcon,
  },
  {
    title: <Translate>Target Dependencies</Translate>,
    text: <Translate>Lerna lets you specify how different targets (npm scripts) depend on each other.</Translate>,
    link: "/docs/core-concepts/running-tasks#target-dependencies-aka-task-pipelines",
    icon: CollectionIcon,
  },
  {
    title: <Translate>Efficient Execution</Translate>,
    text:
      <Translate>Lerna runs any command in the most efficient way with the max degree of parallelization while respecting the execution order.</Translate>,
    link: "/docs/core-concepts/running-tasks",
    icon: ClockIcon,
  },
  {
    title: <Translate>Infinite Scaling with Distributed Execution</Translate>,
    text: <Translate>Lerna can run any command across multiple machines without having to configure anything.</Translate>,
    link: "/docs/core-concepts/distributed-task-execution",
    icon: SparklesIcon,
  },
  {
    title: <Translate>Powerful Graph Visualizer</Translate>,
    text:
      <Translate>Lerna comes with a powerful interactive workspace visualizer, helping you understand the architecture of your workspace.</Translate>,
    link: "/docs/getting-started#visualizing-workspace",
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" {...props} fill="currentColor" viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0}
          d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
        />
      </svg>
    ),
  },
  {
    title: <Translate>Polished DX</Translate>,
    text:
      <Translate>Lerna has a powerful dynamic CLI, making sure you only see what is relevant when you run commands against many projects.</Translate>,
    link: "/docs/getting-started",
    icon: UsersIcon,
  },
  {
    title: <Translate>Minimal</Translate>,
    text:
      <Translate>Lerna requires requires very little configuration, and doesn’t clutter your files. You still run your npm scripts, just faster.</Translate>,
    link: "/docs/getting-started",
    icon: CubeTransparentIcon,
  },
  {
    title: <Translate>Lerna Does it All</Translate>,
    text:
      <Translate>Why have separate tools for running tasks, linking packages and publishing them? Lerna does it--less config, less overhead.</Translate>,
    link: "/docs/getting-started",
    icon: TemplateIcon,
  },
];

function Callout(props: Callout): JSX.Element {
  return (
    <div className={clsx("margin-top--xl card shadow--lw", styles.callout)}>
      <div className="card__header">
        <h3 className={styles.callout__title}>
          <props.icon className={styles.callout__icon} stroke="currentColor" aria-hidden="true" />
          {props.title}
        </h3>
      </div>
      <div className="card__body">
        <p>
          <a href={props.link} className={styles.callout__link}>
            <span className="link--inset" aria-hidden="true"></span>
            {props.text}
          </a>
        </p>
      </div>
      <div className={styles.callout__bottom} />
    </div>
  );
}

export default function AboutLerna(): JSX.Element {
  return (
    <section className="padding-vert--xl container">
      <div className={clsx("row margin-bottom--xl", styles.hero)}>
        <div className="col col--8">
          <div>
            <h1 className={clsx("margin-bottom--lg", styles.hero__title)}><Translate>Why Lerna?</Translate></h1>
            <p className={clsx("margin-bottom--md", styles.hero__text)}>
              <Translate>Monorepos let you develop multiple packages in the same repository, which is fantastic for productivity. You can share code, establish clear ownership, and have fast unified CI. That is why more and more teams are switching to this way of development.</Translate>
            </p>
            <p className={clsx("margin-bottom--md", styles.hero__text)}>
              <Translate>To use monorepos well, you need a good monorepo tool, and Lerna is exactly that. Lerna is</Translate>{" "}<a href="https://github.com/vsavkin/large-monorepo"><Translate>fast</Translate></a><Translate>, widely used, and battle tested.</Translate>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        {callouts.map((c) => (
          <div key={c.title} className="col col--4">
            <Callout title={c.title} text={c.text} link={useBaseUrl(c.link)} icon={c.icon} />
          </div>
        ))}
      </div>
    </section>
  );
}