import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import { cloneDeep } from 'lodash';

export interface IChartProps {
    id: string;
    config: Highcharts.Options;
}

export const Chart = (props: IChartProps) => {
    const chartRef = useRef(null);

    const updateConfig = ( config) => {
        if (!config.hasOwnProperty('chart')) {
            config['chart'] = {};
        }
    }

    const renderChart = (id, config) => {
        chartRef.current = Highcharts.chart(id, config);
    };

    useEffect(() => {
        const config = cloneDeep(props.config);

        updateConfig(config);

        if (chartRef.current) {
            chartRef.current.update(config);
            chartRef.current.reflow();
        }
        else {
            renderChart(props.id, config);
        }
    }, [props.config]);

    useEffect(() => {
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
                chartRef.current = null;
            }
        }
    }, []);

    return (
        <div id={props.id} style={{ height: '100%', width: '100%'}}></div>
    );
}