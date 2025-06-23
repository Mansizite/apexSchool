
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
              <tr><th>SR No.</th><th>DOCUMENTS / INFORMATION</th><th>UPLOADED DOCUMENTS</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>COPIES OF AFFILIATION / UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY</td><td><ViewButton href="/pdfs/affiliation-letter.pdf" /></td></tr>
              <tr><td>2</td><td>COPIES OF SOCIETIES / TRUST / COMPANY REGISTRATION / RENEWAL CERTIFICATE, AS APPLICABLE</td><td><ViewButton href="Registration-certificate.pdf" /></td></tr>
              <tr><td>3</td><td>COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT</td><td><ViewButton href="No-Objection-Certificate.pdf" /></td></tr>
              <tr><td>4</td><td>COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT’S RENEWAL IF APPLICABLE</td><td><ViewButton href="b-section-4.pdf" /></td></tr>
              <tr><td>5</td><td>COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE</td><td><ViewButton href="building.pdf" /></td></tr>
              <tr><td>6</td><td>COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY</td><td><ViewButton href="Fire-Safety.pdf" /></td></tr>
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
              <tr><th>SR No.</th><th>DOCUMENTS / INFORMATION</th><th>UPLOADED DOCUMENTS</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>FEE STRUCTURE OF THE SCHOOL</td><td><ViewButton href="/pdfs/fee-structure.pdf" /></td></tr>
              <tr><td>2</td><td>ANNUAL ACADEMIC CALENDER</td><td><ViewButton href="Academic_Calendar.pdf" /></td></tr>
              <tr><td>3</td><td>LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)</td><td><ViewButton href="smc.pdf" /></td></tr>
              <tr><td>4</td><td>LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS</td><td><ViewButton href="PTA.pdf" /></td></tr>
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
              <tr><td>2</td><td>TOTAL NO. OF TEACHERS</td><td>42</td></tr>
              <tr><td></td><td>PGT</td><td>0</td></tr>
              <tr><td></td><td>TGT</td><td>7</td></tr>
              <tr><td></td><td>PRT</td><td>22</td></tr>
              <tr><td>3</td><td>TEACHERS SECTION RATIO</td><td>1:1.5</td></tr>
              <tr><td>4</td><td>DETAILS OF SPECIAL EDUCATOR</td><td>-</td></tr>
              <tr><td>5</td><td>DETAILS OF COUNSELLOR AND WELLNESS TEACHER</td><td>Sheetal Tushar Barathe</td></tr>
            </tbody>
          </table>

          <h6 className="mt-4">RESULT CLASS: X</h6>
          <table className="table table-bordered">
            <thead className="table-light">
              <tr><th>YEAR</th><th>NO. OF REGISTERED STUDENTS</th><th>NO. PASSED</th><th>PASS %</th><th>REMARKS</th></tr>
            </thead>
            <tbody><tr><td>NA</td><td>NA</td><td>NA</td><td>NA</td><td>NA</td></tr></tbody>
          </table>

          <h6 className="mt-4">RESULT CLASS: XII</h6>
          <table className="table table-bordered">
            <thead className="table-light">
              <tr><th>YEAR</th><th>NO. OF REGISTERED STUDENTS</th><th>NO. PASSED</th><th>PASS %</th><th>REMARKS</th></tr>
            </thead>
            <tbody><tr><td>NA</td><td>NA</td><td>NA</td><td>NA</td><td>NA</td></tr></tbody>
          </table>
        </div>
      </div>

      {/* Section E: Infrastructure */}
      <div className="card mb-4 shadow-sm">
        <div className="card-header text-white fw-bold" style={{ backgroundColor: '#1e3c72' }}>E : School Infrastructure</div>
        <div className="card-body">
          <table className="table table-bordered">
            <tbody>
              <tr><td>1</td><td>TOTAL CAMPUS AREA OF THE SCHOOL (IN SQ MTR)</td><td>4000 Sq.mtres</td></tr>
              <tr><td>2</td><td>NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR)</td><td>Nos of Classrooms:  29</td></tr>
              <tr><td>3</td><td>NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)</td><td>Nos of Laboratories: 05</td></tr>
              <tr><td>4</td><td>INTERNET FACILITY</td><td>YES</td></tr>
              <tr><td>5</td><td>NO. OF GIRLS TOILETS</td><td>18</td></tr>
              <tr><td>6</td><td>NO. OF BOYS TOILETS</td><td>12</td></tr>
              <tr><td>7</td><td>NO. OF BOYS TOILETS (CWSN)</td><td>6</td></tr>
              <tr><td>8</td><td>NO. OF GIRLS TOILETS (CWSN)</td><td>6</td></tr>
              <tr><td>9</td><td>LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE</td><td><ViewButton href="https://youtube.com" /></td></tr>
            </tbody>
          </table>
        </div>
      </div>

     
      <div className="card shadow-sm mb-5">
  <div className="card-header text-white fw-bold" style={{ backgroundColor: '#1e3c72' }}>
    F : Teachers Details
  </div>
  <div className="card-body">
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>SR No.</th>
            <th>Teacher Name</th>
            <th>Designation</th>
            <th>Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Manasi Paramdeep Singh Gill</td><td>Principal</td><td>M.Sc. M.Ed. DSM</td></tr>
          <tr><td>2</td><td>Leena Ghrushneshwar Tugade</td><td>Vice Principal</td><td>B.Sc. B.Ed.</td></tr>
          <tr><td>3</td><td>Sonam Rahul Chokhar</td><td>NTT</td><td>B.A, D.Ed</td></tr>
          <tr><td>4</td><td>Kajal Abhijeet Khedkar</td><td>NTT</td><td>B.Com, TTC</td></tr>
          <tr><td>5</td><td>Almas Pramod Dahale</td><td>NTT</td><td>HSC, TTC</td></tr>
          <tr><td>6</td><td>Chitra Sambhaji Halnor</td><td>NTT</td><td>B.A, D.Ed</td></tr>
          <tr><td>7</td><td>Sujata Amit Modak</td><td>NTT</td><td>B.A, D.Ed</td></tr>
          <tr><td>8</td><td>Manisha Ramesh Gaikwad</td><td>PRT</td><td>B.A. B.Ed.</td></tr>
          <tr><td>9</td><td>Jayashree Patil</td><td>PRT</td><td>D.Ed. B.A. MBM</td></tr>
          <tr><td>10</td><td>Sana Jahruddin Mulani</td><td>PRT</td><td>M.Sc, B.Ed.</td></tr>
          <tr><td>11</td><td>Lochan Satish Patil</td><td>PRT</td><td>B.A, D.Ed.</td></tr>
          <tr><td>12</td><td>Sana Shahid Ali Mulla</td><td>PRT</td><td>M.Sc. B.Ed.</td></tr>
          <tr><td>13</td><td>Nilam Tushar Marathe</td><td>PRT</td><td>B.Sc, B.Ed.</td></tr>
          <tr><td>14</td><td>Priti Ram Palaskar</td><td>PRT</td><td>D.Ed. B.Ed, M.A. M.Ed.</td></tr>
          <tr><td>15</td><td>Dhanashree Raviraj Gujar</td><td>PRT</td><td>D.Ed., M.A. B.Ed.</td></tr>
          <tr><td>16</td><td>Ashwini Omkar Deshmane</td><td>PRT</td><td>HSC, D.Ed.</td></tr>
          <tr><td>17</td><td>Nikita Prafulla Malawade</td><td>PRT</td><td>ITI, D.Ed.</td></tr>
          <tr><td>18</td><td>Ashwini Sujit Patil</td><td>PRT</td><td>B.E</td></tr>
          <tr><td>19</td><td>Nikita Rambhau Gadekar</td><td>PRT</td><td>M.Sc. B.Ed.</td></tr>
          <tr><td>20</td><td>Sudha Sanghpal Mule</td><td>PRT</td><td>M.Sc., B.Ed.</td></tr>
          <tr><td>21</td><td>Priti Arvind Nagothkar</td><td>PRT</td><td>B.A. D.T.Ed.</td></tr>
          <tr><td>22</td><td>Bhavana Prashant Jade</td><td>PRT</td><td>M.CA, B.A. B.Ed.</td></tr>
          <tr><td>23</td><td>Madhuri Vishal Chavan</td><td>PRT</td><td>M.A. B.Ed</td></tr>
          <tr><td>24</td><td>Sushma Dnyaneshwar Dhage</td><td>PRT</td><td>B.Com B.Ed.</td></tr>
          <tr><td>25</td><td>Vrushali Abhijeet Malwade</td><td>PRT</td><td>M.Sc. B.Ed.</td></tr>
          <tr><td>26</td><td>Gauri Sunil Bhalekar</td><td>PRT</td><td>M.Sc. B.Ed.</td></tr>
          <tr><td>27</td><td>Pooja Uday Darekar</td><td>PRT</td><td>MCA</td></tr>
          <tr><td>28</td><td>Mohini Kaur Kirpal Singh Ladhad</td><td>PRT</td><td>B.A, D.Ed.</td></tr>
          <tr><td>29</td><td>Sunita Bharat Dalve</td><td>PRT</td><td>B.Sc.</td></tr>
          <tr><td>30</td><td>Roshani Swapnil More</td><td>TGT</td><td>M.A, B.Ed.</td></tr>
          <tr><td>31</td><td>Amit Mohan Rode</td><td>TGT</td><td>M.Sc. B.Ed.</td></tr>
          <tr><td>32</td><td>Namrata Ganesh Marathe</td><td>TGT</td><td>M.A. B.Ed</td></tr>
          <tr><td>33</td><td>Akshay Mahamuni</td><td>TGT</td><td>B.Com B.Ed.</td></tr>
          <tr><td>34</td><td>Nilam Rahul Tongae</td><td>TGT</td><td>M.A. M.Ed.</td></tr>
          <tr><td>35</td><td>Sheetal Jadhav</td><td>TGT</td><td>M.A. B.Ed.</td></tr>
          <tr><td>36</td><td>Hemlata Amol Ingale</td><td>TGT</td><td>B.E. Computer</td></tr>
          <tr><td>37</td><td>Akash Sudhir Kharade</td><td>PTI</td><td>B.A. B.P.Ed.</td></tr>
          <tr><td>38</td><td>Hrishikesh Pravinkumar Kamble</td><td>PTI</td><td>B.A., M.P.Ed</td></tr>
          <tr><td>39</td><td>Priyanka Dattatray Sabale</td><td>PTI</td><td>B.A. B.P.Ed.</td></tr>
          <tr><td>40</td><td>Rutuja Khanderao Bhor</td><td>Art And Craft</td><td>Diploma in Applied Arts, B.S.A. in Applied Arts</td></tr>
          <tr><td>41</td><td>Suraj Pawar</td><td>Dance Teacher</td><td>Diploma in Dance</td></tr>
          <tr><td>42</td><td>Kiran Anantkumar Khambayate</td><td>Librarian</td><td>B.A. M.Lib.</td></tr>
          <tr><td>43</td><td>Sheetal Barathe</td><td>Counsellor</td><td>M.A. in Sociology</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

    </div>
  );
};

export default MpdPage;
