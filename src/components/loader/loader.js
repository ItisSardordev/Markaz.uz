import React from "react";
import "./loader.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner">
        <svg xmlns="http://www.w3.org/2000/svg" height="277px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <g transform="rotate(0 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#1c67d3">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.4492753623188404s" begin="-1.328502415458937s" repeatCount="indefinite"></animate>
        </rect>
        </g><g transform="rotate(30 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#1c67d3">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.4492753623188404s" begin="-1.2077294685990336s" repeatCount="indefinite"></animate>
        </rect>
        </g><g transform="rotate(60 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#1c67d3">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.4492753623188404s" begin="-1.0869565217391304s" repeatCount="indefinite"></animate>
        </rect>
        </g><g transform="rotate(90 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#1c67d3">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.4492753623188404s" begin="-0.9661835748792269s" repeatCount="indefinite"></animate>
        </rect>
        </g><g transform="rotate(120 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#1c67d3">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.4492753623188404s" begin="-0.8454106280193235s" repeatCount="indefinite"></animate>
        </rect>
        </g><g transform="rotate(150 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#1c67d3">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.4492753623188404s" begin="-0.7246376811594202s" repeatCount="indefinite"></animate>
        </rect>
        </g><g transform="rotate(180 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#1c67d3">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.4492753623188404s" begin="-0.6038647342995168s" repeatCount="indefinite"></animate>
        </rect>
        </g><g transform="rotate(210 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#1c67d3">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.4492753623188404s" begin="-0.48309178743961345s" repeatCount="indefinite"></animate>
        </rect>
        </g><g transform="rotate(240 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#1c67d3">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.4492753623188404s" begin="-0.3623188405797101s" repeatCount="indefinite"></animate>
        </rect>
        </g><g transform="rotate(270 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#1c67d3">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.4492753623188404s" begin="-0.24154589371980673s" repeatCount="indefinite"></animate>
        </rect>
        </g><g transform="rotate(300 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#1c67d3">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.4492753623188404s" begin="-0.12077294685990336s" repeatCount="indefinite"></animate>
        </rect>
        </g><g transform="rotate(330 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#1c67d3">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.4492753623188404s" begin="0s" repeatCount="indefinite"></animate>
        </rect>
        </g></svg>
      </div>
    </div>
  );
}