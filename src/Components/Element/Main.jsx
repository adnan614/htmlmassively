import React from "react";
import Heading from "./Heading";
import HeaderParagraph from "./HeaderParagraph";
import HeaderParagraphData from "./HeaderParagraphData";
import NavSocialMap from "./NavSocialMap";
import Unordered from "./Unordered";
import Ordered from "./Ordered";
import Definition from "./Definition";
import DefinitionData from "./DefinitionData";
import Actions from "./Actions";
import Button from "./Button";
import ImageLeftRight from "./ImageLeftRight";
import ImageLeftRightData from './ImageLeftRightData'
import TableWrapper from "./TableWrapper";
import Form from "./Form";
import Box from "./Box";
import LowerPageUl from "./LowerPageUl";

const Main = ({ ImageData, ImageElement }) => {
  return (
    <>
      <div id="main">
        <section class="post">
          <header class="major">
            <h1>
              Elements
              <br />
              Reference
            </h1>
          </header>

          <h2>Text</h2>
          <p>
            This is <b>bold</b> and this is <strong>strong</strong>. This is{" "}
            <i>italic</i> and this is <em>emphasized</em>. This is{" "}
            <sup>superscript</sup> text and this is <sub>subscript</sub> text.
            This is <u>underlined</u> and this is code: <code>for (;;) </code>.
            Finally, this is a <a href="#">link</a>.
          </p>
          <hr />
          <Heading />
          {HeaderParagraphData.map((element, index) => {
            const { header, smallPara, longPara } = element;
            return (
              <HeaderParagraph
                header={header}
                smallPara={smallPara}
                longPara={longPara}
              />
            );
          })}

          <hr />

          <h2>Lists</h2>
          <div class="row">
            <div class="col-6 col-12-small">
              <Unordered />
            </div>
            <div class="col-6 col-12-small">
              <Ordered />

              <h3>Icons</h3>
              <NavSocialMap />
              <NavSocialMap />
            </div>
          </div>
          <h3>Definition</h3>
          <dl>
            {DefinitionData.map((elem, index) => {
              const { item, paragraph } = elem;
              return <Definition item={item} paragraph={paragraph} />;
            })}
          </dl>

          <h3>Actions</h3>
          <Actions valueA={["Primary", "Deafult", "Small"]} />

          <Button />
          <hr />

          <h2>Blockquote</h2>
          <blockquote>
            Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
            sagittis eget tempus euismod. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan faucibus. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis.
          </blockquote>

          <hr />

          <h2>Table</h2>

          <h3>Default</h3>
          <TableWrapper />

          <h3>Alternate</h3>
          <TableWrapper />
          <hr />

          <h2>Buttons</h2>
          <LowerPageUl
            UlClassName={["actions", "actions fit", "actions fit small"]}
            ButtonClassName={[
              "button",
              "button primary",
              "button primary large",
              "button small",
              "button fit",
              "button primary fit",
              "button primary fit small",
              "button fit small",
              "button primary icon solid fa-search",
              "button icon solid fa-download",
              "button primary disabled",
              "button disabled",
            ]} Name={['Primary','Default','Large','Small','Fit','Fit + Small','Icon']}
          />

          <hr />

          <h2>Form</h2>
          <Form />

          <hr />

          <h2>Image</h2>

          <h3>Fit</h3>
          <span class="image fit">
            <img src="images/pic01.jpg" alt="" />
          </span>
          <div class="box alt">
            <div class="row gtr-50 gtr-uniform">
              {ImageData.map((element, index) => {
                const { image } = element;
                return <ImageElement image={image} />;
              })}
            </div>
          </div>

          <h3>Left &amp; Right</h3>
          {ImageLeftRightData.map((element, index) => {
            const { className, image, para } = element;
            return (
              <ImageLeftRight className={className} image={image} para={para} />
            );
          })}

          <hr />

          <h2>Box</h2>
          <Box />

          <hr />

          <h2>Preformatted</h2>
          <pre>
            <code>
              i = 0;
              {/* while (!deck.isInOrder()) {
    print "Iteration " + i;
    deck.shuffle();
    i++;
} */}
              print 'It took ' + i + ' iterations to sort the deck.';
            </code>
          </pre>
        </section>
      </div>
    </>
  );
};

export default Main;
