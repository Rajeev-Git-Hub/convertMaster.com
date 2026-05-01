'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { FiArrowRight, FiDroplet, FiMaximize, FiPackage, FiThermometer, FiDatabase, FiTrendingUp, FiPercent, FiSearch, FiClock, FiActivity, FiAnchor, FiGitCommit, FiSave, FiCheckCircle, FiZap, FiShield, FiUsers } from 'react-icons/fi';
import ConverterCard from '@/components/ConverterCard';

const converterCategories = [
  {
    title: 'Length Converters',
    description: 'Convert between meters, kilometers, feet, inches, yards, and more instantly.',
    icon: FiMaximize,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50 dark:bg-gray-900/20',
    converters: [
      { name: 'CM to Inches', href: '/cm-to-inches', popular: true },
      { name: 'Inches to CM', href: '/inches-to-cm' },
      { name: 'Meters to Feet', href: '/meters-to-feet', popular: true },
      { name: 'Feet to Meters', href: '/feet-to-meters' },
      { name: 'KM to Miles', href: '/km-to-miles', popular: true },
      { name: 'Miles to KM', href: '/miles-to-km' },
      { name: 'MM to Inches', href: '/mm-to-inches' },
      { name: 'Inches to MM', href: '/inches-to-mm' },
      { name: 'Yards to Meters', href: '/yards-to-meters' },
      { name: 'Meters to Yards', href: '/meters-to-yards' },
      { name: 'Feet to Inches', href: '/feet-to-inches' },
      { name: 'Inches to Feet', href: '/inches-to-feet' },
      { name: 'CM to Feet', href: '/cm-to-feet' },
      { name: 'Feet to CM', href: '/feet-to-cm' },
      { name: 'KM to Meters', href: '/km-to-meters' },
      { name: 'Meters to KM', href: '/meters-to-km' },
      { name: 'm to MM', href: '/micrometers-to-mm' },
      { name: 'MM to m', href: '/mm-to-micrometers' },
      { name: 'nm to m', href: '/nm-to-micrometers' },
      { name: 'DM to CM', href: '/dm-to-cm' },
      { name: 'CM to DM', href: '/cm-to-dm' },
      { name: 'DAM to Meters', href: '/dam-to-meters' },
      { name: 'Meters to DAM', href: '/meters-to-dam' },
      { name: 'HM to Meters', href: '/hm-to-meters' },
      { name: 'Meters to HM', href: '/meters-to-hm' },
      { name: 'Meters to CM', href: '/meters-to-cm' },
      { name: 'Meters to MM', href: '/meters-to-mm' },
      { name: 'Meters to m', href: '/meters-to-micrometers' },
      { name: 'Meters to nm', href: '/meters-to-nm' },
      { name: 'Meters to DM', href: '/meters-to-dm' },
      { name: 'Meters to Inches', href: '/meters-to-inches' },
      { name: 'Meters to Miles', href: '/meters-to-miles' },
      { name: 'KM to CM', href: '/km-to-cm' },
      { name: 'KM to MM', href: '/km-to-mm' },
      { name: 'KM to m', href: '/km-to-micrometers' },
      { name: 'KM to nm', href: '/km-to-nm' },
      { name: 'KM to DM', href: '/km-to-dm' },
      { name: 'KM to DAM', href: '/km-to-dam' },
      { name: 'KM to HM', href: '/km-to-hm' },
      { name: 'KM to Inches', href: '/km-to-inches' },
      { name: 'KM to Feet', href: '/km-to-feet' },
      { name: 'KM to Yards', href: '/km-to-yards' },
      { name: 'CM to MM', href: '/cm-to-mm' },
      { name: 'CM to m', href: '/cm-to-micrometers' },
      { name: 'CM to nm', href: '/cm-to-nm' },
      { name: 'CM to DAM', href: '/cm-to-dam' },
      { name: 'CM to HM', href: '/cm-to-hm' },
      { name: 'CM to Yards', href: '/cm-to-yards' },
      { name: 'CM to Miles', href: '/cm-to-miles' },
      { name: 'MM to nm', href: '/mm-to-nm' },
      { name: 'MM to DM', href: '/mm-to-dm' },
      { name: 'MM to DAM', href: '/mm-to-dam' },
      { name: 'MM to HM', href: '/mm-to-hm' },
      { name: 'MM to Feet', href: '/mm-to-feet' },
      { name: 'MM to Yards', href: '/mm-to-yards' },
      { name: 'MM to Miles', href: '/mm-to-miles' },
      { name: 'm to nm', href: '/micrometers-to-nm' },
      { name: 'm to DM', href: '/micrometers-to-dm' },
      { name: 'm to DAM', href: '/micrometers-to-dam' },
      { name: 'm to HM', href: '/micrometers-to-hm' },
      { name: 'm to Inches', href: '/micrometers-to-inches' },
      { name: 'm to Feet', href: '/micrometers-to-feet' },
      { name: 'm to Yards', href: '/micrometers-to-yards' },
      { name: 'm to Miles', href: '/micrometers-to-miles' },
      { name: 'nm to DM', href: '/nm-to-dm' },
      { name: 'nm to DAM', href: '/nm-to-dam' },
      { name: 'nm to HM', href: '/nm-to-hm' },
      { name: 'nm to Inches', href: '/nm-to-inches' },
      { name: 'nm to Feet', href: '/nm-to-feet' },
      { name: 'nm to Yards', href: '/nm-to-yards' },
      { name: 'nm to Miles', href: '/nm-to-miles' },
      { name: 'DM to MM', href: '/dm-to-mm' },
      { name: 'DM to m', href: '/dm-to-micrometers' },
      { name: 'DM to nm', href: '/dm-to-nm' },
      { name: 'DM to DAM', href: '/dm-to-dam' },
      { name: 'DM to HM', href: '/dm-to-hm' },
      { name: 'DM to Inches', href: '/dm-to-inches' },
      { name: 'DM to Feet', href: '/dm-to-feet' },
      { name: 'DM to Yards', href: '/dm-to-yards' },
      { name: 'DM to Miles', href: '/dm-to-miles' },
      { name: 'DAM to CM', href: '/dam-to-cm' },
      { name: 'DAM to MM', href: '/dam-to-mm' },
      { name: 'DAM to m', href: '/dam-to-micrometers' },
      { name: 'DAM to nm', href: '/dam-to-nm' },
      { name: 'DAM to DM', href: '/dam-to-dm' },
      { name: 'DAM to HM', href: '/dam-to-hm' },
      { name: 'DAM to Inches', href: '/dam-to-inches' },
      { name: 'DAM to Feet', href: '/dam-to-feet' },
      { name: 'DAM to Yards', href: '/dam-to-yards' },
      { name: 'DAM to Miles', href: '/dam-to-miles' },
      { name: 'HM to CM', href: '/hm-to-cm' },
      { name: 'HM to MM', href: '/hm-to-mm' },
      { name: 'HM to m', href: '/hm-to-micrometers' },
      { name: 'HM to nm', href: '/hm-to-nm' },
      { name: 'HM to DM', href: '/hm-to-dm' },
      { name: 'HM to Inches', href: '/hm-to-inches' },
      { name: 'HM to Feet', href: '/hm-to-feet' },
      { name: 'HM to Yards', href: '/hm-to-yards' },
      { name: 'HM to Miles', href: '/hm-to-miles' },
      { name: 'Inches to DM', href: '/inches-to-dm' },
      { name: 'Inches to DAM', href: '/inches-to-dam' },
      { name: 'Inches to Yards', href: '/inches-to-yards' },
      { name: 'Inches to Miles', href: '/inches-to-miles' },
      { name: 'Feet to Yards', href: '/feet-to-yards' },
      { name: 'Feet to Miles', href: '/feet-to-miles' },
      { name: 'Yards to Miles', href: '/yards-to-miles' },
      { name: 'CM to KM', href: '/cm-to-km' },
      { name: 'CM to Meters', href: '/cm-to-meters' },
      { name: 'DAM to KM', href: '/dam-to-km' },
      { name: 'DM to KM', href: '/dm-to-km' },
      { name: 'DM to Meters', href: '/dm-to-meters' },
      { name: 'Feet to DAM', href: '/feet-to-dam' },
      { name: 'Feet to DM', href: '/feet-to-dm' },
      { name: 'Feet to HM', href: '/feet-to-hm' },
      { name: 'Feet to KM', href: '/feet-to-km' },
      { name: 'Feet to Micrometers', href: '/feet-to-micrometers' },
      { name: 'Feet to MM', href: '/feet-to-mm' },
      { name: 'Feet to NM', href: '/feet-to-nm' },
      { name: 'HM to DAM', href: '/hm-to-dam' },
      { name: 'HM to KM', href: '/hm-to-km' },
      { name: 'Inches to KM', href: '/inches-to-km' },
      { name: 'Inches to Meters', href: '/inches-to-meters' },
      { name: 'Inches to Micrometers', href: '/inches-to-micrometers' },
      { name: 'Inches to NM', href: '/inches-to-nm' },
      { name: 'Micrometers to CM', href: '/micrometers-to-cm' },
      { name: 'Micrometers to KM', href: '/micrometers-to-km' },
      { name: 'Micrometers to Meters', href: '/micrometers-to-meters' },
      { name: 'Miles to CM', href: '/miles-to-cm' },
      { name: 'Miles to DAM', href: '/miles-to-dam' },
      { name: 'Miles to DM', href: '/miles-to-dm' },
      { name: 'Miles to Feet', href: '/miles-to-feet' },
      { name: 'Miles to HM', href: '/miles-to-hm' },
      { name: 'Miles to Inches', href: '/miles-to-inches' },
      { name: 'Miles to Meters', href: '/miles-to-meters' },
      { name: 'Miles to Micrometers', href: '/miles-to-micrometers' },
      { name: 'Miles to MM', href: '/miles-to-mm' },
      { name: 'Miles to NM', href: '/miles-to-nm' },
      { name: 'Miles to Yards', href: '/miles-to-yards' },
      { name: 'MM to CM', href: '/mm-to-cm' },
      { name: 'MM to KM', href: '/mm-to-km' },
      { name: 'MM to Meters', href: '/mm-to-meters' },
      { name: 'NM to CM', href: '/nm-to-cm' },
      { name: 'NM to KM', href: '/nm-to-km' },
      { name: 'NM to Meters', href: '/nm-to-meters' },
      { name: 'NM to MM', href: '/nm-to-mm' },
      { name: 'Yards to CM', href: '/yards-to-cm' },
      { name: 'Yards to DAM', href: '/yards-to-dam' },
      { name: 'Yards to DM', href: '/yards-to-dm' },
      { name: 'Yards to Feet', href: '/yards-to-feet' },
      { name: 'Yards to HM', href: '/yards-to-hm' },
      { name: 'Yards to Inches', href: '/yards-to-inches' },
      { name: 'Yards to KM', href: '/yards-to-km' },
      { name: 'Yards to Micrometers', href: '/yards-to-micrometers' },
      { name: 'Yards to MM', href: '/yards-to-mm' },
      { name: 'Yards to NM', href: '/yards-to-nm' },
    ]
  },
  {
    title: 'Weight Converters',
    description: 'Convert kilograms, pounds, ounces, grams, stones, and tons easily.',
    icon: FiPackage,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50 dark:bg-gray-900/20',
    converters: [
      { name: 'KG to Pound/LBS', href: '/kg-to-lbs', popular: true },
      { name: 'Pound/LBS to KG', href: '/lbs-to-kg', popular: true },
      { name: 'Grams to Ounces', href: '/grams-to-ounces' },
      { name: 'Ounces to Grams', href: '/ounces-to-grams' },
      { name: 'KG to Grams', href: '/kg-to-grams' },
      { name: 'Grams to KG', href: '/grams-to-kg' },
      { name: 'Pounds to Ounces', href: '/pounds-to-ounces' },
      { name: 'Ounces to Pounds', href: '/ounces-to-pounds' },
      { name: 'MG to Grams', href: '/mg-to-grams' },
      { name: 'Grams to MG', href: '/grams-to-mg' },
      { name: 'Tons to KG', href: '/tons-to-kg' },
      { name: 'KG to g', href: '/kg-to-g' },
      { name: 'KG to mg', href: '/kg-to-mg' },
      { name: 'KG to g', href: '/kg-to-microg' },
      { name: 'KG to ng', href: '/kg-to-ng' },
      { name: 'KG to Metric Ton', href: '/kg-to-metric-ton' },
      { name: 'KG to Ounce', href: '/kg-to-ounce' },
      { name: 'KG to US Ton', href: '/kg-to-us-ton' },
      { name: 'g to KG', href: '/g-to-kg' },
      { name: 'g to g', href: '/g-to-microg' },
      { name: 'g to ng', href: '/g-to-ng' },
      { name: 'g to Metric Ton', href: '/g-to-metric-ton' },
      { name: 'g to Ounce', href: '/g-to-ounce' },
      { name: 'g to US Ton', href: '/g-to-us-ton' },
      { name: 'mg to KG', href: '/mg-to-kg' },
      { name: 'mg to g', href: '/mg-to-g' },
      { name: 'mg to g', href: '/mg-to-microg' },
      { name: 'mg to ng', href: '/mg-to-ng' },
      { name: 'mg to Metric Ton', href: '/mg-to-metric-ton' },
      { name: 'mg to Pound', href: '/mg-to-pound' },
      { name: 'mg to Ounce', href: '/mg-to-ounce' },
      { name: 'mg to US Ton', href: '/mg-to-us-ton' },
      { name: 'g to KG', href: '/microg-to-kg' },
      { name: 'g to g', href: '/microg-to-g' },
      { name: 'g to mg', href: '/microg-to-mg' },
      { name: 'g to ng', href: '/microg-to-ng' },
      { name: 'g to Metric Ton', href: '/microg-to-metric-ton' },
      { name: 'g to Pound', href: '/microg-to-pound' },
      { name: 'g to Ounce', href: '/microg-to-ounce' },
      { name: 'g to US Ton', href: '/microg-to-us-ton' },
      { name: 'ng to KG', href: '/ng-to-kg' },
      { name: 'ng to g', href: '/ng-to-g' },
      { name: 'ng to mg', href: '/ng-to-mg' },
      { name: 'ng to g', href: '/ng-to-microg' },
      { name: 'ng to Metric Ton', href: '/ng-to-metric-ton' },
      { name: 'ng to Pound', href: '/ng-to-pound' },
      { name: 'ng to Ounce', href: '/ng-to-ounce' },
      { name: 'ng to US Ton', href: '/ng-to-us-ton' },
      { name: 'Metric Ton to KG', href: '/metric-ton-to-kg' },
      { name: 'Metric Ton to g', href: '/metric-ton-to-g' },
      { name: 'Metric Ton to mg', href: '/metric-ton-to-mg' },
      { name: 'Metric Ton to g', href: '/metric-ton-to-microg' },
      { name: 'Metric Ton to ng', href: '/metric-ton-to-ng' },
      { name: 'Metric Ton to Pound', href: '/metric-ton-to-pound' },
      { name: 'Metric Ton to Ounce', href: '/metric-ton-to-ounce' },
      { name: 'Metric Ton to US Ton', href: '/metric-ton-to-us-ton' },
      { name: 'Pound to KG', href: '/pound-to-kg' },
      { name: 'Pound to g', href: '/pound-to-g' },
      { name: 'Pound to mg', href: '/pound-to-mg' },
      { name: 'Pound to g', href: '/pound-to-microg' },
      { name: 'Pound to ng', href: '/pound-to-ng' },
      { name: 'Pound to Metric Ton', href: '/pound-to-metric-ton' },
      { name: 'Pound to Ounce', href: '/pound-to-ounce' },
      { name: 'Pound to US Ton', href: '/pound-to-us-ton' },
      { name: 'Ounce to KG', href: '/ounce-to-kg' },
      { name: 'Ounce to g', href: '/ounce-to-g' },
      { name: 'Ounce to mg', href: '/ounce-to-mg' },
      { name: 'Ounce to g', href: '/ounce-to-microg' },
      { name: 'Ounce to ng', href: '/ounce-to-ng' },
      { name: 'Ounce to Metric Ton', href: '/ounce-to-metric-ton' },
      { name: 'Ounce to Pound', href: '/ounce-to-pound' },
      { name: 'Ounce to US Ton', href: '/ounce-to-us-ton' },
      { name: 'US Ton to KG', href: '/us-ton-to-kg' },
      { name: 'US Ton to g', href: '/us-ton-to-g' },
      { name: 'US Ton to mg', href: '/us-ton-to-mg' },
      { name: 'US Ton to g', href: '/us-ton-to-microg' },
      { name: 'US Ton to ng', href: '/us-ton-to-ng' },
      { name: 'US Ton to Metric Ton', href: '/us-ton-to-metric-ton' },
      { name: 'US Ton to Pound', href: '/us-ton-to-pound' },
      { name: 'US Ton to Ounce', href: '/us-ton-to-ounce' },
    ]
  },
  {
    title: 'Area Converters',
    description: 'Convert square meters, hectares, acres, square feet, and more area units.',
    icon: FiPackage,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50 dark:bg-gray-900/20',
    converters: [
      { name: 'm² to km²', href: '/m2-to-km2' },
      { name: 'm² to cm²', href: '/m2-to-cm2' },
      { name: 'm² to mm²', href: '/m2-to-mm2' },
      { name: 'm² to in²', href: '/m2-to-in2' },
      { name: 'm² to ft²', href: '/m2-to-ft2', popular: true },
      { name: 'm² to yd²', href: '/m2-to-yd2' },
      { name: 'm² to mi²', href: '/m2-to-mi2' },
      { name: 'm² to hectare', href: '/m2-to-hectare' },
      { name: 'm² to acre', href: '/m2-to-acre' },
      { name: 'km² to m²', href: '/km2-to-m2' },
      { name: 'km² to cm²', href: '/km2-to-cm2' },
      { name: 'km² to mm²', href: '/km2-to-mm2' },
      { name: 'km² to in²', href: '/km2-to-in2' },
      { name: 'km² to ft²', href: '/km2-to-ft2' },
      { name: 'km² to yd²', href: '/km2-to-yd2' },
      { name: 'km² to mi²', href: '/km2-to-mi2' },
      { name: 'km² to hectare', href: '/km2-to-hectare' },
      { name: 'km² to acre', href: '/km2-to-acre' },
      { name: 'cm² to m²', href: '/cm2-to-m2' },
      { name: 'cm² to km²', href: '/cm2-to-km2' },
      { name: 'cm² to mm²', href: '/cm2-to-mm2' },
      { name: 'cm² to in²', href: '/cm2-to-in2' },
      { name: 'cm² to ft²', href: '/cm2-to-ft2' },
      { name: 'cm² to yd²', href: '/cm2-to-yd2' },
      { name: 'cm² to mi²', href: '/cm2-to-mi2' },
      { name: 'cm² to hectare', href: '/cm2-to-hectare' },
      { name: 'cm² to acre', href: '/cm2-to-acre' },
      { name: 'mm² to m²', href: '/mm2-to-m2' },
      { name: 'mm² to km²', href: '/mm2-to-km2' },
      { name: 'mm² to cm²', href: '/mm2-to-cm2' },
      { name: 'mm² to in²', href: '/mm2-to-in2' },
      { name: 'mm² to ft²', href: '/mm2-to-ft2' },
      { name: 'mm² to yd²', href: '/mm2-to-yd2' },
      { name: 'mm² to mi²', href: '/mm2-to-mi2' },
      { name: 'mm² to hectare', href: '/mm2-to-hectare' },
      { name: 'mm² to acre', href: '/mm2-to-acre' },
      { name: 'in² to m²', href: '/in2-to-m2' },
      { name: 'in² to km²', href: '/in2-to-km2' },
      { name: 'in² to cm²', href: '/in2-to-cm2' },
      { name: 'in² to mm²', href: '/in2-to-mm2' },
      { name: 'in² to ft²', href: '/in2-to-ft2' },
      { name: 'in² to yd²', href: '/in2-to-yd2' },
      { name: 'in² to mi²', href: '/in2-to-mi2' },
      { name: 'in² to hectare', href: '/in2-to-hectare' },
      { name: 'in² to acre', href: '/in2-to-acre' },
      { name: 'ft² to m²', href: '/ft2-to-m2', popular: true },
      { name: 'ft² to km²', href: '/ft2-to-km2' },
      { name: 'ft² to cm²', href: '/ft2-to-cm2' },
      { name: 'ft² to mm²', href: '/ft2-to-mm2' },
      { name: 'ft² to in²', href: '/ft2-to-in2' },
      { name: 'ft² to yd²', href: '/ft2-to-yd2' },
      { name: 'ft² to mi²', href: '/ft2-to-mi2' },
      { name: 'ft² to hectare', href: '/ft2-to-hectare' },
      { name: 'ft² to acre', href: '/ft2-to-acre' },
      { name: 'yd² to m²', href: '/yd2-to-m2' },
      { name: 'yd² to km²', href: '/yd2-to-km2' },
      { name: 'yd² to cm²', href: '/yd2-to-cm2' },
      { name: 'yd² to mm²', href: '/yd2-to-mm2' },
      { name: 'yd² to in²', href: '/yd2-to-in2' },
      { name: 'yd² to ft²', href: '/yd2-to-ft2' },
      { name: 'yd² to mi²', href: '/yd2-to-mi2' },
      { name: 'yd² to hectare', href: '/yd2-to-hectare' },
      { name: 'yd² to acre', href: '/yd2-to-acre' },
      { name: 'mi² to m²', href: '/mi2-to-m2' },
      { name: 'mi² to km²', href: '/mi2-to-km2' },
      { name: 'mi² to cm²', href: '/mi2-to-cm2' },
      { name: 'mi² to mm²', href: '/mi2-to-mm2' },
      { name: 'mi² to in²', href: '/mi2-to-in2' },
      { name: 'mi² to ft²', href: '/mi2-to-ft2' },
      { name: 'mi² to yd²', href: '/mi2-to-yd2' },
      { name: 'mi² to hectare', href: '/mi2-to-hectare' },
      { name: 'mi² to acre', href: '/mi2-to-acre' },
      { name: 'hectare to m²', href: '/hectare-to-m2' },
      { name: 'hectare to km²', href: '/hectare-to-km2' },
      { name: 'hectare to cm²', href: '/hectare-to-cm2' },
      { name: 'hectare to mm²', href: '/hectare-to-mm2' },
      { name: 'hectare to in²', href: '/hectare-to-in2' },
      { name: 'hectare to ft²', href: '/hectare-to-ft2' },
      { name: 'hectare to yd²', href: '/hectare-to-yd2' },
      { name: 'hectare to mi²', href: '/hectare-to-mi2' },
      { name: 'hectare to acre', href: '/hectare-to-acre', popular: true },
      { name: 'acre to m²', href: '/acre-to-m2', popular: true },
      { name: 'acre to km²', href: '/acre-to-km2' },
      { name: 'acre to cm²', href: '/acre-to-cm2' },
      { name: 'acre to mm²', href: '/acre-to-mm2' },
      { name: 'acre to in²', href: '/acre-to-in2' },
      { name: 'acre to ft²', href: '/acre-to-ft2' },
      { name: 'acre to yd²', href: '/acre-to-yd2' },
      { name: 'acre to mi²', href: '/acre-to-mi2' },
      { name: 'acre to hectare', href: '/acre-to-hectare', popular: true },
    ]
  },
  {
    title: 'Volume Converters',
    description: 'Convert liters, gallons, cubic meters, fluid ounces, and more volume units.',
    icon: FiDroplet,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50 dark:bg-gray-900/20',
    converters: [
      { name: 'L to mL', href: '/liter-to-ml' },
      { name: 'L to m³', href: '/liter-to-m3' },
      { name: 'L to cm³', href: '/liter-to-cm3' },
      { name: 'L to ft³', href: '/liter-to-ft3' },
      { name: 'L to in³', href: '/liter-to-in3' },
      { name: 'L to gal', href: '/liter-to-gallon', popular: true },
      { name: 'L to fl oz', href: '/liter-to-floz' },
      { name: 'mL to L', href: '/ml-to-liter' },
      { name: 'mL to m³', href: '/ml-to-m3' },
      { name: 'mL to cm³', href: '/ml-to-cm3' },
      { name: 'mL to ft³', href: '/ml-to-ft3' },
      { name: 'mL to in³', href: '/ml-to-in3' },
      { name: 'mL to gal', href: '/ml-to-gallon' },
      { name: 'mL to fl oz', href: '/ml-to-floz' },
      { name: 'm³ to L', href: '/m3-to-liter' },
      { name: 'm³ to mL', href: '/m3-to-ml' },
      { name: 'm³ to cm³', href: '/m3-to-cm3' },
      { name: 'm³ to ft³', href: '/m3-to-ft3' },
      { name: 'm³ to in³', href: '/m3-to-in3' },
      { name: 'm³ to gal', href: '/m3-to-gallon' },
      { name: 'm³ to fl oz', href: '/m3-to-floz' },
      { name: 'cm³ to L', href: '/cm3-to-liter' },
      { name: 'cm³ to mL', href: '/cm3-to-ml' },
      { name: 'cm³ to m³', href: '/cm3-to-m3' },
      { name: 'cm³ to ft³', href: '/cm3-to-ft3' },
      { name: 'cm³ to in³', href: '/cm3-to-in3' },
      { name: 'cm³ to gal', href: '/cm3-to-gallon' },
      { name: 'cm³ to fl oz', href: '/cm3-to-floz' },
      { name: 'ft³ to L', href: '/ft3-to-liter' },
      { name: 'ft³ to mL', href: '/ft3-to-ml' },
      { name: 'ft³ to m³', href: '/ft3-to-m3' },
      { name: 'ft³ to cm³', href: '/ft3-to-cm3' },
      { name: 'ft³ to in³', href: '/ft3-to-in3' },
      { name: 'ft³ to gal', href: '/ft3-to-gallon' },
      { name: 'ft³ to fl oz', href: '/ft3-to-floz' },
      { name: 'in³ to L', href: '/in3-to-liter' },
      { name: 'in³ to mL', href: '/in3-to-ml' },
      { name: 'in³ to m³', href: '/in3-to-m3' },
      { name: 'in³ to cm³', href: '/in3-to-cm3' },
      { name: 'in³ to ft³', href: '/in3-to-ft3' },
      { name: 'in³ to gal', href: '/in3-to-gallon' },
      { name: 'in³ to fl oz', href: '/in3-to-floz' },
      { name: 'gal to L', href: '/gallon-to-liter', popular: true },
      { name: 'gal to mL', href: '/gallon-to-ml' },
      { name: 'gal to m³', href: '/gallon-to-m3' },
      { name: 'gal to cm³', href: '/gallon-to-cm3' },
      { name: 'gal to ft³', href: '/gallon-to-ft3' },
      { name: 'gal to in³', href: '/gallon-to-in3' },
      { name: 'gal to fl oz', href: '/gallon-to-floz' },
      { name: 'fl oz to L', href: '/floz-to-liter' },
      { name: 'fl oz to mL', href: '/floz-to-ml' },
      { name: 'fl oz to m³', href: '/floz-to-m3' },
      { name: 'fl oz to cm³', href: '/floz-to-cm3' },
      { name: 'fl oz to ft³', href: '/floz-to-ft3' },
      { name: 'fl oz to in³', href: '/floz-to-in3' },
      { name: 'fl oz to gal', href: '/floz-to-gallon' },
    ]
  },
  {
    title: 'Temperature Converters',
    description: 'Convert between Celsius, Fahrenheit, Kelvin, Rankine, and Réaumur temperature scales.',
    icon: FiThermometer,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50 dark:bg-gray-900/20',
    converters: [
      // Celsius conversions
      { name: 'Celsius to Fahrenheit', href: '/celsius-to-fahrenheit', popular: true },
      { name: 'Celsius to Kelvin', href: '/celsius-to-kelvin' },
      { name: 'Celsius to Rankine', href: '/celsius-to-rankine' },
      { name: 'Celsius to Réaumur', href: '/celsius-to-reaumur' },
      // Fahrenheit conversions
      { name: 'Fahrenheit to Celsius', href: '/fahrenheit-to-celsius', popular: true },
      { name: 'Fahrenheit to Kelvin', href: '/fahrenheit-to-kelvin' },
      { name: 'Fahrenheit to Rankine', href: '/fahrenheit-to-rankine' },
      { name: 'Fahrenheit to Réaumur', href: '/fahrenheit-to-reaumur' },
      // Kelvin conversions
      { name: 'Kelvin to Celsius', href: '/kelvin-to-celsius' },
      { name: 'Kelvin to Fahrenheit', href: '/kelvin-to-fahrenheit' },
      { name: 'Kelvin to Rankine', href: '/kelvin-to-rankine' },
      { name: 'Kelvin to Réaumur', href: '/kelvin-to-reaumur' },
      // Rankine conversions
      { name: 'Rankine to Celsius', href: '/rankine-to-celsius' },
      { name: 'Rankine to Fahrenheit', href: '/rankine-to-fahrenheit' },
      { name: 'Rankine to Kelvin', href: '/rankine-to-kelvin' },
      { name: 'Rankine to Réaumur', href: '/rankine-to-reaumur' },
      // Réaumur conversions
      { name: 'Réaumur to Celsius', href: '/reaumur-to-celsius' },
      { name: 'Réaumur to Fahrenheit', href: '/reaumur-to-fahrenheit' },
      { name: 'Réaumur to Kelvin', href: '/reaumur-to-kelvin' },
      { name: 'Réaumur to Rankine', href: '/reaumur-to-rankine' },
      // Special guides
      { name: '37°C to Fahrenheit', href: '/37-celsius-to-fahrenheit' },
      { name: '100°C to Fahrenheit', href: '/100-celsius-to-fahrenheit' },
      { name: 'Room Temperature Guide', href: '/room-temperature' },
      { name: 'Body Temperature Guide', href: '/body-temperature-fahrenheit' },
    ]
  },
  {
    title: 'Time Converters',
    description: 'Convert between seconds, minutes, hours, days, weeks, years, milliseconds, microseconds, and nanoseconds instantly.',
    icon: FiClock,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    converters: [
      // Second conversions
      { name: 'Seconds to Minutes', href: '/second-to-minute', popular: true },
      { name: 'Seconds to Hours', href: '/second-to-hour' },
      { name: 'Seconds to Days', href: '/second-to-day' },
      { name: 'Seconds to Weeks', href: '/second-to-week' },
      { name: 'Seconds to Years', href: '/second-to-year' },
      { name: 'Seconds to Milliseconds', href: '/second-to-millisecond' },
      { name: 'Seconds to Microseconds', href: '/second-to-microsecond' },
      { name: 'Seconds to Nanoseconds', href: '/second-to-nanosecond' },
      // Minute conversions
      { name: 'Minutes to Seconds', href: '/minute-to-second', popular: true },
      { name: 'Minutes to Hours', href: '/minute-to-hour', popular: true },
      { name: 'Minutes to Days', href: '/minute-to-day' },
      { name: 'Minutes to Weeks', href: '/minute-to-week' },
      { name: 'Minutes to Years', href: '/minute-to-year' },
      { name: 'Minutes to Milliseconds', href: '/minute-to-millisecond' },
      { name: 'Minutes to Microseconds', href: '/minute-to-microsecond' },
      { name: 'Minutes to Nanoseconds', href: '/minute-to-nanosecond' },
      // Hour conversions
      { name: 'Hours to Seconds', href: '/hour-to-second' },
      { name: 'Hours to Minutes', href: '/hour-to-minute' },
      { name: 'Hours to Days', href: '/hour-to-day', popular: true },
      { name: 'Hours to Weeks', href: '/hour-to-week' },
      { name: 'Hours to Years', href: '/hour-to-year' },
      { name: 'Hours to Milliseconds', href: '/hour-to-millisecond' },
      { name: 'Hours to Microseconds', href: '/hour-to-microsecond' },
      { name: 'Hours to Nanoseconds', href: '/hour-to-nanosecond' },
      // Day conversions
      { name: 'Days to Seconds', href: '/day-to-second' },
      { name: 'Days to Minutes', href: '/day-to-minute' },
      { name: 'Days to Hours', href: '/day-to-hour', popular: true },
      { name: 'Days to Weeks', href: '/day-to-week' },
      { name: 'Days to Years', href: '/day-to-year' },
      { name: 'Days to Milliseconds', href: '/day-to-millisecond' },
      { name: 'Days to Microseconds', href: '/day-to-microsecond' },
      { name: 'Days to Nanoseconds', href: '/day-to-nanosecond' },
      // Week conversions
      { name: 'Weeks to Seconds', href: '/week-to-second' },
      { name: 'Weeks to Minutes', href: '/week-to-minute' },
      { name: 'Weeks to Hours', href: '/week-to-hour' },
      { name: 'Weeks to Days', href: '/week-to-day', popular: true },
      { name: 'Weeks to Years', href: '/week-to-year' },
      { name: 'Weeks to Milliseconds', href: '/week-to-millisecond' },
      { name: 'Weeks to Microseconds', href: '/week-to-microsecond' },
      { name: 'Weeks to Nanoseconds', href: '/week-to-nanosecond' },
      // Year conversions
      { name: 'Years to Seconds', href: '/year-to-second' },
      { name: 'Years to Minutes', href: '/year-to-minute' },
      { name: 'Years to Hours', href: '/year-to-hour' },
      { name: 'Years to Days', href: '/year-to-day', popular: true },
      { name: 'Years to Weeks', href: '/year-to-week' },
      { name: 'Years to Milliseconds', href: '/year-to-millisecond' },
      { name: 'Years to Microseconds', href: '/year-to-microsecond' },
      { name: 'Years to Nanoseconds', href: '/year-to-nanosecond' },
      // Millisecond conversions
      { name: 'Milliseconds to Seconds', href: '/millisecond-to-second', popular: true },
      { name: 'Milliseconds to Minutes', href: '/millisecond-to-minute' },
      { name: 'Milliseconds to Hours', href: '/millisecond-to-hour' },
      { name: 'Milliseconds to Days', href: '/millisecond-to-day' },
      { name: 'Milliseconds to Weeks', href: '/millisecond-to-week' },
      { name: 'Milliseconds to Years', href: '/millisecond-to-year' },
      { name: 'Milliseconds to Microseconds', href: '/millisecond-to-microsecond' },
      { name: 'Milliseconds to Nanoseconds', href: '/millisecond-to-nanosecond' },
      // Microsecond conversions
      { name: 'Microseconds to Seconds', href: '/microsecond-to-second' },
      { name: 'Microseconds to Minutes', href: '/microsecond-to-minute' },
      { name: 'Microseconds to Hours', href: '/microsecond-to-hour' },
      { name: 'Microseconds to Days', href: '/microsecond-to-day' },
      { name: 'Microseconds to Weeks', href: '/microsecond-to-week' },
      { name: 'Microseconds to Years', href: '/microsecond-to-year' },
      { name: 'Microseconds to Milliseconds', href: '/microsecond-to-millisecond', popular: true },
      { name: 'Microseconds to Nanoseconds', href: '/microsecond-to-nanosecond' },
      // Nanosecond conversions
      { name: 'Nanoseconds to Seconds', href: '/nanosecond-to-second' },
      { name: 'Nanoseconds to Minutes', href: '/nanosecond-to-minute' },
      { name: 'Nanoseconds to Hours', href: '/nanosecond-to-hour' },
      { name: 'Nanoseconds to Days', href: '/nanosecond-to-day' },
      { name: 'Nanoseconds to Weeks', href: '/nanosecond-to-week' },
      { name: 'Nanoseconds to Years', href: '/nanosecond-to-year' },
      { name: 'Nanoseconds to Milliseconds', href: '/nanosecond-to-millisecond' },
      { name: 'Nanoseconds to Microseconds', href: '/nanosecond-to-microsecond', popular: true },
    ]
  },
  {
    title: 'Speed Converters',
    description: 'Convert km/h, mph, m/s, and speed of light measurements.',
    icon: FiTrendingUp,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50 dark:bg-gray-900/20',
    converters: [
      { name: 'KM/H to MPH', href: '/kmh-to-mph', popular: true },
      { name: 'MPH to KM/H', href: '/mph-to-kmh', popular: true },
      { name: 'KM/H to Meters/sec', href: '/kmh-to-mps' },
      { name: 'Meters/sec to KM/H', href: '/mps-to-kmh' },
      { name: 'MPH to Meters/sec', href: '/mph-to-mps' },
      { name: 'Meters/sec to MPH', href: '/mps-to-mph' },
      { name: 'KM/H to Feet/sec', href: '/kmh-to-fts' },
      { name: 'Feet/sec to KM/H', href: '/fts-to-kmh' },
      { name: 'Meters/sec to Feet/sec', href: '/mps-to-fts' },
      { name: 'Feet/sec to Meters/sec', href: '/fts-to-mps' },
      { name: 'MPH to Feet/sec', href: '/mph-to-fts' },
      { name: 'Feet/sec to MPH', href: '/fts-to-mph' },
      { name: 'Speed of Light to KM/H', href: '/c-to-kmh' },
      { name: 'KM/H to Speed of Light', href: '/kmh-to-c' },
      { name: 'Speed of Light to MPH', href: '/c-to-mph' },
      { name: 'MPH to Speed of Light', href: '/mph-to-c' },
      { name: 'Speed of Light to Meters/sec', href: '/c-to-mps' },
      { name: 'Meters/sec to Speed of Light', href: '/mps-to-c' },
      { name: 'Speed of Light to Feet/sec', href: '/c-to-fts' },
      { name: 'Feet/sec to Speed of Light', href: '/fts-to-c' },
    ]
  },
  {
    title: 'Data Storage Converters',
    description: 'Convert bytes, KB, MB, GB, TB, PB, EB, bits, Kb, Mb, Gb for files, storage, and memory sizes.',
    icon: FiDatabase,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50 dark:bg-gray-900/20',
    converters: [
      // Byte conversions
      { name: 'Bytes to KB', href: '/bytes-to-kb' },
      { name: 'Bytes to MB', href: '/bytes-to-mb' },
      { name: 'Bytes to GB', href: '/bytes-to-gb' },
      { name: 'Bytes to TB', href: '/bytes-to-tb' },
      { name: 'Bytes to PB', href: '/bytes-to-pb' },
      { name: 'Bytes to EB', href: '/bytes-to-eb' },
      { name: 'Bytes to Bit', href: '/bytes-to-bit' },
      { name: 'Bytes to Kb', href: '/bytes-to-kbit' },
      { name: 'Bytes to Mb', href: '/bytes-to-mbit' },
      { name: 'Bytes to Gb', href: '/bytes-to-gbit' },
      // KB conversions
      { name: 'KB to Bytes', href: '/kb-to-bytes' },
      { name: 'KB to MB', href: '/kb-to-mb', popular: true },
      { name: 'KB to GB', href: '/kb-to-gb' },
      { name: 'KB to TB', href: '/kb-to-tb' },
      { name: 'KB to PB', href: '/kb-to-pb' },
      { name: 'KB to EB', href: '/kb-to-eb' },
      { name: 'KB to Bit', href: '/kb-to-bit' },
      { name: 'KB to Kb', href: '/kb-to-kbit' },
      { name: 'KB to Mb', href: '/kb-to-mbit' },
      { name: 'KB to Gb', href: '/kb-to-gbit' },
      // MB conversions
      { name: 'MB to Bytes', href: '/mb-to-bytes' },
      { name: 'MB to KB', href: '/mb-to-kb', popular: true },
      { name: 'MB to GB', href: '/mb-to-gb', popular: true },
      { name: 'MB to TB', href: '/mb-to-tb' },
      { name: 'MB to PB', href: '/mb-to-pb' },
      { name: 'MB to EB', href: '/mb-to-eb' },
      { name: 'MB to Bit', href: '/mb-to-bit' },
      { name: 'MB to Kb', href: '/mb-to-kbit' },
      { name: 'MB to Mb', href: '/mb-to-mbit' },
      { name: 'MB to Gb', href: '/mb-to-gbit' },
      // GB conversions
      { name: 'GB to Bytes', href: '/gb-to-bytes' },
      { name: 'GB to KB', href: '/gb-to-kb' },
      { name: 'GB to MB', href: '/gb-to-mb', popular: true },
      { name: 'GB to TB', href: '/gb-to-tb' },
      { name: 'GB to PB', href: '/gb-to-pb' },
      { name: 'GB to EB', href: '/gb-to-eb' },
      { name: 'GB to Bit', href: '/gb-to-bit' },
      { name: 'GB to Kb', href: '/gb-to-kbit' },
      { name: 'GB to Mb', href: '/gb-to-mbit' },
      { name: 'GB to Gb', href: '/gb-to-gbit' },
      // TB conversions
      { name: 'TB to Bytes', href: '/tb-to-bytes' },
      { name: 'TB to KB', href: '/tb-to-kb' },
      { name: 'TB to MB', href: '/tb-to-mb' },
      { name: 'TB to GB', href: '/tb-to-gb' },
      { name: 'TB to PB', href: '/tb-to-pb' },
      { name: 'TB to EB', href: '/tb-to-eb' },
      { name: 'TB to Bit', href: '/tb-to-bit' },
      { name: 'TB to Kb', href: '/tb-to-kbit' },
      { name: 'TB to Mb', href: '/tb-to-mbit' },
      { name: 'TB to Gb', href: '/tb-to-gbit' },
      // PB conversions
      { name: 'PB to Bytes', href: '/pb-to-bytes' },
      { name: 'PB to KB', href: '/pb-to-kb' },
      { name: 'PB to MB', href: '/pb-to-mb' },
      { name: 'PB to GB', href: '/pb-to-gb' },
      { name: 'PB to EB', href: '/pb-to-eb' },
      { name: 'PB to Bit', href: '/pb-to-bit' },
      { name: 'PB to Kb', href: '/pb-to-kbit' },
      { name: 'PB to Mb', href: '/pb-to-mbit' },
      { name: 'PB to Gb', href: '/pb-to-gbit' },
      // EB conversions
      { name: 'EB to Bytes', href: '/eb-to-bytes' },
      { name: 'EB to KB', href: '/eb-to-kb' },
      { name: 'EB to MB', href: '/eb-to-mb' },
      { name: 'EB to GB', href: '/eb-to-gb' },
      { name: 'EB to TB', href: '/eb-to-tb' },
      { name: 'EB to PB', href: '/eb-to-pb' },
      { name: 'EB to Bit', href: '/eb-to-bit' },
      { name: 'EB to Kb', href: '/eb-to-kbit' },
      { name: 'EB to Mb', href: '/eb-to-mbit' },
      { name: 'EB to Gb', href: '/eb-to-gbit' },
      // Bit conversions
      { name: 'Bit to Bytes', href: '/bit-to-bytes' },
      { name: 'Bit to KB', href: '/bit-to-kb' },
      { name: 'Bit to MB', href: '/bit-to-mb' },
      { name: 'Bit to GB', href: '/bit-to-gb' },
      { name: 'Bit to TB', href: '/bit-to-tb' },
      { name: 'Bit to PB', href: '/bit-to-pb' },
      { name: 'Bit to EB', href: '/bit-to-eb' },
      { name: 'Bit to Kb', href: '/bit-to-kbit' },
      { name: 'Bit to Mb', href: '/bit-to-mbit' },
      { name: 'Bit to Gb', href: '/bit-to-gbit' },
      // Kb conversions
      { name: 'Kb to Bytes', href: '/kbit-to-bytes' },
      { name: 'Kb to KB', href: '/kbit-to-kb' },
      { name: 'Kb to MB', href: '/kbit-to-mb' },
      { name: 'Kb to GB', href: '/kbit-to-gb' },
      { name: 'Kb to TB', href: '/kbit-to-tb' },
      { name: 'Kb to PB', href: '/kbit-to-pb' },
      { name: 'Kb to EB', href: '/kbit-to-eb' },
      { name: 'Kb to Bit', href: '/kbit-to-bit' },
      { name: 'Kb to Mb', href: '/kbit-to-mbit' },
      { name: 'Kb to Gb', href: '/kbit-to-gbit' },
      // Mb conversions
      { name: 'Mb to Bytes', href: '/mbit-to-bytes' },
      { name: 'Mb to KB', href: '/mbit-to-kb' },
      { name: 'Mb to MB', href: '/mbit-to-mb' },
      { name: 'Mb to GB', href: '/mbit-to-gb' },
      { name: 'Mb to TB', href: '/mbit-to-tb' },
      { name: 'Mb to PB', href: '/mbit-to-pb' },
      { name: 'Mb to EB', href: '/mbit-to-eb' },
      { name: 'Mb to Bit', href: '/mbit-to-bit' },
      { name: 'Mb to Kb', href: '/mbit-to-kbit' },
      { name: 'Mb to Gb', href: '/mbit-to-gbit' },
      // Gb conversions
      { name: 'Gb to Bytes', href: '/gbit-to-bytes' },
      { name: 'Gb to KB', href: '/gbit-to-kb' },
      { name: 'Gb to MB', href: '/gbit-to-mb' },
      { name: 'Gb to GB', href: '/gbit-to-gb' },
      { name: 'Gb to TB', href: '/gbit-to-tb' },
      { name: 'Gb to PB', href: '/gbit-to-pb' },
      { name: 'Gb to EB', href: '/gbit-to-eb' },
      { name: 'Gb to Bit', href: '/gbit-to-bit' },
      { name: 'Gb to Kb', href: '/gbit-to-kbit' },
      { name: 'Gb to Mb', href: '/gbit-to-mbit' },
    ]
  },
  {
    title: 'Finance & Percentage Calculators',
    description: 'Calculate interest, ROI, profit margins, discounts, and percentage changes.',
    icon: FiPercent,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50 dark:bg-gray-900/20',
    converters: [
      { name: '% Increase Calculator', href: '/percentage-increase-calculator', popular: true },
      { name: '% Decrease Calculator', href: '/percentage-decrease-calculator' },
      { name: 'Profit Margin Calc', href: '/profit-margin-calculator' },
      { name: 'Simple Interest Calc', href: '/simple-interest-calculator' },
      { name: 'Compound Interest', href: '/compound-interest-calculator' },
      { name: 'BPS to Percentage', href: '/basis-points-to-percentage' },
      { name: '% to Decimal', href: '/percentage-to-decimal' },
      { name: 'ROI Calculator', href: '/roi-calculator', popular: true },
      { name: 'Discount Calculator', href: '/discount-calculator', popular: true },
    ]
  },
];

