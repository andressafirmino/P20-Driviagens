--
-- PostgreSQL database dump
--

-- Dumped from database version 14.9 (Ubuntu 14.9-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.9 (Ubuntu 14.9-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cities; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cities (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: cities_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cities_id_seq OWNED BY public.cities.id;


--
-- Name: flights; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.flights (
    id integer NOT NULL,
    origin integer NOT NULL,
    destination integer NOT NULL,
    date date
);


--
-- Name: flights_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.flights_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: flights_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.flights_id_seq OWNED BY public.flights.id;


--
-- Name: passengers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.passengers (
    id integer NOT NULL,
    "firstName" text NOT NULL,
    "lastName" text NOT NULL,
    "createAt" timestamp without time zone DEFAULT now()
);


--
-- Name: passengers_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.passengers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: passengers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.passengers_id_seq OWNED BY public.passengers.id;


--
-- Name: travels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.travels (
    id integer NOT NULL,
    "passengerId" integer NOT NULL,
    "flightId" integer NOT NULL
);


--
-- Name: travels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.travels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: travels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.travels_id_seq OWNED BY public.travels.id;


--
-- Name: cities id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cities ALTER COLUMN id SET DEFAULT nextval('public.cities_id_seq'::regclass);


--
-- Name: flights id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.flights ALTER COLUMN id SET DEFAULT nextval('public.flights_id_seq'::regclass);


--
-- Name: passengers id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.passengers ALTER COLUMN id SET DEFAULT nextval('public.passengers_id_seq'::regclass);


--
-- Name: travels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.travels ALTER COLUMN id SET DEFAULT nextval('public.travels_id_seq'::regclass);


--
-- Data for Name: cities; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cities VALUES (1, 'Salvador');
INSERT INTO public.cities VALUES (4, 'Bahia');
INSERT INTO public.cities VALUES (5, 'Rio de Janeiro');
INSERT INTO public.cities VALUES (6, 'São Paulo');


--
-- Data for Name: flights; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.flights VALUES (4, 1, 4, '2022-12-24');
INSERT INTO public.flights VALUES (5, 1, 4, '2022-12-24');
INSERT INTO public.flights VALUES (6, 1, 4, '2022-12-24');
INSERT INTO public.flights VALUES (13, 1, 4, '2022-12-24');
INSERT INTO public.flights VALUES (14, 1, 4, '2022-12-24');
INSERT INTO public.flights VALUES (15, 1, 4, '2021-12-24');
INSERT INTO public.flights VALUES (16, 1, 4, '2024-12-23');
INSERT INTO public.flights VALUES (17, 1, 4, '2024-12-23');
INSERT INTO public.flights VALUES (18, 1, 4, '2023-12-24');
INSERT INTO public.flights VALUES (19, 1, 4, '2023-12-24');
INSERT INTO public.flights VALUES (20, 4, 6, '2023-12-24');
INSERT INTO public.flights VALUES (21, 4, 6, '2023-12-23');
INSERT INTO public.flights VALUES (22, 4, 5, '2023-12-23');
INSERT INTO public.flights VALUES (23, 1, 5, '2023-12-23');


--
-- Data for Name: passengers; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.passengers VALUES (1, 'Joana', 'Alves', '2023-09-07 00:08:50.439246');
INSERT INTO public.passengers VALUES (2, 'Joana', 'Alves 2', '2023-09-10 22:18:55.539476');
INSERT INTO public.passengers VALUES (3, 'Mariana', 'Alves 2', '2023-09-10 23:01:34.900524');
INSERT INTO public.passengers VALUES (4, 'Mariana', 'Joana 2', '2023-09-10 23:06:31.706568');


--
-- Data for Name: travels; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.travels VALUES (1, 1, 4);
INSERT INTO public.travels VALUES (2, 2, 4);
INSERT INTO public.travels VALUES (3, 2, 5);
INSERT INTO public.travels VALUES (4, 3, 5);
INSERT INTO public.travels VALUES (5, 4, 5);


--
-- Name: cities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cities_id_seq', 6, true);


--
-- Name: flights_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.flights_id_seq', 23, true);


--
-- Name: passengers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.passengers_id_seq', 4, true);


--
-- Name: travels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.travels_id_seq', 5, true);


--
-- Name: cities cities_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_name_key UNIQUE (name);


--
-- Name: cities cities_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (id);


--
-- Name: flights flights_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.flights
    ADD CONSTRAINT flights_pkey PRIMARY KEY (id);


--
-- Name: passengers passengers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.passengers
    ADD CONSTRAINT passengers_pkey PRIMARY KEY (id);


--
-- Name: travels travels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.travels
    ADD CONSTRAINT travels_pkey PRIMARY KEY (id);


--
-- Name: flights flights_destination_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.flights
    ADD CONSTRAINT flights_destination_fkey FOREIGN KEY (destination) REFERENCES public.cities(id);


--
-- Name: flights flights_origin_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.flights
    ADD CONSTRAINT flights_origin_fkey FOREIGN KEY (origin) REFERENCES public.cities(id);


--
-- Name: travels travels_flightId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.travels
    ADD CONSTRAINT "travels_flightId_fkey" FOREIGN KEY ("flightId") REFERENCES public.flights(id);


--
-- Name: travels travels_passengerId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.travels
    ADD CONSTRAINT "travels_passengerId_fkey" FOREIGN KEY ("passengerId") REFERENCES public.passengers(id);


--
-- PostgreSQL database dump complete
--

