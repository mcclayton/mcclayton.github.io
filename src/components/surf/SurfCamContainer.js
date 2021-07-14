import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';
import { parse } from 'query-string';
import SurfCam from './SurfCam';
import RegionOverviewHelper from './lib/RegionOverviewHelper';

function useStreamUrls(spotId) {
  const [streamUrls, setStremUrls] = useState([]);
  const [spotName, setSpotName] = useState(null);

  function updateStreamUrls(streamUrls) {
    setStremUrls(streamUrls);
  }

  useEffect(() => {
    async function fetchData() {
      const regionOverviewHelper = new RegionOverviewHelper();
      const spotOverviewUrl =
        regionOverviewHelper.generateSpotOverviewUrl(spotId);
      const regionOverview = await regionOverviewHelper.fetchRegionOverview(
        spotOverviewUrl
      );
      const spotInfo = regionOverviewHelper.findSpot(regionOverview, spotId);
      const streamUrls = regionOverviewHelper.parseStreamUrls(spotInfo);

      setSpotName(spotInfo.name);
      updateStreamUrls(streamUrls);
    }

    fetchData();
  }, [spotId]);

  return { streamUrls, spotName };
}

const SurfCamContainer = ({ defaultSpotId }) => {
  const location = useLocation();
  const { spot_id } = parse(location.search);
  const spotId = spot_id ? spot_id : defaultSpotId;
  const { streamUrls, spotName } = useStreamUrls(spotId);

  if (spotName) {
    document.title = spotName;
  }

  return (
    <div className="columns">
      {streamUrls.map((streamUrl, index) => {
        return <SurfCam key={index} streamUrl={streamUrl} />;
      })}
    </div>
  );
};

SurfCamContainer.propTypes = {
  defaultSpotId: PropTypes.string,
};

export default SurfCamContainer;