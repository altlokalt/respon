import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import { ProtectedRoute } from "components";
const Portfol = React.lazy(() => import("pages/Portfol"));
const OnClick = React.lazy(() => import("pages/OnClick"));
const Companiespg = React.lazy(() => import("pages/Companiespg"));
const PickSectororLocat = React.lazy(() => import("pages/PickSectororLocat"));
const Forum = React.lazy(() => import("pages/Forum"));
const Job = React.lazy(() => import("pages/Job"));
const CoDetailedLoginUser = React.lazy(() =>
  import("pages/CoDetailedLoginUser")
);
const OnClicklg = React.lazy(() => import("pages/OnClicklg"));
const High = React.lazy(() => import("pages/High"));
const Categlg = React.lazy(() => import("pages/Categlg"));
const Categ = React.lazy(() => import("pages/Categ"));
const LgvTwo = React.lazy(() => import("pages/LgvTwo"));
const Founderslandpg = React.lazy(() => import("pages/Founderslandpg"));
const LandpgvOne = React.lazy(() => import("pages/LandpgvOne"));
const ShortLandpg = React.lazy(() => import("pages/ShortLandpg"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/shortlandpg" element={<ShortLandpg />} />
          <Route path="/landpgvone" element={<LandpgvOne />} />
          <Route path="/founderslandpg" element={<Founderslandpg />} />
          <Route path="/lgvtwo" element={<LgvTwo />} />
          <Route path="/categ" element={<Categ />} />
          <Route
            path="/categlg"
            element={<ProtectedRoute element={Categlg} />}
          />
          <Route path="/high" element={<ProtectedRoute element={High} />} />
          <Route
            path="/onclicklg"
            element={<ProtectedRoute element={OnClicklg} />}
          />
          <Route
            path="/codetailedloginuser"
            element={<CoDetailedLoginUser />}
          />
          <Route path="/job" element={<ProtectedRoute element={Job} />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/picksectororlocat" element={<PickSectororLocat />} />
          <Route path="/companiespg" element={<Companiespg />} />
          <Route path="/onclick" element={<OnClick />} />
          <Route path="/portfol" element={<Portfol />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