export default function AllConvertersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = useMemo(() => {
    if (!searchTerm) return converterCategories;
    
    const term = searchTerm.toLowerCase();
    return converterCategories.map(category => ({
      ...category,
      converters: category.converters.filter(conv => 
        conv.name.toLowerCase().includes(term) ||
        category.title.toLowerCase().includes(term)
      )
    })).filter(category => category.converters.length > 0);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">All Unit Converters</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Access our complete directory of free unit converters. Instantly convert length, weight, 
            area, volume, temperature, speed, data storage, and more. Fast, accurate, and SEO-optimized conversion tools 
            for everyday use.
          </p>
        </section>

        {/* Search Bar */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto mt-8">
            <ConverterCard category="length" />
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400"></FiSearch>
              </div>
              <input
                type="text"
                placeholder="Search converters..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input pl-10"
              />
            </div>
          </div>
        </section>

        {/* Popular Converters */}
        {!searchTerm && (
          <section className="mb-12">
            <div className="gradient-border p-8">
              <h3 className="section-title flex items-center justify-center gap-2">
                <FiActivity className="text-gray-500"></FiActivity>
                Popular Converters
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <Link href="/kg-to-lbs" className="card p-6 text-center group">
                  <div className="icon-box icon-box-primary mb-4">
                    <FiAnchor className="w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">KG to LBS</h3>
                  <p className="text-sm text-gray-600">Weight Conversion</p>
                  <div className="flex items-center justify-center text-gray-600 font-medium">
                    <span>Convert now</span>
                    <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
                
                <Link href="/cm-to-inches" className="card p-6 text-center group">
                  <div className="icon-box icon-box-primary mb-4">
                    <FiMaximize className="w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">CM to Inches</h3>
                  <p className="text-sm text-gray-600">Length Conversion</p>
                  <div className="flex items-center justify-center text-gray-600 font-medium">
                    <span>Convert now</span>
                    <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
                
                <Link href="/celsius-to-fahrenheit" className="card p-6 text-center group">
                  <div className="icon-box icon-box-primary mb-4">
                    <FiThermometer className="w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">°C to °F</h3>
                  <p className="text-sm text-gray-600">Temperature</p>
                  <div className="flex items-center justify-center text-gray-600 font-medium">
                    <span>Convert now</span>
                    <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
                
                <Link href="/mb-to-gb" className="card p-6 text-center group">
                  <div className="icon-box icon-box-primary mb-4">
                    <FiDatabase className="w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">MB to GB</h3>
                  <p className="text-sm text-gray-600">Data Storage</p>
                  <div className="flex items-center justify-center text-gray-600 font-medium">
                    <span>Convert now</span>
                    <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Converter Categories */}
        <section className="mb-12">
          <div className="space-y-8">
            {filteredCategories.map((category) => (
              <div key={category.title} className="card p-8">
                <div className="flex items-center mb-6">
                  <div className={`icon-box icon-box-primary ${category.bgColor} ${category.color}`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h2 className="section-title ml-4">{category.title}</h2>
                  <span className="ml-4 badge badge-secondary">
                    {category.converters.length} tools
                  </span>
                </div>
                <p className="text-gray-600 mb-6 ml-16">{category.description}</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.converters.map((converter) => (
                    <Link
                      key={converter.href}
                      href={converter.href}
                      className="group flex items-center justify-between p-4 rounded-xl transition-all duration-200 bg-gray-50 hover:bg-blue-50"
                    >
                      <span className="font-medium text-gray-900 group-hover:text-gray-600 flex items-center gap-2">
                        {converter.name}
                      </span>
                      <FiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-500 transform group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Platform Statistics</h3>
            <p className="section-subtitle">Trusted by professionals worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <div className="metric-label">Unit Converters</div>
              <div className="metric-value">70+</div>
              <div className="metric-change positive">
                <FiArrowRight className="w-3 h-3"></FiArrowRight>
                <span>Available</span>
              </div>
            </div>
            
            <div className="card p-6 text-center">
              <div className="metric-label">Categories</div>
              <div className="metric-value">8</div>
              <div className="metric-change positive">
                <FiArrowRight className="w-3 h-3"></FiArrowRight>
                <span>Comprehensive</span>
              </div>
            </div>
            
            <div className="card p-6 text-center">
              <div className="metric-label">Free to Use</div>
              <div className="metric-value">100%</div>
              <div className="metric-change positive">
                <FiArrowRight className="w-3 h-3"></FiArrowRight>
                <span>Professional</span>
              </div>
            </div>
            
            <div className="card p-6 text-center">
              <div className="metric-label">SEO</div>
              <div className="metric-value">Optimized</div>
              <div className="metric-change positive">
                <FiArrowRight className="w-3 h-3"></FiArrowRight>
                <span>Pages</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Why Choose ConvertMaster?</h3>
            <p className="section-subtitle">Professional features designed for precision and reliability</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4">
                <FiShield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-sm text-gray-600 mb-4">
                Bank-level encryption with GDPR compliance and complete data privacy protection.
              </p>
              <div className="flex items-center justify-center text-gray-600 font-medium">
                <span>Learn more</span>
                <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4" style={{ background: '#6b7280' }}>
                <FiUsers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Global Trust</h3>
              <p className="text-sm text-gray-600 mb-4">
                50M+ active users worldwide trust our platform for accurate, instant conversions.
              </p>
              <div className="flex items-center justify-center text-gray-600 font-medium">
                <span>Learn more</span>
                <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4" style={{ background: '#6b7280' }}>
                <FiZap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-sm text-gray-600 mb-4">
                0.1s response time with instant calculations and real-time results.
              </p>
              <div className="flex items-center justify-center text-gray-600 font-medium">
                <span>Learn more</span>
                <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Link
            href="/"
            className="btn btn-primary"
          >
            <span>Back to Home</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
