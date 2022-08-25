import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Fund: NextPage = () => {
  return (
    <div className="main-container">
      <Head>
        <title>Social Gadget Fund</title>
        <meta name="description" content="The for-profit Fund aims to fund the Lab and bring its ideas into reality by monetizing spin-offs, or helping to develop nascent ideas from prospective founders." />
      </Head>

      <main>
        <b>
          <Link href="/">Social Gadget Lab</Link> | Social Gadget Fund
        </b>
        <p>
          The for-profit Fund aims to spin the Lab’s ideas (and others’) into reality,
          reinvesting profits into the Lab. Activities include:
        </p>
        <ul>
          <li>
            recruiting founders to:
            <ul>
              <li>work closely with Lab members to develop and grow products from 0-to-1</li>
              <li>fully take over from 1-to-n</li>
              <li>retain large majority of equity in their products</li>
              <li>participate in the Lab if they wish</li>
            </ul>
          </li>
          <li>making traditional investments where appropriate</li>
        </ul>
        <p>
          The Fund has not launched yet - we will raise soon after the Lab is established.
        </p>
        <b>
          Why not fund the Lab with management fees?
        </b>
        <p>
          We believe 2% is an inappropriate budget for public goods.
          We do hope that in the long-term,
          the Fund’s performance fees and proprietary capital will be enough to sustain the Lab
          (given a 10-year fund lifecycle, we expect the Lab to rely on donations for at least 5 years).
          However, we believe that the dual structure will continue to align us with the mission -
          for profits to serve research, not for research to serve profits.
        </p>
        <p>
          In particular, the Lab will not be bound by any KPIs/OKRs related to Fund performance.
        </p>
      </main>
    </div>
  )
}

export default Fund
