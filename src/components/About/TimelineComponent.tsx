"use client";

import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
import "../../app/aboutus/timeline.css";

const TimelineComponent = () => {
    return (
        <div className="container mx-auto max-w-7xl">
            <Timeline horizontal>
                <Timeline.Item>
                    <Timeline.Point
                        className="timeline-point"
                        icon={HiCalendar}
                    />
                    <Timeline.Content>
                        <Timeline.Time className="text-gray-700">
                            March 2020
                        </Timeline.Time>
                        <Timeline.Title className="text-primary">
                            NovaWave Digital Founded
                        </Timeline.Title>
                        <Timeline.Body className="text-primary">
                            NovaWave Digital was established with the goal of
                            helping businesses thrive in the digital landscape
                            through innovative marketing solutions.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point
                        className="timeline-point"
                        icon={HiCalendar}
                    />
                    <Timeline.Content>
                        <Timeline.Time className="text-gray-700">
                            July 2021
                        </Timeline.Time>
                        <Timeline.Title className="text-primary">
                            Expanded Service Offerings
                        </Timeline.Title>
                        <Timeline.Body className="text-primary">
                            NovaWave Digital expanded its services to include
                            comprehensive SEO, social media marketing, and
                            content creation, providing a full suite of digital
                            marketing solutions.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point
                        className="timeline-point"
                        icon={HiCalendar}
                    />
                    <Timeline.Content>
                        <Timeline.Time className="text-gray-700">
                            June 2023
                        </Timeline.Time>
                        <Timeline.Title className="text-primary">
                            Office Expansion
                        </Timeline.Title>
                        <Timeline.Body className="text-primary">
                            Opened a new office in New York City, allowing us to
                            better serve our growing client base and expand our
                            team of digital marketing experts.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point
                        className="timeline-point"
                        icon={HiCalendar}
                    />
                    <Timeline.Content>
                        <Timeline.Time className="text-gray-700">
                            December 2023
                        </Timeline.Time>
                        <Timeline.Title className="text-primary">
                            Launch of New Website
                        </Timeline.Title>
                        <Timeline.Body className="text-primary">
                            Launched a revamped website, showcasing our
                            portfolio, services, and client testimonials,
                            further establishing NovaWave Digital as a leader in
                            the digital marketing industry.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
        </div>
    );
};

export default TimelineComponent;
