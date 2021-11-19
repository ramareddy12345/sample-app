import React, { useEffect, useState, Suspense } from 'react';
import { Options as ChartOptions, SeriesVariablepieOptions, XAxisOptions } from 'highcharts';
import { FiSearch } from 'react-icons/fi';

// import { Chart } from '../../components/Chart';
import { getRequest } from '../utils/service';
import { prepareBarChartConfig, preparePieChartConfig } from '../utils/chartUtils';

const Chart = React.lazy(() => {
    return import(/*webpackChunkName: "Chatschunk"*/ '../../components/Chart');
});

const VehicleInsights = () => {
    const [config, setConfig] = useState<ChartOptions>(preparePieChartConfig('Vehicle type', 'Total', []));

    useEffect(() => {
        getRequest(`${window.location.origin}/vehicles`).then((data) => {
            const transformedData = data.data.map(item => {
                return {
                    name: item.VehicleType,
                    y: item.total
                }
            });

            config.series = [{
                name: 'Total',
                data: transformedData,
                size: '100%',
                showInLegend: true,
                dataLabels: {
                    enabled: true
                }
            }] as SeriesVariablepieOptions[];

            setConfig({...config});
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <Suspense fallback={() => <div>Loading...</div>}>
            <Chart id="vehicle-insights" config={config}/>
        </Suspense>
    );
};

const HomeMortgageDetails = () => {
    const [config, setConfig] = useState<ChartOptions>(prepareBarChartConfig('Home mortgages by work status', 'Work status', 'Count case ID'));

    useEffect(() => {
        getRequest(`${window.location.origin}/home-mortgage`).then((data) => {
            const categories = new Set();
            const values:number[] = [];

            data.data.forEach((item) => {
                categories.add(item.pyStatusWork);
                values.push(item.total);
            });

            config.xAxis = { ...config.xAxis, categories: Array.from(categories) } as XAxisOptions;
            config.series = [{
                name: 'Count Case ID',
                type: 'column',
                data: values
            }];

            setConfig({...config});
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <Suspense fallback={() => <div>Loading...</div>}>
            <Chart id="home-mortgage" config={config}/>
        </Suspense>
    );
};

const Insights = () => {
    return (
        <div id="insights-page">
            <h3 className="title"><span className="icon"><FiSearch/></span>Insights Page</h3>
            <div className="cards-container">
                <div className="card">
                    <VehicleInsights/>
                </div>
                <div className="card">
                    <HomeMortgageDetails/>
                </div>
            </div>
        </div>
    );
};

export default Insights;
