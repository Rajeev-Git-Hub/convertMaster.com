'use client';

import { useState, useMemo, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FiArrowRight, FiDroplet, FiMaximize, FiPackage, FiThermometer, FiDatabase, FiTrendingUp, FiPercent, FiSearch, FiClock, FiAnchor, FiType } from 'react-icons/fi';

const converterCategories = [
  {
    title: 'Length Converters',
    description: 'Convert between meters, kilometers, feet, inches, yards, and more instantly.',
    icon: FiMaximize,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    converters: [
      { name: 'cm to inch', href: '/cm-to-inch', popular: true },
      { name: 'inch to cm', href: '/inch-to-cm' },
      { name: 'meter to foot', href: '/meter-to-foot', popular: true },
      { name: 'foot to meter', href: '/foot-to-meter' },
      { name: 'km to mile', href: '/km-to-mile', popular: true },
      { name: 'mile to km', href: '/mile-to-km' },
      { name: 'mm to inch', href: '/mm-to-inch' },
      { name: 'inch to mm', href: '/inch-to-mm' },
      { name: 'yard to meter', href: '/yard-to-meter' },
      { name: 'meter to yard', href: '/meter-to-yard' },
      { name: 'feet to inch', href: '/feet-to-inch' },
      { name: 'inch to feet', href: '/inch-to-feet' },
      { name: 'cm to foot', href: '/cm-to-foot' },
      { name: 'foot to cm', href: '/foot-to-cm' },
      { name: 'km to meter', href: '/km-to-meter' },
      { name: 'meter to km', href: '/meter-to-km' },
      { name: 'meter to mm', href: '/meter-to-mm' },
      { name: 'mm to meter', href: '/mm-to-meter' },
      { name: 'nm to micrometers', href: '/nm-to-micrometers' },
      { name: 'dm to cm', href: '/dm-to-cm' },
      { name: 'cm to dm', href: '/cm-to-dm' },
      { name: 'dam to meter', href: '/dam-to-meter' },
      { name: 'meter to dam', href: '/meter-to-dam' },
      { name: 'hm to meter', href: '/hm-to-meter' },
      { name: 'meter to hm', href: '/meter-to-hm' },
      { name: 'meter to cm', href: '/meter-to-cm' },
            { name: 'meter to micrometers', href: '/meter-to-micrometers' },
      { name: 'meter to nm', href: '/meter-to-nm' },
      { name: 'meter to dm', href: '/meter-to-dm' },
      { name: 'meter to inch', href: '/meter-to-inch' },
      { name: 'meter to mile', href: '/meter-to-mile' },
      { name: 'km to cm', href: '/km-to-cm' },
      { name: 'km to mm', href: '/km-to-mm' },
      { name: 'km to nm', href: '/km-to-nm' },
      { name: 'km to dm', href: '/km-to-dm' },
      { name: 'km to dam', href: '/km-to-dam' },
      { name: 'km to hm', href: '/km-to-hm' },
      { name: 'km to inch', href: '/km-to-inch' },
      { name: 'km to feet', href: '/km-to-feet' },
      { name: 'km to yard', href: '/km-to-yard' },
      { name: 'cm to mm', href: '/cm-to-mm' },
      { name: 'cm to micrometers', href: '/cm-to-micrometers' },
      { name: 'cm to nm', href: '/cm-to-nm' },
      { name: 'cm to dam', href: '/cm-to-dam' },
      { name: 'cm to hm', href: '/cm-to-hm' },
      { name: 'cm to yard', href: '/cm-to-yard' },
      { name: 'cm to mile', href: '/cm-to-mile' },
      { name: 'mm to nm', href: '/mm-to-nm' },
      { name: 'mm to dm', href: '/mm-to-dm' },
      { name: 'mm to dam', href: '/mm-to-dam' },
      { name: 'mm to hm', href: '/mm-to-hm' },
      { name: 'mm to feet', href: '/mm-to-feet' },
      { name: 'mm to yard', href: '/mm-to-yard' },
      { name: 'mm to mile', href: '/mm-to-mile' },
      { name: 'micrometers to nm', href: '/micrometers-to-nm' },
      { name: 'micrometers to dm', href: '/micrometers-to-dm' },
      { name: 'micrometers to dam', href: '/micrometers-to-dam' },
      { name: 'micrometers to hm', href: '/micrometers-to-hm' },
      { name: 'micrometers to inch', href: '/micrometers-to-inch' },
      { name: 'micrometers to feet', href: '/micrometers-to-feet' },
      { name: 'micrometers to yard', href: '/micrometers-to-yard' },
      { name: 'micrometers to mile', href: '/micrometers-to-mile' },
      { name: 'nm to dm', href: '/nm-to-dm' },
      { name: 'nm to dam', href: '/nm-to-dam' },
      { name: 'nm to hm', href: '/nm-to-hm' },
      { name: 'nm to inch', href: '/nm-to-inch' },
      { name: 'nm to feet', href: '/nm-to-feet' },
      { name: 'nm to yard', href: '/nm-to-yard' },
      { name: 'nm to mile', href: '/nm-to-mile' },
      { name: 'dm to mm', href: '/dm-to-mm' },
      { name: 'dm to micrometers', href: '/dm-to-micrometers' },
      { name: 'dm to nm', href: '/dm-to-nm' },
      { name: 'dm to dam', href: '/dm-to-dam' },
      { name: 'dm to hm', href: '/dm-to-hm' },
      { name: 'dm to inch', href: '/dm-to-inch' },
      { name: 'dm to feet', href: '/dm-to-feet' },
      { name: 'dm to yard', href: '/dm-to-yard' },
      { name: 'dm to mile', href: '/dm-to-mile' },
      { name: 'dam to cm', href: '/dam-to-cm' },
      { name: 'dam to mm', href: '/dam-to-mm' },
      { name: 'dam to micrometers', href: '/dam-to-micrometers' },
      { name: 'dam to nm', href: '/dam-to-nm' },
      { name: 'dam to dm', href: '/dam-to-dm' },
      { name: 'dam to hm', href: '/dam-to-hm' },
      { name: 'dam to inch', href: '/dam-to-inch' },
      { name: 'dam to feet', href: '/dam-to-feet' },
      { name: 'dam to yard', href: '/dam-to-yard' },
      { name: 'dam to mile', href: '/dam-to-mile' },
      { name: 'hm to cm', href: '/hm-to-cm' },
      { name: 'hm to mm', href: '/hm-to-mm' },
      { name: 'hm to micrometers', href: '/hm-to-micrometers' },
      { name: 'hm to nm', href: '/hm-to-nm' },
      { name: 'hm to dm', href: '/hm-to-dm' },
      { name: 'hm to inch', href: '/hm-to-inch' },
      { name: 'hm to feet', href: '/hm-to-feet' },
      { name: 'hm to yard', href: '/hm-to-yard' },
      { name: 'hm to mile', href: '/hm-to-mile' },
      { name: 'inch to dm', href: '/inch-to-dm' },
      { name: 'inch to dam', href: '/inch-to-dam' },
      { name: 'inch to yard', href: '/inch-to-yard' },
      { name: 'inch to mile', href: '/inch-to-mile' },
      { name: 'feet to yard', href: '/feet-to-yard' },
      { name: 'feet to mile', href: '/feet-to-mile' },
      { name: 'yard to mile', href: '/yard-to-mile' },
      { name: 'cm to km', href: '/cm-to-km' },
      { name: 'cm to meter', href: '/cm-to-meter' },
      { name: 'dam to km', href: '/dam-to-km' },
      { name: 'dm to km', href: '/dm-to-km' },
      { name: 'dm to meter', href: '/dm-to-meter' },
      { name: 'feet to dam', href: '/feet-to-dam' },
      { name: 'feet to dm', href: '/feet-to-dm' },
      { name: 'feet to hm', href: '/feet-to-hm' },
      { name: 'feet to km', href: '/feet-to-km' },
      { name: 'feet to micrometers', href: '/feet-to-micrometers' },
      { name: 'feet to mm', href: '/feet-to-mm' },
      { name: 'feet to nm', href: '/feet-to-nm' },
      { name: 'hm to dam', href: '/hm-to-dam' },
      { name: 'hm to km', href: '/hm-to-km' },
      { name: 'inch to km', href: '/inch-to-km' },
      { name: 'inch to meter', href: '/inch-to-meter' },
      { name: 'inch to micrometers', href: '/inch-to-micrometers' },
      { name: 'inch to nm', href: '/inch-to-nm' },
      { name: 'micrometers to cm', href: '/micrometers-to-cm' },
      { name: 'micrometers to km', href: '/micrometers-to-km' },
      { name: 'micrometers to meter', href: '/micrometers-to-meter' },
      { name: 'mile to cm', href: '/mile-to-cm' },
      { name: 'mile to dam', href: '/mile-to-dam' },
      { name: 'mile to dm', href: '/mile-to-dm' },
      { name: 'mile to feet', href: '/mile-to-feet' },
      { name: 'mile to hm', href: '/mile-to-hm' },
      { name: 'mile to inch', href: '/mile-to-inch' },
      { name: 'mile to meter', href: '/mile-to-meter' },
      { name: 'mile to micrometers', href: '/mile-to-micrometers' },
      { name: 'mile to mm', href: '/mile-to-mm' },
      { name: 'mile to nm', href: '/mile-to-nm' },
      { name: 'mile to yard', href: '/mile-to-yard' },
      { name: 'mm to cm', href: '/mm-to-cm' },
      { name: 'mm to km', href: '/mm-to-km' },
            { name: 'nm to cm', href: '/nm-to-cm' },
      { name: 'nm to km', href: '/nm-to-km' },
      { name: 'nm to meter', href: '/nm-to-meter' },
      { name: 'nm to mm', href: '/nm-to-mm' },
      { name: 'yard to cm', href: '/yard-to-cm' },
      { name: 'yard to dam', href: '/yard-to-dam' },
      { name: 'yard to dm', href: '/yard-to-dm' },
      { name: 'yard to feet', href: '/yard-to-feet' },
      { name: 'yard to hm', href: '/yard-to-hm' },
      { name: 'yard to inch', href: '/yard-to-inch' },
      { name: 'yard to km', href: '/yard-to-km' },
      { name: 'yard to micrometers', href: '/yard-to-micrometers' },
      { name: 'yard to mm', href: '/yard-to-mm' },
      { name: 'yard to nm', href: '/yard-to-nm' }
    ]
  },
  {
    title: 'Weight Converters',
    description: 'Convert kilograms, pounds, ounces, grams, stones, and tons easily.',
    icon: FiPackage,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    converters: [
      { name: 'kg to pound', href: '/kg-to-pound', popular: true },
      { name: 'pound to kg', href: '/pound-to-kg', popular: true },
      { name: 'g to ounce', href: '/g-to-ounce', popular: true },
      { name: 'ounce to g', href: '/ounce-to-g', popular: true },
      { name: 'kg to g', href: '/kg-to-g', popular: true },
      { name: 'g to kg', href: '/g-to-kg', popular: true },
      { name: 'pound to ounce', href: '/pound-to-ounce', popular: true },
      { name: 'ounce to pound', href: '/ounce-to-pound', popular: true },
      { name: 'mg to g', href: '/mg-to-g', popular: true },
      { name: 'g to mg', href: '/g-to-mg', popular: true },
      { name: 'metric-ton to kg', href: '/metric-ton-to-kg', popular: true },
      { name: 'kg to metric-ton', href: '/kg-to-metric-ton', popular: true },
      { name: 'kg to mg', href: '/kg-to-mg', popular: true },
      { name: 'kg to microg', href: '/kg-to-microg', popular: true },
      { name: 'kg to ng', href: '/kg-to-ng', popular: true },
      { name: 'kg to ounce', href: '/kg-to-ounce', popular: true },
      { name: 'kg to us-ton', href: '/kg-to-us-ton', popular: true },
      { name: 'g to microg', href: '/g-to-microg', popular: true },
      { name: 'g to ng', href: '/g-to-ng', popular: true },
      { name: 'g to metric-ton', href: '/g-to-metric-ton', popular: true },
      { name: 'g to us-ton', href: '/g-to-us-ton', popular: true },
      { name: 'mg to kg', href: '/mg-to-kg', popular: true },
      { name: 'mg to microg', href: '/mg-to-microg', popular: true },
      { name: 'mg to ng', href: '/mg-to-ng', popular: true },
      { name: 'mg to metric-ton', href: '/mg-to-metric-ton', popular: true },
      { name: 'mg to pound', href: '/mg-to-pound', popular: true },
      { name: 'mg to ounce', href: '/mg-to-ounce', popular: true },
      { name: 'mg to us-ton', href: '/mg-to-us-ton', popular: true },
      { name: 'microg to kg', href: '/microg-to-kg', popular: true },
      { name: 'microg to g', href: '/microg-to-g', popular: true },
      { name: 'microg to mg', href: '/microg-to-mg', popular: true },
      { name: 'microg to ng', href: '/microg-to-ng', popular: true },
      { name: 'microg to metric-ton', href: '/microg-to-metric-ton', popular: true },
      { name: 'microg to pound', href: '/microg-to-pound', popular: true },
      { name: 'microg to ounce', href: '/microg-to-ounce', popular: true },
      { name: 'microg to us-ton', href: '/microg-to-us-ton', popular: true },
      { name: 'ng to kg', href: '/ng-to-kg', popular: true },
      { name: 'ng to g', href: '/ng-to-g', popular: true },
      { name: 'ng to mg', href: '/ng-to-mg', popular: true },
      { name: 'ng to microg', href: '/ng-to-microg', popular: true },
      { name: 'ng to metric-ton', href: '/ng-to-metric-ton', popular: true },
      { name: 'ng to pound', href: '/ng-to-pound', popular: true },
      { name: 'ng to ounce', href: '/ng-to-ounce', popular: true },
      { name: 'ng to us-ton', href: '/ng-to-us-ton', popular: true },
      { name: 'metric-ton to g', href: '/metric-ton-to-g', popular: true },
      { name: 'metric-ton to mg', href: '/metric-ton-to-mg', popular: true },
      { name: 'metric-ton to microg', href: '/metric-ton-to-microg', popular: true },
      { name: 'metric-ton to ng', href: '/metric-ton-to-ng', popular: true },
      { name: 'metric-ton to pound', href: '/metric-ton-to-pound', popular: true },
      { name: 'metric-ton to ounce', href: '/metric-ton-to-ounce', popular: true },
      { name: 'metric-ton to us-ton', href: '/metric-ton-to-us-ton', popular: true },
      { name: 'pound to g', href: '/pound-to-g', popular: true },
      { name: 'pound to mg', href: '/pound-to-mg', popular: true },
      { name: 'pound to microg', href: '/pound-to-microg', popular: true },
      { name: 'pound to ng', href: '/pound-to-ng', popular: true },
      { name: 'pound to metric-ton', href: '/pound-to-metric-ton', popular: true },
      { name: 'pound to us-ton', href: '/pound-to-us-ton', popular: true },
      { name: 'ounce to kg', href: '/ounce-to-kg', popular: true },
      { name: 'ounce to mg', href: '/ounce-to-mg', popular: true },
      { name: 'ounce to microg', href: '/ounce-to-microg', popular: true },
      { name: 'ounce to ng', href: '/ounce-to-ng', popular: true },
      { name: 'ounce to metric-ton', href: '/ounce-to-metric-ton', popular: true },
      { name: 'ounce to us-ton', href: '/ounce-to-us-ton', popular: true },
      { name: 'us-ton to kg', href: '/us-ton-to-kg', popular: true },
      { name: 'us-ton to g', href: '/us-ton-to-g', popular: true },
      { name: 'us-ton to mg', href: '/us-ton-to-mg', popular: true },
      { name: 'us-ton to microg', href: '/us-ton-to-microg', popular: true },
      { name: 'us-ton to ng', href: '/us-ton-to-ng', popular: true },
      { name: 'us-ton to metric-ton', href: '/us-ton-to-metric-ton', popular: true },
      { name: 'us-ton to pound', href: '/us-ton-to-pound', popular: true },
      { name: 'us-ton to ounce', href: '/us-ton-to-ounce', popular: true },
    ]
  },
  {
    title: 'Area Converters',
    description: 'Convert square meters, hectares, acres, square feet, and more area units.',
    icon: FiPackage,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
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
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    converters: [
      { name: 'l to ml', href: '/liter-to-ml' },
      { name: 'l to m³', href: '/liter-to-m3' },
      { name: 'l to cm³', href: '/liter-to-cm3' },
      { name: 'l to ft³', href: '/liter-to-ft3' },
      { name: 'l to in³', href: '/liter-to-in3' },
      { name: 'l to gal', href: '/liter-to-gallon', popular: true },
      { name: 'l to fl oz', href: '/liter-to-floz' },
      { name: 'ml to l', href: '/ml-to-liter' },
      { name: 'ml to m³', href: '/ml-to-m3' },
      { name: 'ml to cm³', href: '/ml-to-cm3' },
      { name: 'ml to ft³', href: '/ml-to-ft3' },
      { name: 'ml to in³', href: '/ml-to-in3' },
      { name: 'ml to gal', href: '/ml-to-gallon' },
      { name: 'ml to fl oz', href: '/ml-to-floz' },
      { name: 'm³ to l', href: '/m3-to-liter' },
      { name: 'm³ to ml', href: '/m3-to-ml' },
      { name: 'm³ to cm³', href: '/m3-to-cm3' },
      { name: 'm³ to ft³', href: '/m3-to-ft3' },
      { name: 'm³ to in³', href: '/m3-to-in3' },
      { name: 'm³ to gal', href: '/m3-to-gallon' },
      { name: 'm³ to fl oz', href: '/m3-to-floz' },
      { name: 'cm³ to l', href: '/cm3-to-liter' },
      { name: 'cm³ to ml', href: '/cm3-to-ml' },
      { name: 'cm³ to m³', href: '/cm3-to-m3' },
      { name: 'cm³ to ft³', href: '/cm3-to-ft3' },
      { name: 'cm³ to in³', href: '/cm3-to-in3' },
      { name: 'cm³ to gal', href: '/cm3-to-gallon' },
      { name: 'cm³ to fl oz', href: '/cm3-to-floz' },
      { name: 'ft³ to l', href: '/ft3-to-liter' },
      { name: 'ft³ to ml', href: '/ft3-to-ml' },
      { name: 'ft³ to m³', href: '/ft3-to-m3' },
      { name: 'ft³ to cm³', href: '/ft3-to-cm3' },
      { name: 'ft³ to in³', href: '/ft3-to-in3' },
      { name: 'ft³ to gal', href: '/ft3-to-gallon' },
      { name: 'ft³ to fl oz', href: '/ft3-to-floz' },
      { name: 'in³ to l', href: '/in3-to-liter' },
      { name: 'in³ to ml', href: '/in3-to-ml' },
      { name: 'in³ to m³', href: '/in3-to-m3' },
      { name: 'in³ to cm³', href: '/in3-to-cm3' },
      { name: 'in³ to ft³', href: '/in3-to-ft3' },
      { name: 'in³ to gal', href: '/in3-to-gallon' },
      { name: 'in³ to fl oz', href: '/in3-to-floz' },
      { name: 'gal to l', href: '/gallon-to-liter', popular: true },
      { name: 'gal to ml', href: '/gallon-to-ml' },
      { name: 'gal to m³', href: '/gallon-to-m3' },
      { name: 'gal to cm³', href: '/gallon-to-cm3' },
      { name: 'gal to ft³', href: '/gallon-to-ft3' },
      { name: 'gal to in³', href: '/gallon-to-in3' },
      { name: 'gal to fl oz', href: '/gallon-to-floz' },
      { name: 'fl oz to l', href: '/floz-to-liter' },
      { name: 'fl oz to ml', href: '/floz-to-ml' },
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
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    converters: [
      // Celsius conversions
      { name: 'celsius to fahrenheit', href: '/celsius-to-fahrenheit', popular: true },
      { name: 'celsius to kelvin', href: '/celsius-to-kelvin' },
      { name: 'celsius to rankine', href: '/celsius-to-rankine' },
      { name: 'celsius to reaumur', href: '/celsius-to-reaumur' },
      // Fahrenheit conversions
      { name: 'fahrenheit to celsius', href: '/fahrenheit-to-celsius', popular: true },
      { name: 'fahrenheit to kelvin', href: '/fahrenheit-to-kelvin' },
      { name: 'fahrenheit to rankine', href: '/fahrenheit-to-rankine' },
      { name: 'fahrenheit to reaumur', href: '/fahrenheit-to-reaumur' },
      // Kelvin conversions
      { name: 'kelvin to celsius', href: '/kelvin-to-celsius' },
      { name: 'kelvin to fahrenheit', href: '/kelvin-to-fahrenheit' },
      { name: 'kelvin to rankine', href: '/kelvin-to-rankine' },
      { name: 'kelvin to reaumur', href: '/kelvin-to-reaumur' },
      // Rankine conversions
      { name: 'rankine to celsius', href: '/rankine-to-celsius' },
      { name: 'rankine to fahrenheit', href: '/rankine-to-fahrenheit' },
      { name: 'rankine to kelvin', href: '/rankine-to-kelvin' },
      { name: 'rankine to reaumur', href: '/rankine-to-reaumur' },
      // Réaumur conversions
      { name: 'reaumur to celsius', href: '/reaumur-to-celsius' },
      { name: 'reaumur to fahrenheit', href: '/reaumur-to-fahrenheit' },
      { name: 'reaumur to kelvin', href: '/reaumur-to-kelvin' },
      { name: 'reaumur to rankine', href: '/reaumur-to-rankine' },
      // Special guides
      { name: '37°c to fahrenheit', href: '/37-celsius-to-fahrenheit' },
      { name: '100°c to fahrenheit', href: '/100-celsius-to-fahrenheit' },
      { name: 'room temperature guide', href: '/room-temperature' },
      { name: 'body temperature guide', href: '/body-temperature-fahrenheit' }
    ]
  },
  {
    title: 'Time Converters',
    description: 'Convert between seconds, minutes, hours, days, weeks, years, milliseconds, microseconds, and nanoseconds instantly.',
    icon: FiClock,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
    converters: [
      // Second conversions
      { name: 'seconds to minutes', href: '/second-to-minute', popular: true },
      { name: 'seconds to hours', href: '/second-to-hour' },
      { name: 'seconds to days', href: '/second-to-day' },
      { name: 'seconds to weeks', href: '/second-to-week' },
      { name: 'seconds to years', href: '/second-to-year' },
      { name: 'seconds to milliseconds', href: '/second-to-millisecond' },
      { name: 'seconds to microseconds', href: '/second-to-microsecond' },
      { name: 'seconds to nanoseconds', href: '/second-to-nanosecond' },
      // Minute conversions
      { name: 'minutes to seconds', href: '/minute-to-second', popular: true },
      { name: 'minutes to hours', href: '/minute-to-hour', popular: true },
      { name: 'minutes to days', href: '/minute-to-day' },
      { name: 'minutes to weeks', href: '/minute-to-week' },
      { name: 'minutes to years', href: '/minute-to-year' },
      { name: 'minutes to milliseconds', href: '/minute-to-millisecond' },
      { name: 'minutes to microseconds', href: '/minute-to-microsecond' },
      { name: 'minutes to nanoseconds', href: '/minute-to-nanosecond' },
      // Hour conversions
      { name: 'hours to seconds', href: '/hour-to-second' },
      { name: 'hours to minutes', href: '/hour-to-minute' },
      { name: 'hours to days', href: '/hour-to-day', popular: true },
      { name: 'hours to weeks', href: '/hour-to-week' },
      { name: 'hours to years', href: '/hour-to-year' },
      { name: 'hours to milliseconds', href: '/hour-to-millisecond' },
      { name: 'hours to microseconds', href: '/hour-to-microsecond' },
      { name: 'hours to nanoseconds', href: '/hour-to-nanosecond' },
      // Day conversions
      { name: 'days to seconds', href: '/day-to-second' },
      { name: 'days to minutes', href: '/day-to-minute' },
      { name: 'days to hours', href: '/day-to-hour', popular: true },
      { name: 'days to weeks', href: '/day-to-week' },
      { name: 'days to years', href: '/day-to-year' },
      { name: 'days to milliseconds', href: '/day-to-millisecond' },
      { name: 'days to microseconds', href: '/day-to-microsecond' },
      { name: 'days to nanoseconds', href: '/day-to-nanosecond' },
      // Week conversions
      { name: 'weeks to seconds', href: '/week-to-second' },
      { name: 'weeks to minutes', href: '/week-to-minute' },
      { name: 'weeks to hours', href: '/week-to-hour' },
      { name: 'weeks to days', href: '/week-to-day', popular: true },
      { name: 'weeks to years', href: '/week-to-year' },
      { name: 'weeks to milliseconds', href: '/week-to-millisecond' },
      { name: 'weeks to microseconds', href: '/week-to-microsecond' },
      { name: 'weeks to nanoseconds', href: '/week-to-nanosecond' },
      // Year conversions
      { name: 'years to seconds', href: '/year-to-second' },
      { name: 'years to minutes', href: '/year-to-minute' },
      { name: 'years to hours', href: '/year-to-hour' },
      { name: 'years to days', href: '/year-to-day', popular: true },
      { name: 'years to weeks', href: '/year-to-week' },
      { name: 'years to milliseconds', href: '/year-to-millisecond' },
      { name: 'years to microseconds', href: '/year-to-microsecond' },
      { name: 'years to nanoseconds', href: '/year-to-nanosecond' },
      // Millisecond conversions
      { name: 'milliseconds to seconds', href: '/millisecond-to-second', popular: true },
      { name: 'milliseconds to minutes', href: '/millisecond-to-minute' },
      { name: 'milliseconds to hours', href: '/millisecond-to-hour' },
      { name: 'milliseconds to days', href: '/millisecond-to-day' },
      { name: 'milliseconds to weeks', href: '/millisecond-to-week' },
      { name: 'milliseconds to years', href: '/millisecond-to-year' },
      { name: 'milliseconds to microseconds', href: '/millisecond-to-microsecond' },
      { name: 'milliseconds to nanoseconds', href: '/millisecond-to-nanosecond' },
      // Microsecond conversions
      { name: 'microseconds to seconds', href: '/microsecond-to-second' },
      { name: 'microseconds to minutes', href: '/microsecond-to-minute' },
      { name: 'microseconds to hours', href: '/microsecond-to-hour' },
      { name: 'microseconds to days', href: '/microsecond-to-day' },
      { name: 'microseconds to weeks', href: '/microsecond-to-week' },
      { name: 'microseconds to years', href: '/microsecond-to-year' },
      { name: 'microseconds to milliseconds', href: '/microsecond-to-millisecond', popular: true },
      { name: 'microseconds to nanoseconds', href: '/microsecond-to-nanosecond' },
      // Nanosecond conversions
      { name: 'nanoseconds to seconds', href: '/nanosecond-to-second' },
      { name: 'nanoseconds to minutes', href: '/nanosecond-to-minute' },
      { name: 'nanoseconds to hours', href: '/nanosecond-to-hour' },
      { name: 'nanoseconds to days', href: '/nanosecond-to-day' },
      { name: 'nanoseconds to weeks', href: '/nanosecond-to-week' },
      { name: 'nanoseconds to years', href: '/nanosecond-to-year' },
      { name: 'nanoseconds to milliseconds', href: '/nanosecond-to-millisecond' },
      { name: 'nanoseconds to microseconds', href: '/nanosecond-to-microsecond', popular: true }
    ]
  },
  {
    title: 'Speed Converters',
    description: 'Convert km/h, mph, m/s, and speed of light measurements.',
    icon: FiTrendingUp,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    converters: [
      { name: 'km/h to mph', href: '/kmh-to-mph', popular: true },
      { name: 'mph to km/h', href: '/mph-to-kmh', popular: true },
      { name: 'km/h to m/s', href: '/kmh-to-mps' },
      { name: 'm/s to km/h', href: '/mps-to-kmh' },
      { name: 'mph to m/s', href: '/mph-to-mps' },
      { name: 'm/s to mph', href: '/mps-to-mph' },
      { name: 'km/h to ft/s', href: '/kmh-to-fts' },
      { name: 'ft/s to km/h', href: '/fts-to-kmh' },
      { name: 'm/s to ft/s', href: '/mps-to-fts' },
      { name: 'ft/s to m/s', href: '/fts-to-mps' },
      { name: 'mph to ft/s', href: '/mph-to-fts' },
      { name: 'ft/s to mph', href: '/fts-to-mph' },
      { name: 'speed of light to km/h', href: '/c-to-kmh' },
      { name: 'km/h to speed of light', href: '/kmh-to-c' },
      { name: 'speed of light to mph', href: '/c-to-mph' },
      { name: 'mph to speed of light', href: '/mph-to-c' },
      { name: 'speed of light to m/s', href: '/c-to-mps' },
      { name: 'm/s to speed of light', href: '/mps-to-c' },
      { name: 'speed of light to ft/s', href: '/c-to-fts' },
      { name: 'ft/s to speed of light', href: '/fts-to-c' }
    ]
  },
  {
    title: 'Data Storage Converters',
    description: 'Convert bytes, KB, MB, GB, TB, PB, EB, bits, Kb, Mb, Gb for files, storage, and memory sizes.',
    icon: FiDatabase,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    converters: [
      // Byte conversions
      { name: 'bytes to kb', href: '/bytes-to-kb' },
      { name: 'bytes to mb', href: '/bytes-to-mb' },
      { name: 'bytes to gb', href: '/bytes-to-gb' },
      { name: 'bytes to tb', href: '/bytes-to-tb' },
      { name: 'bytes to pb', href: '/bytes-to-pb' },
      { name: 'bytes to eb', href: '/bytes-to-eb' },
      { name: 'bytes to bit', href: '/bytes-to-bit' },
      { name: 'bytes to kbit', href: '/bytes-to-kbit' },
      { name: 'bytes to mbit', href: '/bytes-to-mbit' },
      { name: 'bytes to gbit', href: '/bytes-to-gbit' },
      // KB conversions
      { name: 'kb to bytes', href: '/kb-to-bytes' },
      { name: 'kb to mb', href: '/kb-to-mb', popular: true },
      { name: 'kb to gb', href: '/kb-to-gb' },
      { name: 'kb to tb', href: '/kb-to-tb' },
      { name: 'kb to pb', href: '/kb-to-pb' },
      { name: 'kb to eb', href: '/kb-to-eb' },
      { name: 'kb to bit', href: '/kb-to-bit' },
      { name: 'kb to kbit', href: '/kb-to-kbit' },
      { name: 'kb to mbit', href: '/kb-to-mbit' },
      { name: 'kb to gbit', href: '/kb-to-gbit' },
      // MB conversions
      { name: 'mb to bytes', href: '/mb-to-bytes' },
      { name: 'mb to kb', href: '/mb-to-kb', popular: true },
      { name: 'mb to gb', href: '/mb-to-gb', popular: true },
      { name: 'mb to tb', href: '/mb-to-tb' },
      { name: 'mb to pb', href: '/mb-to-pb' },
      { name: 'mb to eb', href: '/mb-to-eb' },
      { name: 'mb to bit', href: '/mb-to-bit' },
      { name: 'mb to kbit', href: '/mb-to-kbit' },
      { name: 'mb to mbit', href: '/mb-to-mbit' },
      { name: 'mb to gbit', href: '/mb-to-gbit' },
      // GB conversions
      { name: 'gb to bytes', href: '/gb-to-bytes' },
      { name: 'gb to kb', href: '/gb-to-kb' },
      { name: 'gb to mb', href: '/gb-to-mb', popular: true },
      { name: 'gb to tb', href: '/gb-to-tb' },
      { name: 'gb to pb', href: '/gb-to-pb' },
      { name: 'gb to eb', href: '/gb-to-eb' },
      { name: 'gb to bit', href: '/gb-to-bit' },
      { name: 'gb to kbit', href: '/gb-to-kbit' },
      { name: 'gb to mbit', href: '/gb-to-mbit' },
      { name: 'gb to gbit', href: '/gb-to-gbit' },
      // TB conversions
      { name: 'tb to bytes', href: '/tb-to-bytes' },
      { name: 'tb to kb', href: '/tb-to-kb' },
      { name: 'tb to mb', href: '/tb-to-mb' },
      { name: 'tb to gb', href: '/tb-to-gb' },
      { name: 'tb to pb', href: '/tb-to-pb' },
      { name: 'tb to eb', href: '/tb-to-eb' },
      { name: 'tb to bit', href: '/tb-to-bit' },
      { name: 'tb to kbit', href: '/tb-to-kbit' },
      { name: 'tb to mbit', href: '/tb-to-mbit' },
      { name: 'tb to gbit', href: '/tb-to-gbit' },
      // PB conversions
      { name: 'pb to bytes', href: '/pb-to-bytes' },
      { name: 'pb to kb', href: '/pb-to-kb' },
      { name: 'pb to mb', href: '/pb-to-mb' },
      { name: 'pb to gb', href: '/pb-to-gb' },
      { name: 'pb to eb', href: '/pb-to-eb' },
      { name: 'pb to bit', href: '/pb-to-bit' },
      { name: 'pb to kbit', href: '/pb-to-kbit' },
      { name: 'pb to mbit', href: '/pb-to-mbit' },
      { name: 'pb to gbit', href: '/pb-to-gbit' },
      // EB conversions
      { name: 'eb to bytes', href: '/eb-to-bytes' },
      { name: 'eb to kb', href: '/eb-to-kb' },
      { name: 'eb to mb', href: '/eb-to-mb' },
      { name: 'eb to gb', href: '/eb-to-gb' },
      { name: 'eb to tb', href: '/eb-to-tb' },
      { name: 'eb to pb', href: '/eb-to-pb' },
      { name: 'eb to bit', href: '/eb-to-bit' },
      { name: 'eb to kbit', href: '/eb-to-kbit' },
      { name: 'eb to mbit', href: '/eb-to-mbit' },
      { name: 'eb to gbit', href: '/eb-to-gbit' },
      // Bit conversions
      { name: 'bit to bytes', href: '/bit-to-bytes' },
      { name: 'bit to kb', href: '/bit-to-kb' },
      { name: 'bit to mb', href: '/bit-to-mb' },
      { name: 'bit to gb', href: '/bit-to-gb' },
      { name: 'bit to tb', href: '/bit-to-tb' },
      { name: 'bit to pb', href: '/bit-to-pb' },
      { name: 'bit to eb', href: '/bit-to-eb' },
      { name: 'bit to kbit', href: '/bit-to-kbit' },
      { name: 'bit to mbit', href: '/bit-to-mbit' },
      { name: 'bit to gbit', href: '/bit-to-gbit' },
      // Kb conversions
      { name: 'kbit to bytes', href: '/kbit-to-bytes' },
      { name: 'kbit to kb', href: '/kbit-to-kb' },
      { name: 'kbit to mb', href: '/kbit-to-mb' },
      { name: 'kbit to gb', href: '/kbit-to-gb' },
      { name: 'kbit to tb', href: '/kbit-to-tb' },
      { name: 'kbit to pb', href: '/kbit-to-pb' },
      { name: 'kbit to eb', href: '/kbit-to-eb' },
      { name: 'kbit to bit', href: '/kbit-to-bit' },
      { name: 'kbit to mbit', href: '/kbit-to-mbit' },
      { name: 'kbit to gbit', href: '/kbit-to-gbit' },
      // Mb conversions
      { name: 'mbit to bytes', href: '/mbit-to-bytes' },
      { name: 'mbit to kb', href: '/mbit-to-kb' },
      { name: 'mbit to mb', href: '/mbit-to-mb' },
      { name: 'mbit to gb', href: '/mbit-to-gb' },
      { name: 'mbit to tb', href: '/mbit-to-tb' },
      { name: 'mbit to pb', href: '/mbit-to-pb' },
      { name: 'mbit to eb', href: '/mbit-to-eb' },
      { name: 'mbit to bit', href: '/mbit-to-bit' },
      { name: 'mbit to kbit', href: '/mbit-to-kbit' },
      { name: 'mbit to gbit', href: '/mbit-to-gbit' },
      // Gb conversions
      { name: 'gbit to bytes', href: '/gbit-to-bytes' },
      { name: 'gbit to kb', href: '/gbit-to-kb' },
      { name: 'gbit to mb', href: '/gbit-to-mb' },
      { name: 'gbit to gb', href: '/gbit-to-gb' },
      { name: 'gbit to tb', href: '/gbit-to-tb' },
      { name: 'gbit to pb', href: '/gbit-to-pb' },
      { name: 'gbit to eb', href: '/gbit-to-eb' },
      { name: 'gbit to bit', href: '/gbit-to-bit' },
      { name: 'gbit to kbit', href: '/gbit-to-kbit' },
      { name: 'gbit to mbit', href: '/gbit-to-mbit' }
    ]
  },
  {
    title: 'Finance & Percentage Calculators',
    description: 'Calculate interest, ROI, profit margins, discounts, and percentage changes.',
    icon: FiPercent,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
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
  {
    title: 'Case Converters',
    description: 'Convert text between different cases — sentence case, UPPER CASE, lower case, Title Case, aLtErNaTe, and tOGGLE.',
    icon: FiType,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
    converters: [
      { name: 'Sentence Case', href: '/sentence-case' },
      { name: 'UPPER CASE', href: '/upper-case' },
      { name: 'lower case', href: '/lower-case' },
      { name: 'Title Case', href: '/title-case' },
      { name: 'aLtErNaTe Case', href: '/alternate-case' },
      { name: 'tOGGLE Case', href: '/toggle-case' },
    ]
  },
];

function AllConvertersPage() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const categoriesRef = useRef<HTMLDivElement>(null);

  // Set search from URL on mount
  useEffect(() => {
    const urlSearch = searchParams.get('search');
    if (urlSearch) {
      setSearchTerm(urlSearch);
    }
  }, [searchParams]);

  // Auto-expand all categories when searching and scroll to results
  useEffect(() => {
    if (searchTerm) {
      setExpandedCategories(filteredCategories.map(c => c.title));
      // Scroll to categories section
      categoriesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [searchTerm]);

  const toggleCategory = (title: string) => {
    setExpandedCategories(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

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
          <h1 className="hero-gradient text-4xl font-bold mb-4">All Converters</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Convert anything. Anytime. Anywhere. Transform any measurement in seconds with precision tools 
            designed for professionals and everyday users alike. Stop guessing, start converting — 
            get accurate results in one click.
          </p>
        </section>

        {/* Search Bar */}
        <section className="mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                placeholder="Search converters..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>
        </section>

        {/* Popular Converters */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-2">Popular Converters</h2>
            <p className="text-gray-600">Most used conversion tools</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <Link href="/kg-to-lbs" className="card p-4 text-center group">
                  <div className="icon-box icon-box-primary mb-3">
                    <FiAnchor className="w-8 h-8" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">KG to LBS</h3>
                  <p className="text-xs text-gray-600">Weight</p>
                </Link>
                
                <Link href="/cm-to-inches" className="card p-4 text-center group">
                  <div className="icon-box icon-box-primary mb-3">
                    <FiMaximize className="w-8 h-8" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">CM to Inches</h3>
                  <p className="text-xs text-gray-600">Length</p>
                </Link>
                
                <Link href="/celsius-to-fahrenheit" className="card p-4 text-center group">
                  <div className="icon-box icon-box-primary mb-3">
                    <FiThermometer className="w-8 h-8" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">°C to °F</h3>
                  <p className="text-xs text-gray-600">Temperature</p>
                </Link>
                
                <Link href="/mb-to-gb" className="card p-4 text-center group">
                  <div className="icon-box icon-box-primary mb-3">
                    <FiDatabase className="w-8 h-8" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">MB to GB</h3>
                  <p className="text-xs text-gray-600">Data</p>
                </Link>

                <Link href="/km-to-miles" className="card p-4 text-center group">
                  <div className="icon-box icon-box-primary mb-3">
                    <FiTrendingUp className="w-8 h-8" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">KM to Miles</h3>
                  <p className="text-xs text-gray-600">Distance</p>
                </Link>

                <Link href="/meters-to-feet" className="card p-4 text-center group">
                  <div className="icon-box icon-box-primary mb-3">
                    <FiMaximize className="w-8 h-8" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">M to Feet</h3>
                  <p className="text-xs text-gray-600">Length</p>
                </Link>
              </div>
            </div>
          </section>

        {/* Converter Categories - Collapsible */}
        <section ref={categoriesRef} className="mb-12">
          <div className="space-y-4">
            {filteredCategories.map((category) => {
              const isExpanded = expandedCategories.includes(category.title);
              return (
                <div key={category.title} className="card overflow-hidden">
                  <button
                    onClick={() => toggleCategory(category.title)}
                    className="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className={`p-2 rounded-lg ${category.bgColor} ${category.color}`}>
                        <category.icon className="w-5 h-5" />
                      </div>
                      <h2 className="ml-3 font-semibold text-gray-900 dark:text-white">{category.title}</h2>
                    </div>
                    <div className="text-gray-400">
                      {isExpanded ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </div>
                  </button>
                  
                  {isExpanded && (
                    <div className="px-4 pb-4">
                      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                          {category.converters.map((converter) => (
                            <Link
                              key={converter.href}
                              href={converter.href}
                              className="group flex items-center justify-between px-3 py-2 rounded-md transition-all duration-200 bg-white dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-sm"
                            >
                              <span className="font-medium text-gray-900 dark:text-gray-100">
                                {converter.name}
                              </span>
                              <FiArrowRight className="w-3 h-3 text-gray-400 group-hover:text-blue-500" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}

export default function AllConvertersPageWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center"><div className="text-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div><p className="text-gray-600 dark:text-gray-300">Loading converters...</p></div></div>}>
      <AllConvertersPage />
    </Suspense>
  );
}
