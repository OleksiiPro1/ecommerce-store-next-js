import { css } from '@emotion/react';
import Props__state from '../components/Props__state';

const footerStyles = css`
  padding: 100px 20px;
  background: grey;
  color: white;
  margin-top: 70px;

  font-family: ToyotaType-Regular, Arial, sans-serif;
`;
const footerDivStyles = css`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  padding-right: 100px;
  padding-left: 60px;
`;
export default function Footer() {
  return (
    <footer css={footerStyles}>
      <div css={footerDivStyles}>
        <div>
          Trade-In <br />
          <br />
          Value <br />
          <br />
          Customize Your Own Toyota <br />
          <br />
          Search Inventory <br />
          <br />
          Find a Dealer <br />
          <br />
        </div>
        <div>
          All Toyota Vehicles <br />
          <br />
          Trucks <br />
          <br />
          Cars <br />
          <br />
          Hybrids <br />
          <br />
          Concept Vehicles <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          ©2022 Toyota Motor Sales, U.S.A., Inc. All information applies to U.S.
          vehicles only.
          <br />
        </div>
        <div>
          Toyota Financial <br />
          <br />
          Services <br />
          <br />
          Toyota Mobility <br />
          <br />
          Hybrids <br />
          <br />
          Dealers <br />
        </div>
        <Props__state name="toyota" color="black" engine="2.0" />
      </div>
    </footer>
  );
}
