
'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Reusable View Button Component
type ViewButtonProps = {
  href: string;
};

const ViewButton: React.FC<ViewButtonProps> = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-primary btn-sm"
  >
    View <i className="bi bi-box-arrow-up-right ms-1"></i>
  </a>
);


const MpdPage = () => {
  return (
    <div className="container my-5" style={{ fontFamily: 'Georgia, serif' }}>
      <h2 className="mb-4 fw-bold border-bottom pb-2 d-inline-block text-center" style={{ color: '#1e3c72', marginLeft: '200px' }}>
        Mandatory Public Disclosure (APPENDIX - IX)
      </h2>

      {/* Section A: General Information */}
      <div className="card mb-4 shadow-sm">
        <div className="card-header text-white fw-bold" style={{ backgroundColor: '#1e3c72' }}>A : General Information</div>
        <div className="card-body">
          <table className="table table-bordered table-striped">
            <tbody>
              <tr><td>1</td><td>NAME OF THE SCHOOL</td><td>Apex International School</td></tr>
              <tr><td>2</td><td>AFFILIATION NO. (IF APPLICABLE)</td><td>Under Process</td></tr>
              <tr><td>3</td><td>SCHOOL CODE (IF APPLICABLE)</td><td>27252003222</td></tr>
              <tr><td>4</td><td>COMPLETE ADDRESS WITH PIN CODE</td><td>Sr.No. 501/3, Near Prism City, Charholi Bk, Tal- Haveli, Dist- Pune, 412105</td></tr>
              <tr><td>5</td><td>PRINCIPAL NAME</td><td>Manasi Paramdeep Singh Gill</td></tr>
              <tr><td>6</td><td>PRINCIPAL QUALIFICATION</td><td>M.Sc M.Ed DSM</td></tr>
              <tr><td>7</td><td>SCHOOL EMAIL ID</td><td>apexschoolcharholi@gmail.com</td></tr>
              <tr><td>8</td><td>CONTACT DETAILS (LANDLINE/MOBILE)</td><td>8625837474</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section B: Documents and Information */}
      <div className="card mb-4 shadow-sm">
        <div className="card-header text-white fw-bold" style={{ backgroundColor: '#1e3c72' }}>B : Documents and Information</div>
        <div className="card-body">
          <table className="table table-bordered table-striped">
            <thead className="table-light">
              <tr><th>SL No.</th><th>DOCUMENTS / INFORMATION</th><th>UPLOADED DOCUMENTS</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>COPIES OF AFFILIATION / UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IFANY</td><td><ViewButton href="/pdfs/affiliation-letter.pdf" /></td></tr>
              <tr><td>2</td><td>COPIES OF SOCIETIES / TRUST / COMPANY REGISTRATION / RENEWAL CERTIFICATE, AS APPLICABLE</td><td><ViewButton href="/pdfs/trust-registration.pdf" /></td></tr>
              <tr><td>3</td><td>COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT</td><td><ViewButton href="/pdfs/noc.pdf" /></td></tr>
              <tr><td>4</td><td>COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT’S RENEWAL IF APPLICABLE</td><td><ViewButton href="b-section-4.pdf" /></td></tr>
              <tr><td>5</td><td>COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE</td><td><ViewButton href="/pdfs/building-safety.pdf" /></td></tr>
              <tr><td>6</td><td>COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY</td><td><ViewButton href="/pdfs/fire-safety.pdf" /></td></tr>
              <tr><td>7</td><td>COPY OF SELF CERTIFICATION BY SCHOOL</td><td><ViewButton href="/pdfs/self-certification.pdf" /></td></tr>
              <tr><td>8</td><td>COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES</td><td><ViewButton href="b-section-8.pdf" /></td></tr>
              <tr><td>9</td><td>COPY OF WATER TESTING REPORT</td><td><ViewButton href="b-section-9.pdf" /></td></tr>
              <tr><td>10</td><td>COPY OF CERTIFICATE OF LAND (Annex ‘B’ )</td><td><ViewButton href="b-section-10.pdf" /></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section C: Result and Academics */}
      <div className="card mb-4 shadow-sm">
        <div className="card-header text-white fw-bold" style={{ backgroundColor: '#1e3c72' }}>C : Result and Academics</div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr><th>SL No.</th><th>DOCUMENTS / INFORMATION</th><th>UPLOADED DOCUMENTS</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>FEE STRUCTURE OF THE SCHOOL</td><td><ViewButton href="/pdfs/fee-structure.pdf" /></td></tr>
              <tr><td>2</td><td>ANNUAL ACADEMIC CALENDER</td><td><ViewButton href="/pdfs/academic-calendar.pdf" /></td></tr>
              <tr><td>3</td><td>LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)</td><td><ViewButton href="/pdfs/smc.pdf" /></td></tr>
              <tr><td>4</td><td>LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS</td><td><ViewButton href="/pdfs/pta-members.pdf" /></td></tr>
              <tr><td>5</td><td>LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY</td><td><ViewButton href="/pdfs/board-results.pdf" /></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section D: Staff (Teaching) */}
      <div className="card mb-4 shadow-sm">
        <div className="card-header text-white fw-bold" style={{ backgroundColor: '#1e3c72' }}>D : Staff (Teaching)</div>
        <div className="card-body">
          <table className="table table-bordered">
            <tbody>
              <tr><td>1</td><td>PRINCIPAL</td><td>Manasi Paramdeep Singh Gill</td></tr>
              <tr><td>2</td><td>TOTAL NO. OF TEACHERS</td><td>---</td></tr>
              <tr><td></td><td>PGT</td><td>0</td></tr>
              <tr><td></td><td>TGT</td><td>---</td></tr>
              <tr><td></td><td>PRT</td><td>---</td></tr>
              <tr><td>3</td><td>TEACHERS SECTION RATIO</td><td>1:1.5</td></tr>
              <tr><td>4</td><td>DETAILS OF SPECIAL EDUCATOR</td><td>-</td></tr>
              <tr><td>5</td><td>DETAILS OF COUNSELLOR AND WELLNESS TEACHER</td><td>-</td></tr>
            </tbody>
          </table>

          <h6 className="mt-4">RESULT CLASS: X</h6>
          <table className="table table-bordered">
            <thead className="table-light">
              <tr><th>YEAR</th><th>NO. OF REGISTERED STUDENTS</th><th>NO. PASSED</th><th>PASS %</th><th>REMARKS</th></tr>
            </thead>
            <tbody><tr><td>--</td><td>--</td><td>--</td><td>--</td><td>Not Applicable</td></tr></tbody>
          </table>

          <h6 className="mt-4">RESULT CLASS: XII</h6>
          <table className="table table-bordered">
            <thead className="table-light">
              <tr><th>YEAR</th><th>NO. OF REGISTERED STUDENTS</th><th>NO. PASSED</th><th>PASS %</th><th>REMARKS</th></tr>
            </thead>
            <tbody><tr><td>--</td><td>-</td><td>--</td><td>--</td><td>Not Applicable</td></tr></tbody>
          </table>
        </div>
      </div>

      {/* Section E: Infrastructure */}
      <div className="card mb-4 shadow-sm">
        <div className="card-header text-white fw-bold" style={{ backgroundColor: '#1e3c72' }}>E : School Infrastructure</div>
        <div className="card-body">
          <table className="table table-bordered">
            <tbody>
              <tr><td>1</td><td>TOTAL CAMPUS AREA OF THE SCHOOL (IN SQ MTR)</td><td>_______________ Sq.mtres</td></tr>
              <tr><td>2</td><td>NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR)</td><td>Nos of Classrooms:  13 Size: 46 sq.Mtrs</td></tr>
              <tr><td>3</td><td>NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)</td><td>Nos of Laboratories: 03 Size: 56 sq.Mtrs</td></tr>
              <tr><td>4</td><td>INTERNET FACILITY</td><td>YES</td></tr>
              <tr><td>5</td><td>NO. OF GIRLS TOILETS</td><td>-</td></tr>
              <tr><td>6</td><td>NO. OF BOYS TOILETS</td><td>-</td></tr>
              <tr><td>7</td><td>NO. OF BOYS TOILETS (CWSN)</td><td>-</td></tr>
              <tr><td>8</td><td>NO. OF GIRLS TOILETS (CWSN)</td><td>-</td></tr>
              <tr><td>9</td><td>LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE</td><td><ViewButton href="https://youtube.com" /></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section F: Teachers Details */}
      <div className="card shadow-sm mb-5">
        <div className="card-header text-white fw-bold" style={{ backgroundColor: '#1e3c72' }}>F : Teachers Details</div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr><th>SL No.</th><th>Teacher Name</th><th>Designation</th><th>Qualifications</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>-</td><td>-</td><td>-</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MpdPage;
