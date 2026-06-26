(function() {	try {		if (typeof document != "undefined") {			var elementStyle = document.createElement("style");			elementStyle.setAttribute("class", "formBuilder-injected-style");			elementStyle.appendChild(document.createTextNode("@charset \"UTF-8\";\n@font-face {\n  font-family: \"formbuilder-icons\";\n  src: url(\"data:font/woff;base64,d09GRgABAAAAAB3kAA8AAAAANfQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABWAAAADsAAABUIIslek9TLzIAAAGUAAAARAAAAGA+I1Q9Y21hcAAAAdgAAADCAAACkjLzuTNjdnQgAAACnAAAAAsAAAAOAAAAAGZwZ20AAAKoAAAG7QAADgxiLvl6Z2FzcAAACZgAAAAIAAAACAAAABBnbHlmAAAJoAAAELEAAB26+tMzTGhlYWQAABpUAAAAMgAAADYiPFnvaGhlYQAAGogAAAAfAAAAJAc6A2VobXR4AAAaqAAAACsAAABUSeb/+mxvY2EAABrUAAAALAAAACxYemDFbWF4cAAAGwAAAAAgAAAAIAKiD4NuYW1lAAAbIAAAAZgAAAM5OICv6HBvc3QAABy4AAAArwAAAPnOOpcKcHJlcAAAHWgAAAB6AAAAnH62O7Z4nGNgZGBg4GIwYLBjYHJx8wlh4MtJLMljkGJgYYAAkDwymzEnMz2RgQPGA8qxgGkOIGaDiAIAJjsFSAB4nGNgYW5lnMDAysDAVMW0h4GBoQdCMz5gMGRkAooysDIzYAUBaa4pDAdeMHzyZQ76n8UQxbyGYRpQmBFFERMAgi4M6Hic7ZLLccJAEAV7hcBG5iejEDi4XE5FOZAERMGJKN9VJIDfaIcsmKrez2gkbU0vsAQW5s+0UO4UIm7Oljm/oJvzLWfvOz5paLRVP10f4/MJQvvpUtcZxXUnfvid142/0fpPKz789trPvtiwZceeAz3fHBlcuOIdmxjKazdEdyuRVOKOoiTsKQmDSsKsEnceJXaAEttAib2gJIwrsSuUxOmU2B9KbNJ3oELMhwox9xV7ZrpUbJzpWrF7HmOF4R+2CjoCAAB4nGNgQAYAAA4AAQB4nK1Xa1sbxxWe1Q2MAQNC2M267ihjUZcdySRxHGIrDtllURwlqcC43XVuu0i4TZNekt7oNb1flD9zVrRPnW/5aXnPzEoBB9ynz1M+6Lwz886c65xZSGhJ4n4UxlJ2H4n5nS5V7j2I6IZL1+LkoRzej6jQSD+bFtOi31f7br1OIiYRqK2RcESQ+E1yNMnkYZMKWtVVvUlFLQdHxeWa8AOqBjJJ/KywHPhZoxhQIdg7lDSrAIJ0QKXe4ahQKOAYqh9crvPsaL7m+JcloPJHVaeKNUWiFx3EoxWnYBSWNBU9qgUR66OVIMgJrhxI+rxHpdUHo2vOXBD2Q6qEUZ2KjXj3rQhkdxhJ6vUwtQk2bTDaiGOZWTYsuoapfCRpndfXmfl5L5KIxjCVNNOLEsxIXpthdJPRzcRN4jh2ES2aDfokdiMSXSbXMXa7dIXRlW76aEH0mfGoLPbjeJDG5HhxnHsQywH8UX7cpLKWsKDUSOHTVNCLaEr5NK18ZABbkiZVTLgRCTnIpvZ9yYvsrmvN518SSdin8lodi4EcyiF0ZevlBiK0EyU9N92NIxXXY0mb9yKsuRyX3JQmTWk6F3gjUbBpnsZQ+QrlovyUCvsPyenDEJpaa9I5LdnaebhVEvuST6DNJGZKsmWsndGjc/MiCP21+qRwzuuThTRrT3E8mBDA9USGQ5VyUk2whcsJIenCyLGVSK1Kt6yKuTO201XsEu6Xrh3fNK+NQ0dzs6IYQour6vEaiviCzgqFkAbpVpMWNKhS0oXgNT4AABmiBR7tYrRg8rWIgxZMUCRi0IdmWgwSOUwkLSJsTVrS3b0oKw224qs0d6AOm1TV3Z2oe89OunXMV838ss7EUnA/ypaWAnJSnxY9vnIoLT+7wD8L+CFnBbkoNnpRxuGDv/4QGYbahbW6wrYxdu06b8FN5pkYnnRgfwezJ5N1RgozIaoK8UJB3Rk5jmOyVdMiE4VwL6Il5cuQ5lF+c4hw4svkP5cuOWJRVIXv+xyBZaw5abY87dGnnvs0wrUCH2teky7qzGF5CfFm+TWdFVk+pbMSS1dnZZaXdVZh+XWdTbG8orNplt/Q2TmWnlbj+FMlQaSVbJHzDt+WJuljiyuTxY/sYvPY4upk8WO7KLWgC96ZfsKpf1tX2c/j/tXhn4RdT8M/lgr+sbwK/1g24B/LVfjH8pvwj+U1+MfyW/CP5Rr8Y9nSsm0K9rqG2kuJRNNzksCkFJewxTW7rum6R9dxH5/BVejIM7Kp0g3Fjf2JDJe9f3ac4my+EnLF0TNrWdmphRGaInv53LHwnMW5oeXzxvLncZrlhF/ViWt7qi08L1b+Jfhv647ayG44Nfb1JuIBB063H5cl3WjSC7p1sd2kjf9GRWH3QX8RKRIrDdmSHW4JCO3d4bCjOughER4+dF28SBuOU1tGhG+hd63QRdBKaKcNQ8tmhU/nA+9g2FJStoc48/ZJmmzZ86ii/DFbUsI9ZXMnOirJsnSPSqvlp2KfO+0MmrYyO9R2QpXg8euacLezr1IpSAaKynhUsVwKUhc44U73+J4UpqH/q23kWEHDNr9YM4HRgvNOUaJsT62giSAZZRRc+Sun4kQ2osFGFPGbd9IvdaEQ2uNYSMyWV/NYqDbC9NJkiWbM+rbqsFLO4p1JCNkZG2kSe1FLtvGgs/X5pGS78lRQpYHR3ePfLjaJp1V7ni3FJf/yMUuCcboS/sB53OVxijfRP1ocxW26GEQ9F2+qbMetbN1Zxr195cTqrts7seqfuvdJOwJNt7wnKdzSdNsbwjauMTh1JhUJbdE6doTGZa7PVRv5FB9ovnWdC1Th+rRw8+z52zqbwVsz3vI/lnTn/1XF7BP3sbZCqzpWL/U4t7ODBnzLG0flVYxue3WVxyX3ZhKCuwhBzV57fI3ghldbdBO3/LUz5rs4zlmu0gvAr2t6EeINjmKIcMttPLzjaL2puaDpDcBv65EQ2wA9AIfBjh45ZmYXwMzcY04HYI85DO4zh8F3mMPgu/oIvTAAioAcg2J95Ni5B0B27i3mOYzeZp5B7zDPoHeZZ9B7rDMESFgng5R1MthnnQz6zHkVYMAcBgfMYfCQOQy+Z+zaAvq+sYvR+8YuRj8wdjH6wNjF6ENjF6MfGrsY/cjYxejHiHF7ksCfmBFtAn5k4SuAH3PQzcjH6Kd4a3POzyxkzs8Nx8k5v8Dmlyan/tKMzI5DC3nHryxk+q9xTk74jYVM+K2FTPgduHcm5/3ejAz9EwuZ/gcLmf5H7MwJf7KQCX+2kAl/AfflyXl/NSND/5uFTP+7hUz/B3bmhH9ayIShhUz4VI/Omy9bqrijUqEY4p8mtMHY92j6gIpXe4fjx7r5BSXaAUEAAAAAAQAB//8AD3iczVlZbFzXeT7/ufvMnTvrnX2/s4gzlEjNSpnSzGizaJMSSZkyRdki6XW0xBZFu1btmDQbWU6Uh7oBahet1RRsUMCxg8aRESeAVaCoZKeGYQdtvBT1S9GXyi9+aPNSWjPqf+7M0KwkB66DFLm8Z+E95/xn+bfvP0MchFw/wV3lDhKOSMRK7MRNfCREYsQgWZIno2SCTJHD5Gm6d/Q1z8Thxp/yQI1NBl20gJxOpeXUCknl0qnccgJi3n5vbJH0x+P9Cx63k7NHtIh9UXc5OC0a1RZIMAQBfzDQDIO/DwzqN5pkU3bQNsBLZJPUFDhKrAoFkUAzo1KRpGUx3dwCuc156o3lvMcKya1cnETs8cgxEvX5otMkGvXNE1/UNxEafU3Htf1Zd22bVr5kcf0rt15dRIsu/y6X1/jzr7Qyb398eX1p2sr/y9pmZhonDh2anPT7VfWpPzzzxB88/tji6VMnjjUffujBB+6/b35u9ug9hw4fOjx99+TU5NRdByfGD4zdse/2vXt279rZqA2VC4P5XN+mbCadMpKJeCwaCftD/lAw4PPqHrfL6VDtqt3lZI+jKEbyUNSNrKEXq5jwLeNr+DBlscJ16yyxRtA9GuTB6RGNRDJTdpZqUEyUjXJCN/REIQpcH+iJdJmRMXQoZYyE08DmopkSSTECHm/R7MwGFSplOFOvL9Vq+K7VzaJev4RfzBcr8NNgPhBLhluusIE1eHEJti3BdCAffLN9vn2eftZ6HrvR11xa+4c4vlZrn9CcTq3XT3PRICNfq3fzeuu9uvnQP1kL5ILt74STyTD9JdLD0fVgvvXBpc8ZGfhAc7V/Ua/hn0tb05w4tObUCOoi083VW+pmkVTJMKmTcfIY+X7jpZ1pGnHdsTnFuSN0LA7RILgiUdfxRIxG3EpkOgTugM/GKbJbOeb3qpysOyVO4GWh6XGIHG+3chwQHpqahXIkHCbTZoWE50iYhMcXFx450Xz4gfmj99x91/6xvXvqtR3bh2/bNlStlEtbB/qyPcYj1/1dtncfR1KM5XsszW4o4YaSK5cySEeUdI+3WixUYEP/arfN122rfiEQlWEos6zgjeCITk3SiwXvvtXVty5efKuXw0uvv/7RxYvwo9XVj15//YoqpiQLdPKXzE8fra66LLIhqYC5bPm4P3zts0guFxkpobKWPqqkjHQF9kVy46urq6mLFy+mVltXVtdYlroIg6smtVU2up3BttXVkxs+9bfKjBR9N5KrpEuldKWT5whF/v4j9+/0H4iH9JFCY8A8PjeROApjHoA7CRDKAW0i/wk3TTiOzGGFjJeHqyVeDDLV0ACPYgt0laPg9VUlBYR0mWlDUtSdTANQ8rkxFOjW+yh6WNJComh58cP2B+33oQD9Tq31vuZyabSgOWmwrfY6YZlLTP9X+wV48cE3VCbpnX5ExnW/fEuf8XjjdAR4IQYKHwBZCYEo6yCJwlgUhCAoXhC5UR9Id+DGCEoc2xhF49W0gEB4ReCbRCGyqMhNIkqSOE1EUZqzIgFpXFVluWdONJtsla1MyByqGMo7E2gRMAmYObFaxrodsj631Enc1Wt+luAMLbbeY2npwuzshW7iPLU3a292dHWtfmk2vgxvzMaX4KeYEYK7u3mvceRWmdTQN06Bu+MV7yNWKlDrYghciuu5jduz4vb8KhVswFsE/rgPLMQuWuzHiUgkpyg1g+AgTs3hPB4AjbhlzX087KGyosgzrJSV+3QvVWRlMtS4vzOHsPK7m2SmsWv/WKNereRzyYTucTgmJ8am9k/dvrc+2hgdvq1Sq9YKg7lyvpxJJ/qSfaGgJ67HHW7HusY7Iqjw6wwxk844onMopCiiaLVRZLNJ0eMtVEqZ7ldUWI9448cbu/a4uI2ebj3fS5+YwlowJRYlNIxC2hHfbLWaxQ8hl8t2UxeT5Wt19leHN4I5s62QCy65sDHsan/L7F4+WF7C3rpHbz/fHY/ZcqcP0bty4dkg/R2LvJvsQ8kYJ3eRaXIPKuwZ8k3yDDlLvs3tHH1NQVn5S7JdGpa2L94OQ1VRHFrcgYyslEmliUJVypVLzeLWgc18vi8VD/sFyuXpsU1707sTOyP1gMJl9xi7Yo1QzafwAsc3M8lo0CsIuttptwlWVbA2C4Nb+vmcx+XQeNWSU5vEQhTZojRRa6XtstTENd62bfi2JtlGqkPbqqhpAKamwTwBERiUsuAi//o3LbIfF0lyeZqb/m2XyvV3V9r/tVZqxZV+f+NKq0Piyu/ZeTb+qrPA4ZXf0xXOIAT8m6efnpqamBgbGxnZs6fR2L59aIiSbz937tmz3/qjlaefefqZ5aVvPvVkDx4unHr0kW+cPHG8AxIZRLz3niMzh6emp6bvPjRx18RdByfHxsfGD+wfGR0ZvfOOPfv2IGBs7G4gZNxe347wYWh4CAEEww/FwtbBgS2b+28EkRuwhMMiETu17xO9edjo05yljIBoUscECWZzzL8iosGbUlo3dtCi7rtl0UOMiB31m5NJFbpuJYuJe+XaC2HDCHMnEc5de7KAD3fy2gu9VDh6cHpydnR2cra/dWr04MuTkz8cHf3x5OR3WcfC7ORh1jR6tDum5epYsqW2Cr/mPMkIw55GmH4WNp512dyt87Tf5lbdtvUn5nbb0KbdlMcxs4lq7wmo7tYLDNfW6oQ41n2YinUP8SOqi5MU2UT6ySApkSGyvWO3YHfHmz0SAiunctZFovK8uhDwUV3wCvpi0E+9ouhdSHqcdt4maZJt0c1iFFnWFuJALcBZKddUgI+GKUR4OJaKGVyECHpEaDJXZBOlYwlA+CBPYyGTeawR1JDHuvOpKzghp/LLvRm9K+aUgldc/mJObaUzqaTJy19/1pnGISbpmzfraMo3Smi9tg5uUTg3D25G+byVeOp+HSXUFFBEJHi0qruUFv0YN2ztCWjRabq/rgt0o5AxgXViqvYSSlh6w/+QLQpdsUUpOB1Orl2b/sLfrV26dO1XLKDohSzt8706fFg/c+2/kd3cwY540iIM1S69eQnH0NOX6rXWe7Xus2bmsLB3jZFCjCOu+7IexmERxs86srCTYGDAk0UVwMKDZZnIGlhF2WoeLYfYoofhbAzDEYbhLIpimSYWizJPFIuC/N3VoQErX5/ITCMTjyPzSNyIIxOiIa8bT11lQNCiIMLkkQLntIu+fBWPOo16GoHEDsCjdzv/NxbmnAnnJfh1W/3iXN9Mhr/Q6dq1F37ADolFiXhqTBW7aslZUF0/YwicXP8P7ir9sHtLck/jMMPpCNahyWuU2MBiJZamaqdWxOKiVWjKYOJZLBDQEoZn43EgTKA62wn2bJ3dIrPNYDwfg5jDtHjMMjEb19nBMOhmvFvuWkBAIesDJ1ql1qnZtdkLoZQRvoAV+r1w0rj21AX6y9Yp+j16mEWcGX/7fNhg0aURhjP+THsUzrTPwxkUATx0cv0n3H56HTniIQG0Ds81fFGgQsSrSbieAIcBIe4Rw8Sx0ddcKBhZIlDhHG6cnmNnf44QbFxA38LzMI0F8POM68j+zM09ybmbO840XIQk4n6fw67IuAzRIyE7fdUsRnQY3htJCUTdUyxUoZL1gVEGD6L8aqUQA++7hbPFEZhTBb79T7xN4GGAi15tD17l9nuOXj3qGfae9UjFs8Xt+6io8u1/5jGHLfzpq+2BT+EvIvrRT+/V9bNedg6cqQuvoC7waCXsZG9jlwX4O2WR8gJ/jghEOCcx4E0J10R+A50mlMIcAQrjigJEsStMLq2MjdgJ96UgF9MMD0uo/1D1GU7DCR+289wr9aWl1sLa2oVLP/j886UavLG21v4FbCOks5Cr9PCX3MkNrEf/G7Hm3zf+rs9mVSSBk2CTapFFnqLfZAGCnWhOu9YkTuJwOx1NpObS3a4mYlgPxtRNpO0N+LxN5Lo/FPA389m0kYhFpFAwGJpe/ycUnMtlUsl4NCwFQ8FxdPRT6OYn0MmPoYsf6d0Ibbwb+Aq+vRc29GPY4N5w/XNjEn5D+rIx7u79Queq54aX2VHuFSzvvqH8Vc+ibnzrnQ40WNv4LNWXNqSND5yptVVmWlmQRgj9W3oRfW60EfI7LRxPCYwxa0HOYXBPn/D4PT4WzZdLdchmSkygUaq9KN3oXsTkAMa/yUzw8uVg6fbglcuBkULg8uVAYSRw+UpgpHgkFWRlIXDlCvt25XKw017EaaWb5MhPEqSfbv1ZLpviFBnGOlj/gAQcgkbOsuIEi0osCzZQZaIu2EFTrIK2yOJOK2o2FRQqLPfiTge6VEWTleNornlhmggC02OB7+HyPetUbaqTs8hI166hRURai7ekZb01LefvZIXMgk3cmqq8bJJVNOvK/52uG+lO3kBXXf6tCTcOfiWaipUuf2WiM+xpGMEAql++b1MmbSSjkUAiyAJ/v9PfU02XGM27Ge4tOg0s+wBLoReVZ1nknkSh9RX1alHyGVndqDFoy64/OxC3Vmv9SzKb3Z3NJga3bZu/7bZ3Yg9vOv1k3yMxVCfTBd2J+jJXuLuAb6DxjQa+/Pz8iacefbSjP+iX3uKsZJkcaIzOTJU4UfChtZXZ3diYjPZVooLIC+yuA6gITQtQ1LgZLCiZ45iajT/15MKpkw/Nzx0+NH7gzj2Pe3fMW1HfhGQmKRrJTLVUo9XKDihlGU6wgwf9XsHr84hSt0PZ7FDOOquVTGkAtkB2C4g4rFIt4CEUC2jKxKQoibqPAYwOqS20fHO7e50092rg/sL9AZsDXMG44gJJb3/HK4GuJKMeUO3BY1tn/TbN5Y1iGzoZylNZkJN+L6ha8NjgvFfTXMGwxQOSHZ7TJHBbtoQ1zf/gwLxf0zz+pOQBtxIPu0Ad53m/zeWgomjd/a+qwHH/Nq6KvMOl+YG1OB08L9l2x+Btu01DghYHFXjabQ6yZkE9cIWi27x4QBWp6t3QYNvf+s9dSAwDT3+HT/Qd5FOebGnkIzJFHo3h4SMDFhlueJZBDH6a8Dy5j8GNyR1F95AhiKE84PGgc2cH5PSIeWA3u8Z6LZPFP3aWFXa9Sd/xaGGq8eC1bdc8Ey4H5gert6dTD+yuvQpWzUM/7XOkgNPEaGtJ83g0+nLrMCtBl4KJ3Tsn7j2HLo+ZZPNu/STGRMyvTjT2M/wG5ywgS/JzPIqO3WHjBJEITU2lJnhjJbuOVCjDb4QwT4aD152Zc/1BXwZlo2pIZtKLZipWzYTf8XORO3khthRbw/TJu7EfbahfWIutwSdLa/gsrXWLtTXUg+ut638MP8b1ekmsEUYgbR4v0HOdheOWnkgZKQ9zJGmvHZjfyFSGwdm5FNedxQK8ykuXRbvwtmyxLlnkk7JlCUvlY0H4WNHpz2WLRW6NmD7revv6CZxrS2cunk0wZiI3Cgy6IdB7wpMyEuYVtGj+QNPlWjJTBxOQwatCbw5Vli4LdvFtidatrRE2C/25V2azysw9Xb/e/f2RRR3D5LsNuwG8kEdVJgqAxKGPUtGmDqDJ4gR+EUGZ+bsFA2oiR8wAAlgAgUoC07gyOsdOZTzUGOyM4Fa+6pCZhlpOZDzucsVnKMhDYUPg4EO47e7+7pDFM8X/vWjq2C8T2EPqAnO0JdjG5JRbVcXWqrnZOckyUkq3VtMlqKToXLr00QgedOf3gSNHUhUopfFrZQedMzlgNtCHWP9OA5R+cuSI2ZsRHOnQKJH/ATlaCL8AAAB4nGNgZGBgAGLzFH+neH6brwz8zC+AIgz3Z3Grw+j/f/9nMb9gDgJyORiYQKIANPsLzQAAeJxjYGRgYA76nwUkX/z/+/8v8wsGoAgKEAUAtlcHpAB4nGN+wcDADMILoDQuHIlgM61DYp8C0tkMDIxr/v8F4n/ML/7/BwAcMRcVAAAAAAABzgK+AxoDkAScBvIIAgiaCQQJiAnKCrAK7gxQDSQNfA3UDgoOQA7dAAEAAAAVAIgAFgAAAAAAAgCOAO0AjQAAAVsODAAAAAB4nI2SzUrDQBRGv9S2ogVBBdeDC7FI0zbSjatCQVduBLsU0nTyU5JMmUyEunflg/gG7nwAX0Jfxa/JIEoRTZjk3HPvTGYuAXCAdziorxFHzQ72GdXcwDYuLW/RX1tuku8st9CBstymf7C8izM8We7gEC9cwWnuMFrgzbKDY+fccgN7zq3lLfrAcpP8aLmFI+fZcpv+1fIups6H5Q5OGqOJWq50EsVGnE66wht4npithKJKcj8VfmlipQsxFqHKjUxT5QYqC5XOZmWSzqXuJYHKixsZlamvN/yGmEpdJCoXQ3ewkbuSudS+kfP1Dor7yDMmFKFWmbi03xZLrRYyMG5szPKi3/++J0zY3CVW0EgQIYaBwCltl28PAw6PNGOFYGVdlSCHj5TGR8kZcZUpGI85QkY5rWRFSnYR8JlVXvM945yEmTkrNHrkoJpR4IYmYjbluvof9X9XTCtT0KxjgSF3M/jHvCuavLJ+dZL5Vw8K3HOPHq3hOuvT6up0gj/yz3ML9nWdW9AE9G7VXUN7gT7vX/r0CXMPouh4nG3IW1ICMRBG4fwY41wQvOEuZlE9nXaSMiSpJlPi7i2gePM8fXXMxtwazP8dsMEDLB7h8IQOPQaM2OIZO+zxgle84R0fOODTbGlthcuxJmliPTXpOAh/z+W8u2NatKx1VPKx3Nxr5DA1OTd3kiTcuotJhex1Vskck/2KSVyI3kt2TJkluXltrWQXhLxoX0lpUarB5fU4iw6nom1K5Ud0vDLEJYhaLvXXmD8uHj97AHicY/DewXAiKGIjI2Nf5AbGnRwMHAzJBRsZ2J02MjBoQWguFHonAwMDNxJrJwMzA4PLRhXGjsCIDQ4dESB+istGDRB/BwcDRIDBJVJ6ozpIaBdHAwMji0NHcghMAgQ2MvBp7WD837qBpXcjE4PLZtYUNgYXFwCUHCoHAAA=\") format(\"woff\");\n}\n/* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */\n/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */\n/*\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n  @font-face {\n    font-family: 'formbuilder-icons';\n    src: url('font/formbuilder-icons.svg?4142374#formbuilder-icons') format('svg');\n  }\n}\n*/\n[class^=formbuilder-icon-]:before,\n[class*=\" formbuilder-icon-\"]:before {\n  font-family: \"formbuilder-icons\";\n  font-style: normal;\n  font-weight: normal;\n  speak: never;\n  display: inline-block;\n  text-decoration: inherit;\n  width: 1em;\n  margin-right: 0.2em;\n  text-align: center;\n  /* opacity: .8; */\n  /* For safety - reset parent styles, that can break glyph codes*/\n  font-variant: normal;\n  text-transform: none;\n  /* fix buttons height, for twitter bootstrap */\n  line-height: 1em;\n  /* Animation center compensation - margins should be symmetric */\n  /* remove if not needed */\n  margin-left: 0.2em;\n  /* you can be more comfortable with increased icons size */\n  /* font-size: 120%; */\n  /* Uncomment for 3D effect */\n  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */\n}\n\n.formbuilder-icon-autocomplete:before {\n  content: \"\\e800\";\n} /* '' */\n.formbuilder-icon-date:before {\n  content: \"\\e801\";\n} /* '' */\n.formbuilder-icon-checkbox:before {\n  content: \"\\e802\";\n} /* '' */\n.formbuilder-icon-checkbox-group:before {\n  content: \"\\e803\";\n} /* '' */\n.formbuilder-icon-radio-group:before {\n  content: \"\\e804\";\n} /* '' */\n.formbuilder-icon-rich-text:before {\n  content: \"\\e805\";\n} /* '' */\n.formbuilder-icon-select:before {\n  content: \"\\e806\";\n} /* '' */\n.formbuilder-icon-textarea:before {\n  content: \"\\e807\";\n} /* '' */\n.formbuilder-icon-text:before {\n  content: \"\\e808\";\n} /* '' */\n.formbuilder-icon-pencil:before {\n  content: \"\\e809\";\n} /* '' */\n.formbuilder-icon-file:before {\n  content: \"\\e80a\";\n} /* '' */\n.formbuilder-icon-hidden:before {\n  content: \"\\e80b\";\n} /* '' */\n.formbuilder-icon-cancel:before {\n  content: \"\\e80c\";\n} /* '' */\n.formbuilder-icon-button:before {\n  content: \"\\e80d\";\n} /* '' */\n.formbuilder-icon-header:before {\n  content: \"\\e80f\";\n} /* '' */\n.formbuilder-icon-paragraph:before {\n  content: \"\\e810\";\n} /* '' */\n.formbuilder-icon-number:before {\n  content: \"\\e811\";\n} /* '' */\n.formbuilder-icon-copy:before {\n  content: \"\\f24d\";\n} /* '' */\n.formbuilder-icon-grid:before {\n  content: url(\"data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-list-nested' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z'/></svg>\");\n}\n\n.formbuilder-icon-plus:before {\n  content: url(\"data:image/svg+xml; utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-plus-circle' viewBox='0 0 16 16'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/><path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z'/></svg>\");\n}\n\n.formbuilder-icon-sort-lower:before {\n  content: \"\\f175\";\n}\n\n.formbuilder-icon-sort-higher:before {\n  content: \"\\f176\";\n}\n\n/*\n  Mixins\n*/\n.form-wrap.form-builder {\n  /*\n    Animations\n  */\n  /*   ------------   Toast Message   ------------   */\n  /*   ------------   END TOOLTIP   ------------   */\n  position: relative;\n  display: flex;\n  flex-direction: row;\n}\n.form-wrap.form-builder * {\n  box-sizing: border-box;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap button,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap input,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap select,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap textarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap input {\n  line-height: normal;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap textarea {\n  overflow: auto;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap button,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap input,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap select,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap textarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn-group {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn-group > .btn {\n  position: relative;\n  float: left;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn-group .btn + .btn,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn-group .btn + .btn-group,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn-group .btn-group + .btn,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn-group > .btn:last-child:not(:first-child),\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn-group > .dropdown-toggle:not(:first-child),\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn-group .input-group .form-control:last-child,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn-group .input-group-addon:last-child,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn-group .input-group-btn:first-child > .btn-group:not(:first-child) > .btn,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn-group .input-group-btn:first-child > .btn:not(:first-child),\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn-group .input-group-btn:last-child > .btn,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn-group .input-group-btn:last-child > .btn-group > .btn,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn-group .input-group-btn:last-child > .dropdown-toggle {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn-group > .btn.active,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn-group > .btn:active,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn-group > .btn:focus,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn-group > .btn:hover {\n  z-index: 2;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  user-select: none;\n  background-image: none;\n  border-radius: 4px;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn.btn-lg {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn.btn-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn.btn-xs {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn.active, .form-wrap.form-builder.formbuilder-embedded-bootstrap .btn.btn-active, .form-wrap.form-builder.formbuilder-embedded-bootstrap .btn:active {\n  background-image: none;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .input-group .form-control:last-child,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .input-group-addon:last-child,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .input-group-btn:first-child > .btn-group:not(:first-child) > .btn,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .input-group-btn:first-child > .btn:not(:first-child),\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .input-group-btn:last-child > .btn,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .input-group-btn:last-child > .btn-group > .btn,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .input-group-btn:last-child > .dropdown-toggle {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .input-group .form-control,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .input-group-addon,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .input-group-btn {\n  display: table-cell;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .input-group-lg > .form-control,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .input-group-lg > .input-group-addon,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .form-control,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap output {\n  font-size: 14px;\n  line-height: 1.42857143;\n  display: block;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap textarea.form-control {\n  height: auto;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .form-control {\n  height: 34px;\n  display: block;\n  width: 100%;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  border-radius: 4px;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .form-control:focus {\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .form-group {\n  margin-left: 0px;\n  margin-bottom: 15px;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .btn,\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .form-control {\n  background-image: none;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .pull-right {\n  float: right;\n}\n.form-wrap.form-builder.formbuilder-embedded-bootstrap .pull-left {\n  float: left;\n}\n.form-wrap.form-builder .formbuilder-required,\n.form-wrap.form-builder .required-asterisk {\n  color: #c10000;\n}\n.form-wrap.form-builder .checkbox-group,\n.form-wrap.form-builder .radio-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-wrap.form-builder .checkbox-group.checkbox-group--inline, .form-wrap.form-builder .checkbox-group.radio-group--inline,\n.form-wrap.form-builder .radio-group.checkbox-group--inline,\n.form-wrap.form-builder .radio-group.radio-group--inline {\n  flex-direction: row;\n}\n.form-wrap.form-builder .formbuilder-checkbox-group input[type=checkbox],\n.form-wrap.form-builder .formbuilder-checkbox-group input[type=radio],\n.form-wrap.form-builder .formbuilder-radio-group input[type=checkbox],\n.form-wrap.form-builder .formbuilder-radio-group input[type=radio] {\n  margin: 0 4px 0 0;\n}\n.form-wrap.form-builder .formbuilder-autocomplete-list {\n  background-color: #fff;\n  display: none;\n  list-style: none;\n  padding: 0;\n  border: 1px solid #ccc;\n  border-width: 0 1px 1px;\n  position: absolute;\n  z-index: 20;\n  max-height: 200px;\n  overflow-y: auto;\n}\n.form-wrap.form-builder .formbuilder-autocomplete-list li {\n  display: none;\n  cursor: default;\n  padding: 5px;\n  margin: 0;\n  transition: background-color 200ms ease-in-out;\n}\n.form-wrap.form-builder .formbuilder-autocomplete-list li:hover, .form-wrap.form-builder .formbuilder-autocomplete-list li.active-option {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n@keyframes PLACEHOLDER {\n  0% {\n    height: 1px;\n  }\n  100% {\n    height: 15px;\n  }\n}\n.form-wrap.form-builder .cb-wrap {\n  width: 26%;\n  max-width: fit-content;\n  transition: transform 250ms;\n  /* smartphones, Android phones, landscape iPhone */\n}\n.form-wrap.form-builder .cb-wrap.sticky-controls {\n  position: sticky;\n  align-self: flex-start;\n  top: 0;\n}\n.form-wrap.form-builder .cb-wrap h4 {\n  margin-top: 0;\n  color: #666;\n}\n@media (max-width: 481px) {\n  .form-wrap.form-builder .cb-wrap {\n    width: 64px;\n  }\n  .form-wrap.form-builder .cb-wrap h4 {\n    display: none;\n  }\n}\n.form-wrap.form-builder .cb-wrap .form-actions {\n  float: right;\n  margin-top: 5px;\n}\n.form-wrap.form-builder .cb-wrap .form-actions button {\n  border: 0 none;\n}\n.form-wrap.form-builder .frmb-control {\n  margin: 0;\n  padding: 0;\n  border-radius: 5px;\n}\n.form-wrap.form-builder .frmb-control li {\n  cursor: move;\n  list-style: none;\n  margin: 0 0 -1px 0;\n  padding: 10px;\n  text-align: left;\n  background: #fff;\n  user-select: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  box-shadow: inset 0 0 0 1px #c5c5c5;\n  /* smartphones, Android phones, landscape iPhone */\n}\n.form-wrap.form-builder .frmb-control li .control-icon {\n  width: 16px;\n  height: auto;\n  margin-right: 10px;\n  margin-left: 0.2em;\n  display: inline-block;\n}\n.form-wrap.form-builder .frmb-control li .control-icon img,\n.form-wrap.form-builder .frmb-control li .control-icon svg {\n  max-width: 100%;\n  height: auto;\n}\n.form-wrap.form-builder .frmb-control li:first-child {\n  border-radius: 5px 5px 0 0;\n  margin-top: 0;\n}\n.form-wrap.form-builder .frmb-control li:last-child {\n  border-radius: 0 0 5px 5px;\n}\n.form-wrap.form-builder .frmb-control li::before {\n  margin-right: 10px;\n  font-size: 16px;\n}\n.form-wrap.form-builder .frmb-control li:hover {\n  background-color: #f2f2f2;\n}\n.form-wrap.form-builder .frmb-control li.ui-sortable-helper {\n  border-radius: 5px;\n  transition: box-shadow 250ms;\n  box-shadow: 2px 2px 6px 0 #666;\n  border: 1px solid #fff;\n}\n.form-wrap.form-builder .frmb-control li.ui-state-highlight {\n  width: 0;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  border: 0 none;\n}\n.form-wrap.form-builder .frmb-control li.moving {\n  opacity: 0.6;\n}\n.form-wrap.form-builder .frmb-control li.formbuilder-separator {\n  background-color: transparent;\n  box-shadow: none;\n  padding: 0;\n  cursor: default;\n}\n.form-wrap.form-builder .frmb-control li.formbuilder-separator hr {\n  margin: 10px 0;\n}\n@media (max-width: 481px) {\n  .form-wrap.form-builder .frmb-control li::before {\n    font-size: 30px;\n  }\n  .form-wrap.form-builder .frmb-control li {\n    text-overflow: clip;\n  }\n  .form-wrap.form-builder .frmb-control li span {\n    visibility: hidden;\n  }\n  .form-wrap.form-builder .frmb-control li span span {\n    visibility: visible;\n    font-size: 30px;\n    width: auto !important;\n  }\n}\n.form-wrap.form-builder .frmb-control.sort-enabled li.ui-state-highlight {\n  box-shadow: none;\n  height: 0;\n  width: 100%;\n  background: radial-gradient(ellipse at center, rgb(84, 84, 84) 0%, rgba(0, 0, 0, 0) 75%);\n  border: 0 none;\n  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);\n  visibility: visible;\n  overflow: hidden;\n  margin: 1px 0 3px;\n  animation: PLACEHOLDER 250ms forwards;\n}\n.controls-left.form-wrap.form-builder .form-actions {\n  float: left;\n}\n\n.formbuilder-mobile.form-wrap.form-builder .form-actions {\n  width: 100%;\n}\n.formbuilder-mobile.form-wrap.form-builder .form-actions button {\n  width: 100%;\n  font-size: 0.85em !important;\n  display: block !important;\n  border-radius: 0 !important;\n  margin-top: -1px;\n  margin-left: 0 !important;\n}\n.formbuilder-mobile.form-wrap.form-builder .form-actions button:first-child {\n  border-radius: 5px 5px 0 0 !important;\n  margin-top: 0 !important;\n  border-bottom: 0 none;\n}\n.formbuilder-mobile.form-wrap.form-builder .form-actions button:last-child {\n  border-radius: 0 0 5px 5px !important;\n}\n\n.form-wrap.form-builder .stage-wrap {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding: 0;\n  margin: 0;\n  width: calc(74% - 5px);\n  /* smartphones, Android phones, landscape iPhone */\n}\n@media (max-width: 481px) {\n  .form-wrap.form-builder .stage-wrap {\n    width: calc(100% - 64px);\n  }\n}\n.form-wrap.form-builder .stage-wrap.empty {\n  border: 3px dashed #ccc;\n  background-color: rgba(255, 255, 255, 0.25);\n}\n.form-wrap.form-builder .stage-wrap.empty::after {\n  content: attr(data-content);\n  position: absolute;\n  text-align: center;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  margin-top: -1em;\n}\n.form-wrap.form-builder .frmb {\n  list-style-type: none;\n  min-height: 200px;\n  transition: background-color 500ms ease-in-out;\n}\n.form-wrap.form-builder .frmb .formbuilder-required {\n  color: #c10000;\n}\n.form-wrap.form-builder .frmb.removing {\n  overflow: hidden;\n}\n.form-wrap.form-builder .frmb li.form-field:hover {\n  border-color: #66afe9;\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n.form-wrap.form-builder .frmb li.form-field:hover .field-actions {\n  opacity: 1;\n}\n.form-wrap.form-builder .frmb li.form-field:hover li :hover {\n  background: #fefefe;\n}\n.form-wrap.form-builder .frmb li.form-field {\n  position: relative;\n  padding: 6px;\n  clear: both;\n  margin-left: 0;\n  margin-bottom: 3px;\n  background-color: #fff;\n  transition: background-color 250ms ease-in-out, margin-top 400ms;\n}\n.form-wrap.form-builder .frmb li.form-field.hidden-field {\n  background-color: rgba(255, 255, 255, 0.6);\n}\n.form-wrap.form-builder .frmb li.form-field:first-child {\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n}\n.form-wrap.form-builder .frmb li.form-field:first-child .field-actions .btn:last-child {\n  border-radius: 0 5px 0 0;\n}\n.form-wrap.form-builder .frmb li.form-field:last-child {\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.form-wrap.form-builder .frmb li.form-field.no-fields label {\n  font-weight: 400;\n}\n@keyframes PLACEHOLDER {\n  0% {\n    height: 0;\n  }\n  100% {\n    height: 15px;\n  }\n}\n.form-wrap.form-builder .frmb li.form-field.frmb-placeholder, .form-wrap.form-builder .frmb li.form-field.ui-state-highlight {\n  height: 0;\n  padding: 0;\n  background: radial-gradient(ellipse at center, rgb(84, 84, 84) 0%, rgba(0, 0, 0, 0) 75%);\n  border: 0 none;\n  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);\n  visibility: visible;\n  overflow: hidden;\n  margin-bottom: 3px;\n  animation: PLACEHOLDER 250ms forwards;\n}\n.form-wrap.form-builder .frmb li.form-field.moving, .form-wrap.form-builder .frmb li.form-field.ui-sortable-helper {\n  transition: box-shadow 500ms ease-in-out;\n  box-shadow: 2px 2px 6px 0 #666;\n  border: 1px solid #fff;\n  border-radius: 5px;\n}\n.form-wrap.form-builder .frmb li.form-field.disabled-field {\n  z-index: 1;\n  position: relative;\n  overflow: visible;\n}\n.form-wrap.form-builder .frmb li.form-field.disabled-field:hover .frmb-tt {\n  display: inline-block;\n}\n.form-wrap.form-builder .frmb li.form-field.disabled-field [type=checkbox] {\n  float: left;\n  margin-right: 10px;\n}\n.form-wrap.form-builder .frmb li.form-field.disabled-field h2 {\n  border-bottom: 0 none;\n}\n.form-wrap.form-builder .frmb li.form-field.disabled-field label {\n  font-size: 12px;\n  font-weight: 400;\n  color: #666;\n}\n.form-wrap.form-builder .frmb li.form-field.disabled-field .prev-holder {\n  cursor: default;\n  line-height: 28px;\n  padding-left: 5px;\n}\n.form-wrap.form-builder .frmb li.form-field .close-field {\n  position: absolute;\n  color: #666;\n  left: 50%;\n  bottom: 6px;\n  background: #fff;\n  border-top: 1px solid #c5c5c5;\n  border-left: 1px solid #c5c5c5;\n  border-right: 1px solid #c5c5c5;\n  transform: translateX(-50%);\n  padding: 0 5px;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n  cursor: pointer;\n  transition: background-color 250ms ease-in-out;\n}\n.form-wrap.form-builder .frmb li.form-field .close-field:hover {\n  text-decoration: none;\n}\n.form-wrap.form-builder .frmb li.form-field.header-field h1,\n.form-wrap.form-builder .frmb li.form-field.header-field h2,\n.form-wrap.form-builder .frmb li.form-field.header-field h3,\n.form-wrap.form-builder .frmb li.form-field.header-field h4,\n.form-wrap.form-builder .frmb li.form-field.header-field h5,\n.form-wrap.form-builder .frmb li.form-field.header-field h6 {\n  word-break: break-word;\n}\n.form-wrap.form-builder .frmb li.form-field.paragraph-field p {\n  word-break: break-word;\n}\n.form-wrap.form-builder .frmb li.form-field .field-label {\n  display: inline;\n  overflow-wrap: break-word;\n}\n.form-wrap.form-builder .frmb li.form-field.button-field h1,\n.form-wrap.form-builder .frmb li.form-field.button-field h2,\n.form-wrap.form-builder .frmb li.form-field.button-field h3,\n.form-wrap.form-builder .frmb li.form-field.button-field p,\n.form-wrap.form-builder .frmb li.form-field.button-field canvas,\n.form-wrap.form-builder .frmb li.form-field.button-field output,\n.form-wrap.form-builder .frmb li.form-field.button-field address,\n.form-wrap.form-builder .frmb li.form-field.button-field blockquote,\n.form-wrap.form-builder .frmb li.form-field.button-field .prev-holder, .form-wrap.form-builder .frmb li.form-field.header-field h1,\n.form-wrap.form-builder .frmb li.form-field.header-field h2,\n.form-wrap.form-builder .frmb li.form-field.header-field h3,\n.form-wrap.form-builder .frmb li.form-field.header-field p,\n.form-wrap.form-builder .frmb li.form-field.header-field canvas,\n.form-wrap.form-builder .frmb li.form-field.header-field output,\n.form-wrap.form-builder .frmb li.form-field.header-field address,\n.form-wrap.form-builder .frmb li.form-field.header-field blockquote,\n.form-wrap.form-builder .frmb li.form-field.header-field .prev-holder, .form-wrap.form-builder .frmb li.form-field.paragraph-field h1,\n.form-wrap.form-builder .frmb li.form-field.paragraph-field h2,\n.form-wrap.form-builder .frmb li.form-field.paragraph-field h3,\n.form-wrap.form-builder .frmb li.form-field.paragraph-field p,\n.form-wrap.form-builder .frmb li.form-field.paragraph-field canvas,\n.form-wrap.form-builder .frmb li.form-field.paragraph-field output,\n.form-wrap.form-builder .frmb li.form-field.paragraph-field address,\n.form-wrap.form-builder .frmb li.form-field.paragraph-field blockquote,\n.form-wrap.form-builder .frmb li.form-field.paragraph-field .prev-holder {\n  margin: 0;\n}\n.form-wrap.form-builder .frmb li.form-field.button-field .field-label, .form-wrap.form-builder .frmb li.form-field.header-field .field-label, .form-wrap.form-builder .frmb li.form-field.paragraph-field .field-label {\n  display: none;\n}\n.form-wrap.form-builder .frmb li.form-field.button-field.editing .field-label, .form-wrap.form-builder .frmb li.form-field.header-field.editing .field-label, .form-wrap.form-builder .frmb li.form-field.paragraph-field.editing .field-label {\n  display: block;\n}\n.form-wrap.form-builder .frmb li.form-field.paragraph-field .fld-label {\n  min-height: 150px;\n  overflow-y: auto;\n}\n.form-wrap.form-builder .frmb li.form-field.checkbox-field .field-label {\n  display: none;\n}\n.form-wrap.form-builder .frmb li.deleting,\n.form-wrap.form-builder .frmb li.delete:hover,\n.form-wrap.form-builder .frmb li:hover li.delete:hover {\n  background-color: #fdd;\n}\n.form-wrap.form-builder .frmb li.deleting .close-field,\n.form-wrap.form-builder .frmb li.delete:hover .close-field,\n.form-wrap.form-builder .frmb li:hover li.delete:hover .close-field {\n  background-color: #fdd;\n}\n.form-wrap.form-builder .frmb li.deleting {\n  z-index: 20;\n  pointer-events: none;\n}\n.form-wrap.form-builder .frmb.disabled-field {\n  padding: 0 5px;\n}\n.form-wrap.form-builder .frmb.disabled-field :hover {\n  border-color: transparent;\n}\n.form-wrap.form-builder .frmb.disabled-field .form-element {\n  float: none;\n  margin-bottom: 10px;\n  overflow: visible;\n  padding: 5px 0;\n  position: relative;\n}\n.form-wrap.form-builder .frmb .frm-holder {\n  display: none;\n}\n.form-wrap.form-builder .frmb .tooltip {\n  left: 20px;\n}\n.form-wrap.form-builder .frmb .prev-holder {\n  display: block;\n}\n.form-wrap.form-builder .frmb .prev-holder .form-group {\n  margin: 0;\n}\n.form-wrap.form-builder .frmb .prev-holder .ql-editor {\n  min-height: 125px;\n}\n.form-wrap.form-builder .frmb .prev-holder .form-group > label:not([class=formbuilder-checkbox-label]) {\n  display: none;\n}\n.form-wrap.form-builder .frmb .prev-holder select,\n.form-wrap.form-builder .frmb .prev-holder input[type=text],\n.form-wrap.form-builder .frmb .prev-holder textarea,\n.form-wrap.form-builder .frmb .prev-holder input[type=number] {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.form-wrap.form-builder .frmb .prev-holder input[type=color] {\n  width: 60px;\n  padding: 2px;\n  display: inline-block;\n}\n.form-wrap.form-builder .frmb .prev-holder input[type=date] {\n  width: auto;\n}\n.form-wrap.form-builder .frmb .prev-holder select[multiple] {\n  height: auto;\n}\n.form-wrap.form-builder .frmb .prev-holder label {\n  font-weight: normal;\n}\n.form-wrap.form-builder .frmb .prev-holder input[type=number] {\n  width: auto;\n  max-width: 100%;\n}\n.form-wrap.form-builder .frmb .prev-holder input[type=color] {\n  width: 60px;\n  padding: 2px;\n  display: inline-block;\n}\n.form-wrap.form-builder .frmb .required-asterisk {\n  display: none;\n}\n.form-wrap.form-builder .frmb .field-label,\n.form-wrap.form-builder .frmb .legend {\n  color: #666;\n  margin-bottom: 5px;\n  line-height: 27px;\n  font-size: 16px;\n  font-weight: normal;\n}\n.form-wrap.form-builder .frmb .disabled-field .field-label {\n  display: block;\n}\n.form-wrap.form-builder .frmb .other-option:checked + label input {\n  display: inline-block;\n}\n.form-wrap.form-builder .frmb .other-val {\n  margin-left: 5px;\n  display: none;\n}\n.form-wrap.form-builder .frmb .field-actions {\n  position: absolute;\n  top: 0;\n  right: 0;\n  opacity: 0;\n}\n.form-wrap.form-builder .frmb .field-actions a::before {\n  margin: 0;\n}\n.form-wrap.form-builder .frmb .field-actions a:hover {\n  text-decoration: none;\n  color: #000;\n}\n.form-wrap.form-builder .frmb .field-actions .btn {\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  padding: 0 6px;\n  border-radius: 0;\n  border-color: #c5c5c5;\n  background-color: #fff;\n  color: #c5c5c5;\n  line-height: 32px;\n  font-size: 16px;\n  border-width: 0 0 1px 1px;\n}\n.form-wrap.form-builder .frmb .field-actions .btn:first-child {\n  border-bottom-left-radius: 5px;\n}\n.form-wrap.form-builder .frmb .field-actions .toggle-form:hover {\n  border-color: #cccccc;\n  background-color: #65aac6;\n  color: #fff;\n}\n.form-wrap.form-builder .frmb .field-actions .toggle-form::before {\n  margin: 0;\n}\n.form-wrap.form-builder .frmb .field-actions .copy-button:hover {\n  background-color: #6fc665;\n  color: #fff;\n}\n.form-wrap.form-builder .frmb .field-actions .del-button:hover {\n  background-color: #c66865;\n  color: #fff;\n}\n.form-wrap.form-builder .frmb .option-actions {\n  text-align: right;\n  margin-top: 10px;\n  width: 100%;\n  margin-left: 2%;\n}\n.form-wrap.form-builder .frmb .option-actions button,\n.form-wrap.form-builder .frmb .option-actions a {\n  background: #fff;\n  padding: 5px 10px;\n  border: 1px solid #c5c5c5;\n  font-size: 14px;\n  border-radius: 5px;\n  cursor: default;\n}\n.form-wrap.form-builder .frmb .sortable-options-wrap {\n  width: 81.33333333%;\n  display: inline-block;\n  /* smartphones, Android phones, landscape iPhone */\n}\n.form-wrap.form-builder .frmb .sortable-options-wrap label {\n  font-weight: normal;\n}\n@media (max-width: 481px) {\n  .form-wrap.form-builder .frmb .sortable-options-wrap {\n    display: block;\n    width: 100%;\n  }\n}\n.form-wrap.form-builder .frmb .radio-group-field .sortable-options li:nth-child(2) .remove,\n.form-wrap.form-builder .frmb .select-field .sortable-options li:nth-child(2) .remove {\n  opacity: 0;\n  pointer-events: none;\n}\n.form-wrap.form-builder .frmb .sortable-options {\n  display: inline-block;\n  width: 100%;\n  margin-left: 2%;\n  background: #c5c5c5;\n  margin-bottom: 0;\n  border-radius: 2px;\n  list-style: none;\n  padding: 0;\n}\n.form-wrap.form-builder .frmb .sortable-options > li {\n  display: flex !important;\n  flex-wrap: wrap;\n  cursor: move;\n  margin: 1px;\n  padding: 6px;\n  background-color: #fff;\n}\n.form-wrap.form-builder .frmb .sortable-options > li:nth-child(1) .remove {\n  opacity: 0;\n  pointer-events: none;\n}\n.form-wrap.form-builder .frmb .sortable-options > li .remove {\n  flex: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n  width: 18px;\n  font-size: 12px;\n  padding: 0;\n  color: #c10000;\n  margin-left: 3px;\n}\n.form-wrap.form-builder .frmb .sortable-options > li .remove::before {\n  margin: 0;\n}\n.form-wrap.form-builder .frmb .sortable-options > li .remove:hover {\n  background-color: #c10000 !important;\n  text-decoration: none;\n  color: #fff;\n}\n.form-wrap.form-builder .frmb .sortable-options .option-selected {\n  margin: 0 3px 0 0;\n  flex: none;\n}\n.form-wrap.form-builder .frmb .sortable-options input[type=text] {\n  flex-grow: 1;\n  flex-shrink: 0;\n  flex-basis: auto;\n  width: 100px;\n  margin: 0 3px;\n  float: none;\n}\n.form-wrap.form-builder .frmb .form-field .form-group {\n  width: 100%;\n  clear: left;\n  float: none;\n}\n.form-wrap.form-builder .frmb .col-md-6 .form-elements,\n.form-wrap.form-builder .frmb .col-md-8 .form-elements {\n  width: 100%;\n}\n.form-wrap.form-builder .frmb .field-options .add-area .add {\n  clear: both;\n}\n.form-wrap.form-builder .frmb .style-wrap button.selected {\n  border: 1px solid #000;\n  margin-top: 0;\n  margin-right: 1px;\n  box-shadow: 0 0 0 1px #fff inset;\n  padding: 1px 5px;\n}\n.form-wrap.form-builder .frmb .form-elements {\n  padding: 10px 5px;\n  background: #f7f7f7;\n  border-radius: 3px;\n  margin: 0;\n  border: 1px solid #c5c5c5;\n  /* smartphones, Android phones, landscape iPhone */\n}\n.form-wrap.form-builder .frmb .form-elements .input-wrap,\n.form-wrap.form-builder .frmb .form-elements .input-group-wrap {\n  width: 81.33333333%;\n  margin-left: 2%;\n}\n.form-wrap.form-builder .frmb .form-elements .input-wrap > input[type=checkbox],\n.form-wrap.form-builder .frmb .form-elements .input-group-wrap > input[type=checkbox] {\n  margin-top: 8px;\n}\n.form-wrap.form-builder .frmb .form-elements .btn-group {\n  margin-left: 2%;\n}\n.form-wrap.form-builder .frmb .form-elements .add {\n  clear: both;\n}\n.form-wrap.form-builder .frmb .form-elements [contenteditable],\n.form-wrap.form-builder .frmb .form-elements select[multiple] {\n  height: auto;\n}\n.form-wrap.form-builder .frmb .form-elements [contenteditable].form-control {\n  display: inline-block;\n}\n.form-wrap.form-builder .frmb .form-elements [contenteditable].form-control,\n.form-wrap.form-builder .frmb .form-elements input[type=text],\n.form-wrap.form-builder .frmb .form-elements input[type=number],\n.form-wrap.form-builder .frmb .form-elements input[type=date],\n.form-wrap.form-builder .frmb .form-elements input[type=color],\n.form-wrap.form-builder .frmb .form-elements textarea,\n.form-wrap.form-builder .frmb .form-elements select {\n  transition: background 250ms ease-in-out;\n  padding: 6px 12px;\n  border: 1px solid #c5c5c5;\n  background-color: #fff;\n}\n@media (max-width: 481px) {\n  .form-wrap.form-builder .frmb .form-elements .input-wrap {\n    width: 100%;\n    margin-left: 0;\n  }\n}\n.form-wrap.form-builder .frmb .form-elements input[type=number] {\n  width: auto;\n}\n.col-md-6 .form-wrap.form-builder .frmb .form-elements .false-label, .col-md-8 .form-wrap.form-builder .frmb .form-elements .false-label,\n.col-md-6 .form-wrap.form-builder .frmb .form-elements label,\n.col-md-8 .form-wrap.form-builder .frmb .form-elements label {\n  display: block;\n}\n.form-wrap.form-builder .frmb .form-elements .false-label:first-child,\n.form-wrap.form-builder .frmb .form-elements label:first-child {\n  width: 16.66666667%;\n  padding-top: 7px;\n  margin-bottom: 0;\n  text-align: right;\n  font-weight: 700;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-transform: capitalize;\n  /* smartphones, Android phones, landscape iPhone */\n}\n@media (max-width: 481px) {\n  .form-wrap.form-builder .frmb .form-elements .false-label:first-child,\n  .form-wrap.form-builder .frmb .form-elements label:first-child {\n    display: block;\n    width: auto;\n    text-align: left;\n  }\n  .form-wrap.form-builder .frmb .form-elements .false-label:first-child.empty-label,\n  .form-wrap.form-builder .frmb .form-elements label:first-child.empty-label {\n    display: none;\n  }\n}\n.form-wrap.form-builder .frmb .form-elements .false-label.multiple, .form-wrap.form-builder .frmb .form-elements .false-label.required-label, .form-wrap.form-builder .frmb .form-elements .false-label.toggle-label, .form-wrap.form-builder .frmb .form-elements .false-label.roles-label, .form-wrap.form-builder .frmb .form-elements .false-label.other-label,\n.form-wrap.form-builder .frmb .form-elements label.multiple,\n.form-wrap.form-builder .frmb .form-elements label.required-label,\n.form-wrap.form-builder .frmb .form-elements label.toggle-label,\n.form-wrap.form-builder .frmb .form-elements label.roles-label,\n.form-wrap.form-builder .frmb .form-elements label.other-label {\n  text-align: left;\n  margin-bottom: -3px;\n  font-weight: 400;\n  width: calc(81.3333% - 23px);\n}\n.form-wrap.form-builder .frmb .form-elements .input-group-wrap {\n  display: flex;\n  gap: 2em;\n}\n.form-wrap.form-builder .frmb .form-elements .input-group-wrap label {\n  width: auto;\n  display: block;\n  text-align: left;\n}\n.form-wrap.form-builder .frmb .form-elements .input-group-wrap .form-group {\n  flex-direction: column;\n  width: auto;\n}\n.form-wrap.form-builder .frmb .form-elements .input-group-wrap .input-wrap {\n  margin: 0;\n}\n.form-wrap.form-builder .frmb .form-elements input.error {\n  border: 1px solid #c10000;\n}\n.form-wrap.form-builder .frmb .form-elements input.fld-maxlength, .form-wrap.form-builder .frmb .form-elements input.fld-rows {\n  width: 75px;\n}\n.form-wrap.form-builder .frmb .form-elements input.field-error {\n  background: #fefefe;\n  border: 1px solid #c5c5c5;\n}\n.form-wrap.form-builder .frmb .form-elements label em {\n  display: block;\n  font-weight: 400;\n  font-size: 0.75em;\n}\n.form-wrap.form-builder .frmb .form-elements label.maxlength-label {\n  line-height: 1em;\n}\n.form-wrap.form-builder .frmb .form-elements .available-roles {\n  display: none;\n  padding: 10px;\n  margin: 10px 0;\n  background: #e6e6e6;\n  box-shadow: inset 0 0 2px 0 #b3b3b3;\n  /* smartphones, Android phones, landscape iPhone */\n}\n@media (max-width: 481px) {\n  .form-wrap.form-builder .frmb .form-elements .available-roles {\n    margin-left: 0;\n  }\n}\n.form-wrap.form-builder .frmb .form-elements .available-roles label {\n  font-weight: 400;\n  width: auto;\n  float: none;\n  display: inline;\n}\n.form-wrap.form-builder .frmb .form-elements .available-roles input {\n  display: inline;\n  top: auto;\n}\n.form-wrap.form-builder .autocomplete-field .sortable-options .option-selected {\n  display: none;\n}\n.formbuilder-mobile.form-wrap.form-builder .field-actions {\n  opacity: 1;\n}\n\n.form-wrap.form-builder .snackbar {\n  visibility: hidden; /* Hidden by default. Visible on click */\n  min-width: 250px; /* Set a default minimum width */\n  margin-left: -125px; /* Divide value of min-width by 2 */\n  background-color: #333; /* Black background color */\n  color: #fff; /* White text color */\n  text-align: center; /* Centered text */\n  border-radius: 2px; /* Rounded borders */\n  padding: 16px; /* Padding */\n  position: fixed; /* Sit on top of the screen */\n  z-index: 1; /* Add a z-index if needed */\n  left: 50%; /* Center the snackbar */\n  bottom: 30px; /* 30px from the bottom */\n}\n.form-wrap.form-builder .snackbar.show {\n  visibility: visible;\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n.form-wrap.form-builder .ui-state-highlight {\n  border-radius: 3px;\n  border: 1px dashed #0d99f2;\n  background-color: #e5f5f8;\n  width: 12px;\n}\n.form-wrap.form-builder .moveHighlight {\n  border: 1px dashed #0d99f2 !important;\n  background-color: #e5f5f8 !important;\n}\n.form-wrap.form-builder .currentGridModeFieldHighlight {\n  background-color: #e5f5f8 !important;\n}\n.form-wrap.form-builder .grid-mode-help {\n  background-color: #fff;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.form-wrap.form-builder .grid-mode-help-row1 {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 1px;\n}\n.form-wrap.form-builder .grid-mode-help-row2 {\n  white-space: nowrap;\n}\n.form-wrap.form-builder .colWithInsertButtons {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n  flex: 95 1 0% !important;\n}\n.form-wrap.form-builder .rowWrapper {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n.form-wrap.form-builder .rowWrapper:last-child {\n  flex-grow: 1;\n}\n.form-wrap.form-builder .rowWrapper:not(.tempRowWrapper) {\n  padding-top: 1em;\n  padding-bottom: 1em;\n}\n.form-wrap.form-builder .btnAddControl {\n  border: 0;\n  background-color: unset;\n}\n.form-wrap.form-builder .hoverColumnDropStyle {\n  border: 1px dashed #0d99f2;\n  border-radius: 3px;\n  background-color: #e5f5f8;\n  width: 20px;\n  position: fixed;\n  margin-left: 40px;\n}\n.form-wrap.form-builder .hoverDropStyleInverse {\n  background-color: #0d99f2;\n  border: 1px dashed #e5f5f8;\n  min-height: 20px;\n}\n.form-wrap.form-builder .hoverDropStyleInverse .colWrapper {\n  max-width: calc(100% - 40px);\n}\n.form-wrap.form-builder .stage-wrap > .hoverDropStyleInverse {\n  width: 100%;\n}\n.form-wrap.form-builder .rowWrapper > .hoverDropStyleInverse {\n  min-width: 40px;\n  flex-grow: 1;\n}\n.form-wrap.form-builder .hoverDropStyleInverse:last-child {\n  flex-grow: 1;\n}\n.form-wrap.form-builder .invisibleRowPlaceholder {\n  width: 0 !important;\n  position: fixed !important;\n  left: -100px !important;\n}\n.form-wrap.form-builder ol.options-no-select input[type=radio] {\n  display: none;\n}\n.form-wrap.form-builder .hidden {\n  display: none !important;\n}\n.form-wrap.form-builder .flex {\n  display: flex !important;\n}\n.form-wrap.form-builder *[tooltip] {\n  position: relative;\n}\n.form-wrap.form-builder *[tooltip]:hover::after {\n  background: rgba(0, 0, 0, 0.9);\n  border-radius: 5px 5px 5px 0;\n  bottom: 23px;\n  color: #fff;\n  content: attr(tooltip);\n  padding: 10px 5px;\n  position: absolute;\n  z-index: 98;\n  left: 2px;\n  width: 230px;\n  text-shadow: none;\n  font-size: 12px;\n  line-height: 1.5em;\n  cursor: default;\n}\n.form-wrap.form-builder *[tooltip]:hover::before {\n  border: solid;\n  border-color: #222 transparent;\n  border-width: 6px 6px 0;\n  bottom: 17px;\n  content: \"\";\n  left: 2px;\n  position: absolute;\n  z-index: 99;\n  cursor: default;\n}\n.form-wrap.form-builder .tooltip-element {\n  visibility: visible;\n  color: #fff;\n  background: #000;\n  width: 16px;\n  height: 16px;\n  border-radius: 8px;\n  display: inline-block;\n  text-align: center;\n  line-height: 16px;\n  margin: 0 5px;\n  font-size: 12px;\n  cursor: default;\n}\n.form-wrap.form-builder .kc-toggle {\n  display: flex;\n  align-items: center;\n}\n.form-wrap.form-builder .kc-toggle span {\n  position: relative;\n  width: 48px;\n  height: 24px;\n  background: #e6e6e6;\n  display: inline-block;\n  border-radius: 4px;\n  border: 1px solid #cccccc;\n  padding: 2px;\n  overflow: hidden;\n  margin-right: 5px;\n  will-change: transform;\n}\n.form-wrap.form-builder .kc-toggle span::after, .form-wrap.form-builder .kc-toggle span::before {\n  position: absolute;\n  display: inline-block;\n  top: 0;\n}\n.form-wrap.form-builder .kc-toggle span::after {\n  position: relative;\n  content: \"\";\n  width: 50%;\n  height: calc(100% - 2px);\n  left: 0;\n  border-radius: 3px;\n  background: linear-gradient(to bottom, white 0%, #ccc 100%);\n  border: 1px solid #999999;\n  transition: transform 100ms;\n  transform: translateX(0);\n}\n.form-wrap.form-builder .kc-toggle span::before {\n  border-radius: 4px;\n  top: 2px;\n  left: 2px;\n  content: \"\";\n  width: calc(100% - 4px);\n  height: 18px;\n  box-shadow: 0 0 1px 1px #b3b3b3 inset;\n  background-color: transparent;\n}\n.form-wrap.form-builder .kc-toggle input {\n  height: 0;\n  overflow: hidden;\n  width: 0;\n  opacity: 0;\n  pointer-events: none;\n  margin: 0;\n}\n.form-wrap.form-builder .kc-toggle input:checked + span::after {\n  transform: translateX(calc(100% - 4px));\n}\n.form-wrap.form-builder .kc-toggle input:checked + span::before {\n  background-color: #6fc665;\n}\n.form-wrap.form-builder.controls-left {\n  flex-direction: row-reverse;\n}\n.form-wrap.form-builder::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.form-wrap.form-builder .cb-wrap,\n.form-wrap.form-builder .stage-wrap {\n  vertical-align: top;\n}\n.form-wrap.form-builder .form-elements,\n.form-wrap.form-builder .multi-row span,\n.form-wrap.form-builder textarea {\n  display: block;\n}\n.form-wrap.form-builder .form-group {\n  display: flex;\n  flex-direction: row;\n}\n.form-wrap.form-builder .form-elements::after,\n.form-wrap.form-builder .form-group::after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n.form-wrap.form-builder .form-elements .field-options div:hover,\n.form-wrap.form-builder .frmb .legend,\n.form-wrap.form-builder .frmb .prev-holder {\n  cursor: move;\n}\n.form-wrap.form-builder .frmb-tt {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: 1px solid #262626;\n  background-color: #666;\n  border-radius: 5px;\n  padding: 5px;\n  color: #fff;\n  z-index: 20;\n  text-align: left;\n  font-size: 12px;\n  pointer-events: none;\n}\n.form-wrap.form-builder .frmb-tt::before {\n  border-color: #262626 transparent;\n  bottom: -11px;\n}\n.form-wrap.form-builder .frmb-tt::before, .form-wrap.form-builder .frmb-tt::after {\n  content: \"\";\n  position: absolute;\n  border-style: solid;\n  border-width: 10px 10px 0;\n  border-color: #666 transparent;\n  display: block;\n  width: 0;\n  z-index: 1;\n  margin-left: -10px;\n  bottom: -10px;\n  left: 20px;\n}\n.form-wrap.form-builder .frmb-tt a {\n  text-decoration: underline;\n  color: #fff;\n}\n\n.form-builder-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: none;\n  z-index: 10;\n}\n.form-builder-overlay.visible {\n  display: block;\n}\n\n.form-builder-dialog {\n  position: absolute;\n  border-radius: 5px;\n  background: #fff;\n  z-index: 20;\n  transform: translate(-50%, -50%);\n  top: 0;\n  left: 0;\n  padding: 10px;\n  box-shadow: 0 3px 10px #000;\n  min-width: 166px;\n  max-height: 80%;\n  overflow-y: scroll;\n}\n.form-builder-dialog h3 {\n  margin-top: 0;\n}\n.form-builder-dialog.data-dialog {\n  width: 65%;\n  background-color: #23241f;\n}\n.form-builder-dialog.data-dialog pre {\n  background: none;\n  border: 0 none;\n  box-shadow: none;\n  margin: 0;\n  color: #f2f2f2;\n}\n.form-builder-dialog.positioned {\n  transform: translate(-50%, -100%);\n}\n.form-builder-dialog.positioned .button-wrap::before {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent;\n  border-top: 10px solid #fff;\n  position: absolute;\n  left: 50%;\n  top: 100%;\n  transform: translate(-50%, 10px);\n}\n.form-builder-dialog .button-wrap {\n  position: relative;\n  margin-top: 10px;\n  text-align: right;\n  clear: both;\n}\n.form-builder-dialog .button-wrap .btn {\n  margin-left: 10px;\n}/*$vite$:1*/"));			document.head.appendChild(elementStyle);		}	} catch (e) {		console.error("vite-plugin-css-injected-by-js", e);	}})();
(function($) {
	"use strict";
	/*!
	* jQuery formBuilder: https://formbuilder.online/
	Version: 3.23.0
	Author: Kevin Chappell <kevin.b.chappell@gmail.com>
	*/
	(function(factory) {
		typeof define === "function" && define.amd ? define([], factory) : factory();
	})(function() {
		//#region \0rolldown/runtime.js
		var __create = Object.create;
		var __defProp = Object.defineProperty;
		var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
		var __getOwnPropNames = Object.getOwnPropertyNames;
		var __getProtoOf = Object.getPrototypeOf;
		var __hasOwnProp = Object.prototype.hasOwnProperty;
		var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
		var __copyProps = (to, from, except, desc) => {
			if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
				key = keys[i];
				if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
					get: ((k) => from[k]).bind(null, key),
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
			}
			return to;
		};
		var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
			value: mod,
			enumerable: true
		}) : target, mod));
		//#endregion
		//#region node_modules/lodash/isObject.js
		var require_isObject = /* @__PURE__ */ __commonJSMin(((exports, module) => {
			/**
			* Checks if `value` is the
			* [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
			* of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is an object, else `false`.
			* @example
			*
			* _.isObject({});
			* // => true
			*
			* _.isObject([1, 2, 3]);
			* // => true
			*
			* _.isObject(_.noop);
			* // => true
			*
			* _.isObject(null);
			* // => false
			*/
			function isObject(value) {
				var type = typeof value;
				return value != null && (type == "object" || type == "function");
			}
			module.exports = isObject;
		}));
		//#endregion
		//#region node_modules/lodash/_freeGlobal.js
		var require__freeGlobal = /* @__PURE__ */ __commonJSMin(((exports, module) => {
			module.exports = typeof global == "object" && global && global.Object === Object && global;
		}));
		//#endregion
		//#region node_modules/lodash/_root.js
		var require__root = /* @__PURE__ */ __commonJSMin(((exports, module) => {
			var freeGlobal = require__freeGlobal();
			/** Detect free variable `self`. */
			var freeSelf = typeof self == "object" && self && self.Object === Object && self;
			module.exports = freeGlobal || freeSelf || Function("return this")();
		}));
		//#endregion
		//#region node_modules/lodash/now.js
		var require_now = /* @__PURE__ */ __commonJSMin(((exports, module) => {
			var root = require__root();
			/**
			* Gets the timestamp of the number of milliseconds that have elapsed since
			* the Unix epoch (1 January 1970 00:00:00 UTC).
			*
			* @static
			* @memberOf _
			* @since 2.4.0
			* @category Date
			* @returns {number} Returns the timestamp.
			* @example
			*
			* _.defer(function(stamp) {
			*   console.log(_.now() - stamp);
			* }, _.now());
			* // => Logs the number of milliseconds it took for the deferred invocation.
			*/
			var now = function() {
				return root.Date.now();
			};
			module.exports = now;
		}));
		//#endregion
		//#region node_modules/lodash/_trimmedEndIndex.js
		var require__trimmedEndIndex = /* @__PURE__ */ __commonJSMin(((exports, module) => {
			/** Used to match a single whitespace character. */
			var reWhitespace = /\s/;
			/**
			* Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
			* character of `string`.
			*
			* @private
			* @param {string} string The string to inspect.
			* @returns {number} Returns the index of the last non-whitespace character.
			*/
			function trimmedEndIndex(string) {
				var index = string.length;
				while (index-- && reWhitespace.test(string.charAt(index)));
				return index;
			}
			module.exports = trimmedEndIndex;
		}));
		//#endregion
		//#region node_modules/lodash/_baseTrim.js
		var require__baseTrim = /* @__PURE__ */ __commonJSMin(((exports, module) => {
			var trimmedEndIndex = require__trimmedEndIndex();
			/** Used to match leading whitespace. */
			var reTrimStart = /^\s+/;
			/**
			* The base implementation of `_.trim`.
			*
			* @private
			* @param {string} string The string to trim.
			* @returns {string} Returns the trimmed string.
			*/
			function baseTrim(string) {
				return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
			}
			module.exports = baseTrim;
		}));
		//#endregion
		//#region node_modules/lodash/_Symbol.js
		var require__Symbol = /* @__PURE__ */ __commonJSMin(((exports, module) => {
			module.exports = require__root().Symbol;
		}));
		//#endregion
		//#region node_modules/lodash/_getRawTag.js
		var require__getRawTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
			var Symbol = require__Symbol();
			/** Used for built-in method references. */
			var objectProto = Object.prototype;
			/** Used to check objects for own properties. */
			var hasOwnProperty = objectProto.hasOwnProperty;
			/**
			* Used to resolve the
			* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
			* of values.
			*/
			var nativeObjectToString = objectProto.toString;
			/** Built-in value references. */
			var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
			/**
			* A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
			*
			* @private
			* @param {*} value The value to query.
			* @returns {string} Returns the raw `toStringTag`.
			*/
			function getRawTag(value) {
				var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
				try {
					value[symToStringTag] = void 0;
					var unmasked = true;
				} catch (e) {}
				var result = nativeObjectToString.call(value);
				if (unmasked) if (isOwn) value[symToStringTag] = tag;
				else delete value[symToStringTag];
				return result;
			}
			module.exports = getRawTag;
		}));
		//#endregion
		//#region node_modules/lodash/_objectToString.js
		var require__objectToString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
			/**
			* Used to resolve the
			* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
			* of values.
			*/
			var nativeObjectToString = Object.prototype.toString;
			/**
			* Converts `value` to a string using `Object.prototype.toString`.
			*
			* @private
			* @param {*} value The value to convert.
			* @returns {string} Returns the converted string.
			*/
			function objectToString(value) {
				return nativeObjectToString.call(value);
			}
			module.exports = objectToString;
		}));
		//#endregion
		//#region node_modules/lodash/_baseGetTag.js
		var require__baseGetTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
			var Symbol = require__Symbol(), getRawTag = require__getRawTag(), objectToString = require__objectToString();
			/** `Object#toString` result references. */
			var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
			/** Built-in value references. */
			var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
			/**
			* The base implementation of `getTag` without fallbacks for buggy environments.
			*
			* @private
			* @param {*} value The value to query.
			* @returns {string} Returns the `toStringTag`.
			*/
			function baseGetTag(value) {
				if (value == null) return value === void 0 ? undefinedTag : nullTag;
				return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
			}
			module.exports = baseGetTag;
		}));
		//#endregion
		//#region node_modules/lodash/isObjectLike.js
		var require_isObjectLike = /* @__PURE__ */ __commonJSMin(((exports, module) => {
			/**
			* Checks if `value` is object-like. A value is object-like if it's not `null`
			* and has a `typeof` result of "object".
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is object-like, else `false`.
			* @example
			*
			* _.isObjectLike({});
			* // => true
			*
			* _.isObjectLike([1, 2, 3]);
			* // => true
			*
			* _.isObjectLike(_.noop);
			* // => false
			*
			* _.isObjectLike(null);
			* // => false
			*/
			function isObjectLike(value) {
				return value != null && typeof value == "object";
			}
			module.exports = isObjectLike;
		}));
		//#endregion
		//#region node_modules/lodash/isSymbol.js
		var require_isSymbol = /* @__PURE__ */ __commonJSMin(((exports, module) => {
			var baseGetTag = require__baseGetTag(), isObjectLike = require_isObjectLike();
			/** `Object#toString` result references. */
			var symbolTag = "[object Symbol]";
			/**
			* Checks if `value` is classified as a `Symbol` primitive or object.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
			* @example
			*
			* _.isSymbol(Symbol.iterator);
			* // => true
			*
			* _.isSymbol('abc');
			* // => false
			*/
			function isSymbol(value) {
				return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
			}
			module.exports = isSymbol;
		}));
		//#endregion
		//#region node_modules/lodash/toNumber.js
		var require_toNumber = /* @__PURE__ */ __commonJSMin(((exports, module) => {
			var baseTrim = require__baseTrim(), isObject = require_isObject(), isSymbol = require_isSymbol();
			/** Used as references for various `Number` constants. */
			var NAN = NaN;
			/** Used to detect bad signed hexadecimal string values. */
			var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
			/** Used to detect binary string values. */
			var reIsBinary = /^0b[01]+$/i;
			/** Used to detect octal string values. */
			var reIsOctal = /^0o[0-7]+$/i;
			/** Built-in method references without a dependency on `root`. */
			var freeParseInt = parseInt;
			/**
			* Converts `value` to a number.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Lang
			* @param {*} value The value to process.
			* @returns {number} Returns the number.
			* @example
			*
			* _.toNumber(3.2);
			* // => 3.2
			*
			* _.toNumber(Number.MIN_VALUE);
			* // => 5e-324
			*
			* _.toNumber(Infinity);
			* // => Infinity
			*
			* _.toNumber('3.2');
			* // => 3.2
			*/
			function toNumber(value) {
				if (typeof value == "number") return value;
				if (isSymbol(value)) return NAN;
				if (isObject(value)) {
					var other = typeof value.valueOf == "function" ? value.valueOf() : value;
					value = isObject(other) ? other + "" : other;
				}
				if (typeof value != "string") return value === 0 ? value : +value;
				value = baseTrim(value);
				var isBinary = reIsBinary.test(value);
				return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
			}
			module.exports = toNumber;
		}));
		//#endregion
		//#region node_modules/lodash/debounce.js
		var require_debounce = /* @__PURE__ */ __commonJSMin(((exports, module) => {
			var isObject = require_isObject(), now = require_now(), toNumber = require_toNumber();
			/** Error message constants. */
			var FUNC_ERROR_TEXT = "Expected a function";
			var nativeMax = Math.max, nativeMin = Math.min;
			/**
			* Creates a debounced function that delays invoking `func` until after `wait`
			* milliseconds have elapsed since the last time the debounced function was
			* invoked. The debounced function comes with a `cancel` method to cancel
			* delayed `func` invocations and a `flush` method to immediately invoke them.
			* Provide `options` to indicate whether `func` should be invoked on the
			* leading and/or trailing edge of the `wait` timeout. The `func` is invoked
			* with the last arguments provided to the debounced function. Subsequent
			* calls to the debounced function return the result of the last `func`
			* invocation.
			*
			* **Note:** If `leading` and `trailing` options are `true`, `func` is
			* invoked on the trailing edge of the timeout only if the debounced function
			* is invoked more than once during the `wait` timeout.
			*
			* If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
			* until to the next tick, similar to `setTimeout` with a timeout of `0`.
			*
			* See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
			* for details over the differences between `_.debounce` and `_.throttle`.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Function
			* @param {Function} func The function to debounce.
			* @param {number} [wait=0] The number of milliseconds to delay.
			* @param {Object} [options={}] The options object.
			* @param {boolean} [options.leading=false]
			*  Specify invoking on the leading edge of the timeout.
			* @param {number} [options.maxWait]
			*  The maximum time `func` is allowed to be delayed before it's invoked.
			* @param {boolean} [options.trailing=true]
			*  Specify invoking on the trailing edge of the timeout.
			* @returns {Function} Returns the new debounced function.
			* @example
			*
			* // Avoid costly calculations while the window size is in flux.
			* jQuery(window).on('resize', _.debounce(calculateLayout, 150));
			*
			* // Invoke `sendMail` when clicked, debouncing subsequent calls.
			* jQuery(element).on('click', _.debounce(sendMail, 300, {
			*   'leading': true,
			*   'trailing': false
			* }));
			*
			* // Ensure `batchLog` is invoked once after 1 second of debounced calls.
			* var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
			* var source = new EventSource('/stream');
			* jQuery(source).on('message', debounced);
			*
			* // Cancel the trailing debounced invocation.
			* jQuery(window).on('popstate', debounced.cancel);
			*/
			function debounce(func, wait, options) {
				var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
				if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
				wait = toNumber(wait) || 0;
				if (isObject(options)) {
					leading = !!options.leading;
					maxing = "maxWait" in options;
					maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
					trailing = "trailing" in options ? !!options.trailing : trailing;
				}
				function invokeFunc(time) {
					var args = lastArgs, thisArg = lastThis;
					lastArgs = lastThis = void 0;
					lastInvokeTime = time;
					result = func.apply(thisArg, args);
					return result;
				}
				function leadingEdge(time) {
					lastInvokeTime = time;
					timerId = setTimeout(timerExpired, wait);
					return leading ? invokeFunc(time) : result;
				}
				function remainingWait(time) {
					var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
					return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
				}
				function shouldInvoke(time) {
					var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
					return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
				}
				function timerExpired() {
					var time = now();
					if (shouldInvoke(time)) return trailingEdge(time);
					timerId = setTimeout(timerExpired, remainingWait(time));
				}
				function trailingEdge(time) {
					timerId = void 0;
					if (trailing && lastArgs) return invokeFunc(time);
					lastArgs = lastThis = void 0;
					return result;
				}
				function cancel() {
					if (timerId !== void 0) clearTimeout(timerId);
					lastInvokeTime = 0;
					lastArgs = lastCallTime = lastThis = timerId = void 0;
				}
				function flush() {
					return timerId === void 0 ? result : trailingEdge(now());
				}
				function debounced() {
					var time = now(), isInvoking = shouldInvoke(time);
					lastArgs = arguments;
					lastThis = this;
					lastCallTime = time;
					if (isInvoking) {
						if (timerId === void 0) return leadingEdge(lastCallTime);
						if (maxing) {
							clearTimeout(timerId);
							timerId = setTimeout(timerExpired, wait);
							return invokeFunc(lastCallTime);
						}
					}
					if (timerId === void 0) timerId = setTimeout(timerExpired, wait);
					return result;
				}
				debounced.cancel = cancel;
				debounced.flush = flush;
				return debounced;
			}
			module.exports = debounce;
		}));
		//#endregion
		//#region src/js/dom.js
		var import_throttle = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
			var debounce = require_debounce(), isObject = require_isObject();
			/** Error message constants. */
			var FUNC_ERROR_TEXT = "Expected a function";
			/**
			* Creates a throttled function that only invokes `func` at most once per
			* every `wait` milliseconds. The throttled function comes with a `cancel`
			* method to cancel delayed `func` invocations and a `flush` method to
			* immediately invoke them. Provide `options` to indicate whether `func`
			* should be invoked on the leading and/or trailing edge of the `wait`
			* timeout. The `func` is invoked with the last arguments provided to the
			* throttled function. Subsequent calls to the throttled function return the
			* result of the last `func` invocation.
			*
			* **Note:** If `leading` and `trailing` options are `true`, `func` is
			* invoked on the trailing edge of the timeout only if the throttled function
			* is invoked more than once during the `wait` timeout.
			*
			* If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
			* until to the next tick, similar to `setTimeout` with a timeout of `0`.
			*
			* See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
			* for details over the differences between `_.throttle` and `_.debounce`.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Function
			* @param {Function} func The function to throttle.
			* @param {number} [wait=0] The number of milliseconds to throttle invocations to.
			* @param {Object} [options={}] The options object.
			* @param {boolean} [options.leading=true]
			*  Specify invoking on the leading edge of the timeout.
			* @param {boolean} [options.trailing=true]
			*  Specify invoking on the trailing edge of the timeout.
			* @returns {Function} Returns the new throttled function.
			* @example
			*
			* // Avoid excessively updating the position while scrolling.
			* jQuery(window).on('scroll', _.throttle(updatePosition, 100));
			*
			* // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
			* var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
			* jQuery(element).on('click', throttled);
			*
			* // Cancel the trailing throttled invocation.
			* jQuery(window).on('popstate', throttled.cancel);
			*/
			function throttle(func, wait, options) {
				var leading = true, trailing = true;
				if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
				if (isObject(options)) {
					leading = "leading" in options ? !!options.leading : leading;
					trailing = "trailing" in options ? !!options.trailing : trailing;
				}
				return debounce(func, wait, {
					"leading": leading,
					"maxWait": wait,
					"trailing": trailing
				});
			}
			module.exports = throttle;
		})))());
		var instanceDom = {};
		var defaultSubtypes = {
			text: [
				"text",
				"password",
				"email",
				"color",
				"tel"
			],
			header: [
				"h1",
				"h2",
				"h3"
			],
			button: [
				"button",
				"submit",
				"reset"
			],
			paragraph: [
				"p",
				"address",
				"blockquote",
				"canvas",
				"output"
			],
			textarea: ["textarea", "quill"]
		};
		/**
		* Removes a dom node
		* @param {Node} element
		*/
		var remove = (element) => {
			if (element.parentNode) element.parentNode.removeChild(element);
		};
		/**
		* Util to remove contents of DOM Node
		* @param  {HTMLElement} element
		* @return {HTMLElement} element with its children removed
		*/
		var empty = (element) => {
			while (element.firstChild) element.removeChild(element.firstChild);
			return element;
		};
		/**
		* Hide or show an Array|HTMLCollection of elements containing a case-insensitive string
		* @param  {HTMLElement[]|HTMLCollection}   elems
		* @param  {string}  term  match textContent to this term
		* @param  {boolean} [show=true] show or hide elements
		* @return {HTMLElement[]}         filtered elements
		*/
		var filter = (elems, term, show = true) => {
			const filteredElems = [];
			let toggle = ["none", "block"];
			if (show) toggle = toggle.reverse();
			for (let i = elems.length - 1; i >= 0; i--) if (elems[i].textContent.toLowerCase().indexOf(term.toLowerCase()) !== -1) {
				elems[i].style.display = toggle[0];
				filteredElems.push(elems[i]);
			} else elems[i].style.display = toggle[1];
			return filteredElems;
		};
		var optionFields = [
			"select",
			"checkbox-group",
			"checkbox",
			"radio-group",
			"autocomplete"
		];
		var optionFieldsRegEx = new RegExp(`(${optionFields.join("|")})`);
		/**
		* Dom class.
		*/
		var Dom = class {
			/**
			* @type {HTMLUListElement}
			*/
			stage;
			/**
			* @type {HTMLElement}
			*/
			controls;
			/**
			* @type {HTMLElement}
			*/
			formActions;
			/**
			* @type {HTMLElement}
			*/
			editorWrap;
			/**
			* Set defaults
			* @param {string} formID
			* @return {Dom} Dom Instance
			*/
			constructor(formID) {
				this.optionFields = optionFields;
				this.optionFieldsRegEx = optionFieldsRegEx;
				this.subtypes = defaultSubtypes;
				/**
				* Util to remove contents of DOM Object
				* @param  {HTMLElement} element
				* @return {HTMLElement} element with its children removed
				*/
				this.empty = empty;
				/**
				* Hide or show an Array|HTMLCollection of elements containing a case-insensitive string
				* @param  {HTMLElement[]|HTMLCollection}   elems
				* @param  {string}  term  match textContent to this term
				* @param  {boolean} show  or hide elements
				* @return {HTMLElement[]}         filtered elements
				*/
				this.filter = filter;
				instanceDom[formID] = this;
				return instanceDom[formID];
			}
			/**
			* @callback onRenderCallback
			* @param {HTMLElement} evt - rendered node
			*/
			/**
			* Do something when a specific dom element renders
			*
			* @param {HTMLElement} node
			* @param {onRenderCallback} cb
			*/
			onRender(node, cb) {
				if (!node.parentElement) window.requestAnimationFrame(() => this.onRender(node, cb));
				else cb(node);
			}
		};
		//#endregion
		//#region src/js/data.js
		var instanceData = {};
		/**
		* Data Class
		* @todo  refactor. this should just be a standard Object
		* unless we move all data functionality here.
		*/
		var Data = class {
			/**
			* Set defaults
			* @param  {String} formID
			*/
			constructor(formID) {
				this.formData = {};
				this.formID = formID;
				instanceData[formID] = this;
			}
		};
		/*!
		* mi18n - https://github.com/Draggable/mi18n
		* Version: 0.4.7
		* Author: Kevin Chappell <kevin.b.chappell@gmail.com> (http://kevin-chappell.com)
		*/
		/*!
		* Determine if an object is a Buffer
		*
		* @author   Feross Aboukhadijeh <https://feross.org>
		* @license  MIT
		*/
		//#endregion
		//#region src/js/sanitizer.js
		var import_mi18n_min = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
			module.exports = function(e) {
				var t = {};
				function n(r) {
					if (t[r]) return t[r].exports;
					var o = t[r] = {
						i: r,
						l: !1,
						exports: {}
					};
					return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
				}
				return n.m = e, n.c = t, n.d = function(e, t, r) {
					n.o(e, t) || Object.defineProperty(e, t, {
						enumerable: !0,
						get: r
					});
				}, n.r = function(e) {
					"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
				}, n.t = function(e, t) {
					if (1 & t && (e = n(e)), 8 & t) return e;
					if (4 & t && "object" == typeof e && e && e.__esModule) return e;
					var r = Object.create(null);
					if (n.r(r), Object.defineProperty(r, "default", {
						enumerable: !0,
						value: e
					}), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function(t) {
						return e[t];
					}.bind(null, o));
					return r;
				}, n.n = function(e) {
					var t = e && e.__esModule ? function() {
						return e.default;
					} : function() {
						return e;
					};
					return n.d(t, "a", t), t;
				}, n.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t);
				}, n.p = "", n(n.s = 7);
			}([
				function(e, t, n) {
					"use strict";
					var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e;
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
					}, o = n(2), i = n(10), s = Object.prototype.toString;
					function a(e) {
						return "[object Array]" === s.call(e);
					}
					function u(e) {
						return null !== e && "object" === (void 0 === e ? "undefined" : r(e));
					}
					function c(e) {
						return "[object Function]" === s.call(e);
					}
					function f(e, t) {
						if (null !== e && void 0 !== e) if ("object" !== (void 0 === e ? "undefined" : r(e)) && (e = [e]), a(e)) for (var n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e);
						else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
					}
					e.exports = {
						isArray: a,
						isArrayBuffer: function(e) {
							return "[object ArrayBuffer]" === s.call(e);
						},
						isBuffer: i,
						isFormData: function(e) {
							return "undefined" != typeof FormData && e instanceof FormData;
						},
						isArrayBufferView: function(e) {
							return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
						},
						isString: function(e) {
							return "string" == typeof e;
						},
						isNumber: function(e) {
							return "number" == typeof e;
						},
						isObject: u,
						isUndefined: function(e) {
							return void 0 === e;
						},
						isDate: function(e) {
							return "[object Date]" === s.call(e);
						},
						isFile: function(e) {
							return "[object File]" === s.call(e);
						},
						isBlob: function(e) {
							return "[object Blob]" === s.call(e);
						},
						isFunction: c,
						isStream: function(e) {
							return u(e) && c(e.pipe);
						},
						isURLSearchParams: function(e) {
							return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
						},
						isStandardBrowserEnv: function() {
							return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
						},
						forEach: f,
						merge: function e() {
							var t = {};
							function n(n, o) {
								"object" === r(t[o]) && "object" === (void 0 === n ? "undefined" : r(n)) ? t[o] = e(t[o], n) : t[o] = n;
							}
							for (var o = 0, i = arguments.length; o < i; o++) f(arguments[o], n);
							return t;
						},
						extend: function(e, t, n) {
							return f(t, function(t, r) {
								e[r] = n && "function" == typeof t ? o(t, n) : t;
							}), e;
						},
						trim: function(e) {
							return e.replace(/^\s*/, "").replace(/\s*$/, "");
						}
					};
				},
				function(e, t, n) {
					"use strict";
					(function(t) {
						var r = n(0), o = n(13), i = { "Content-Type": "application/x-www-form-urlencoded" };
						function s(e, t) {
							!r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
						}
						var a = {
							adapter: function() {
								var e;
								return "undefined" != typeof XMLHttpRequest ? e = n(3) : void 0 !== t && (e = n(3)), e;
							}(),
							transformRequest: [function(e, t) {
								return o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e;
							}],
							transformResponse: [function(e) {
								if ("string" == typeof e) try {
									e = JSON.parse(e);
								} catch (e) {}
								return e;
							}],
							timeout: 0,
							xsrfCookieName: "XSRF-TOKEN",
							xsrfHeaderName: "X-XSRF-TOKEN",
							maxContentLength: -1,
							validateStatus: function(e) {
								return e >= 200 && e < 300;
							},
							headers: { common: { Accept: "application/json, text/plain, */*" } }
						};
						r.forEach([
							"delete",
							"get",
							"head"
						], function(e) {
							a.headers[e] = {};
						}), r.forEach([
							"post",
							"put",
							"patch"
						], function(e) {
							a.headers[e] = r.merge(i);
						}), e.exports = a;
					}).call(this, n(12));
				},
				function(e, t, n) {
					"use strict";
					e.exports = function(e, t) {
						return function() {
							for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
							return e.apply(t, n);
						};
					};
				},
				function(e, t, n) {
					"use strict";
					var r = n(0), o = n(14), i = n(16), s = n(17), a = n(18), u = n(4), c = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(19);
					e.exports = function(e) {
						return new Promise(function(t, f) {
							var l = e.data, p = e.headers;
							r.isFormData(l) && delete p["Content-Type"];
							var d = new XMLHttpRequest(), h = "onreadystatechange", g = !1;
							if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in d || a(e.url) || (d = new window.XDomainRequest(), h = "onload", g = !0, d.onprogress = function() {}, d.ontimeout = function() {}), e.auth) {
								var m = e.auth.username || "", y = e.auth.password || "";
								p.Authorization = "Basic " + c(m + ":" + y);
							}
							if (d.open(e.method.toUpperCase(), i(e.url, e.params, e.paramsSerializer), !0), d.timeout = e.timeout, d[h] = function() {
								if (d && (4 === d.readyState || g) && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
									var n = "getAllResponseHeaders" in d ? s(d.getAllResponseHeaders()) : null;
									o(t, f, {
										data: e.responseType && "text" !== e.responseType ? d.response : d.responseText,
										status: 1223 === d.status ? 204 : d.status,
										statusText: 1223 === d.status ? "No Content" : d.statusText,
										headers: n,
										config: e,
										request: d
									}), d = null;
								}
							}, d.onerror = function() {
								f(u("Network Error", e, null, d)), d = null;
							}, d.ontimeout = function() {
								f(u("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", d)), d = null;
							}, r.isStandardBrowserEnv()) {
								var v = n(20), w = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? v.read(e.xsrfCookieName) : void 0;
								w && (p[e.xsrfHeaderName] = w);
							}
							if ("setRequestHeader" in d && r.forEach(p, function(e, t) {
								void 0 === l && "content-type" === t.toLowerCase() ? delete p[t] : d.setRequestHeader(t, e);
							}), e.withCredentials && (d.withCredentials = !0), e.responseType) try {
								d.responseType = e.responseType;
							} catch (t) {
								if ("json" !== e.responseType) throw t;
							}
							"function" == typeof e.onDownloadProgress && d.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && d.upload && d.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
								d && (d.abort(), f(e), d = null);
							}), void 0 === l && (l = null), d.send(l);
						});
					};
				},
				function(e, t, n) {
					"use strict";
					var r = n(15);
					e.exports = function(e, t, n, o, i) {
						return r(new Error(e), t, n, o, i);
					};
				},
				function(e, t, n) {
					"use strict";
					e.exports = function(e) {
						return !(!e || !e.__CANCEL__);
					};
				},
				function(e, t, n) {
					"use strict";
					function r(e) {
						this.message = e;
					}
					r.prototype.toString = function() {
						return "Cancel" + (this.message ? ": " + this.message : "");
					}, r.prototype.__CANCEL__ = !0, e.exports = r;
				},
				function(e, t, n) {
					"use strict";
					t.__esModule = !0, t.I18N = void 0;
					var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e;
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
					}, o = function() {
						function e(e, t) {
							for (var n = 0; n < t.length; n++) {
								var r = t[n];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
							}
						}
						return function(t, n, r) {
							return n && e(t.prototype, n), r && e(t, r), t;
						};
					}(), i = n(8), s = {
						extension: ".lang",
						location: "assets/lang/",
						langs: ["en-US"],
						locale: "en-US",
						override: {}
					};
					t.default = new (t.I18N = (function() {
						function e() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
							(function(e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
							})(this, e), this.langs = Object.create(null), this.loaded = [], this.processConfig(t);
						}
						return e.prototype.processConfig = function(e) {
							var t = this, n = Object.assign({}, s, e), r = n.location, o = function(e, t) {
								var n = {};
								for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
								return n;
							}(n, ["location"]), i = r.replace(/\/?$/, "/");
							this.config = Object.assign({}, { location: i }, o);
							var a = this.config, u = a.override, c = a.preloaded, f = void 0 === c ? {} : c, l = Object.entries(this.langs).concat(Object.entries(u || f));
							this.langs = l.reduce(function(e, n) {
								var r = n[0], o = n[1];
								return e[r] = t.applyLanguage.call(t, r, o), e;
							}, {}), this.locale = this.config.locale || this.config.langs[0];
						}, e.prototype.init = function(e) {
							return this.processConfig.call(this, Object.assign({}, this.config, e)), this.setCurrent(this.locale);
						}, e.prototype.addLanguage = function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							t = "string" == typeof t ? this.processFile.call(this, t) : t, this.applyLanguage.call(this, e, t), this.config.langs.push("locale");
						}, e.prototype.getValue = function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
							return this.langs[t] && this.langs[t][e] || this.getFallbackValue(e);
						}, e.prototype.getFallbackValue = function(e) {
							var t = Object.values(this.langs).find(function(t) {
								return t[e];
							});
							return t && t[e];
						}, e.prototype.makeSafe = function(e) {
							var t = {
								"{": "\\{",
								"}": "\\}",
								"|": "\\|"
							};
							return e = e.replace(/\{|\}|\|/g, function(e) {
								return t[e];
							}), new RegExp(e, "g");
						}, e.prototype.put = function(e, t) {
							return this.current[e] = t;
						}, e.prototype.get = function(e, t) {
							var n = this.getValue(e);
							if (n) {
								var o = n.match(/\{[^}]+?\}/g), i = void 0;
								if (t && o) if ("object" === (void 0 === t ? "undefined" : r(t))) for (var s = 0; s < o.length; s++) i = o[s].substring(1, o[s].length - 1), n = n.replace(this.makeSafe(o[s]), t[i] || "");
								else n = n.replace(/\{[^}]+?\}/g, t);
								return n;
							}
						}, e.prototype.fromFile = function(e) {
							for (var t, n = e.split("\n"), r = {}, o = 0; o < n.length; o++) (t = n[o].match(/^(.+?) *?= *?([^\n]+)/)) && (r[t[1]] = t[2].replace(/^\s+|\s+$/, ""));
							return r;
						}, e.prototype.processFile = function(e) {
							return this.fromFile(e.replace(/\n\n/g, "\n"));
						}, e.prototype.loadLang = function(e) {
							var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = this;
							return new Promise(function(r, o) {
								if (-1 !== n.loaded.indexOf(e) && t) return n.applyLanguage.call(n, n.langs[e]), r(n.langs[e]);
								var s = [
									n.config.location,
									e,
									n.config.extension
								].join("");
								return (0, i.get)(s).then(function(t) {
									var o = t.data, i = n.processFile(o);
									return n.applyLanguage.call(n, e, i), n.loaded.push(e), r(n.langs[e]);
								}).catch(function() {
									r(n.applyLanguage.call(n, e));
								});
							});
						}, e.prototype.applyLanguage = function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = this.config.override[e] || {}, r = this.langs[e] || {};
							return this.langs[e] = Object.assign({}, r, t, n), this.langs[e];
						}, e.prototype.setCurrent = function() {
							var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-US";
							return this.loadLang(t).then(function() {
								return e.locale = t, e.current = e.langs[t], e.current;
							});
						}, o(e, [{
							key: "getLangs",
							get: function() {
								return this.config.langs;
							}
						}]), e;
					}()))();
				},
				function(e, t, n) {
					"use strict";
					e.exports = n(9);
				},
				function(e, t, n) {
					"use strict";
					var r = n(0), o = n(2), i = n(11), s = n(1);
					function a(e) {
						var t = new i(e), n = o(i.prototype.request, t);
						return r.extend(n, i.prototype, t), r.extend(n, t), n;
					}
					var u = a(s);
					u.Axios = i, u.create = function(e) {
						return a(r.merge(s, e));
					}, u.Cancel = n(6), u.CancelToken = n(26), u.isCancel = n(5), u.all = function(e) {
						return Promise.all(e);
					}, u.spread = n(27), e.exports = u, e.exports.default = u;
				},
				function(e, t, n) {
					"use strict";
					function r(e) {
						return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
					}
					e.exports = function(e) {
						return null != e && (r(e) || function(e) {
							return "function" == typeof e.readFloatLE && "function" == typeof e.slice && r(e.slice(0, 0));
						}(e) || !!e._isBuffer);
					};
				},
				function(e, t, n) {
					"use strict";
					var r = n(1), o = n(0), i = n(21), s = n(22);
					function a(e) {
						this.defaults = e, this.interceptors = {
							request: new i(),
							response: new i()
						};
					}
					a.prototype.request = function(e) {
						"string" == typeof e && (e = o.merge({ url: arguments[0] }, arguments[1])), (e = o.merge(r, { method: "get" }, this.defaults, e)).method = e.method.toLowerCase();
						var t = [s, void 0], n = Promise.resolve(e);
						for (this.interceptors.request.forEach(function(e) {
							t.unshift(e.fulfilled, e.rejected);
						}), this.interceptors.response.forEach(function(e) {
							t.push(e.fulfilled, e.rejected);
						}); t.length;) n = n.then(t.shift(), t.shift());
						return n;
					}, o.forEach([
						"delete",
						"get",
						"head",
						"options"
					], function(e) {
						a.prototype[e] = function(t, n) {
							return this.request(o.merge(n || {}, {
								method: e,
								url: t
							}));
						};
					}), o.forEach([
						"post",
						"put",
						"patch"
					], function(e) {
						a.prototype[e] = function(t, n, r) {
							return this.request(o.merge(r || {}, {
								method: e,
								url: t,
								data: n
							}));
						};
					}), e.exports = a;
				},
				function(e, t, n) {
					"use strict";
					var r, o, i = e.exports = {};
					function s() {
						throw new Error("setTimeout has not been defined");
					}
					function a() {
						throw new Error("clearTimeout has not been defined");
					}
					function u(e) {
						if (r === setTimeout) return setTimeout(e, 0);
						if ((r === s || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
						try {
							return r(e, 0);
						} catch (t) {
							try {
								return r.call(null, e, 0);
							} catch (t) {
								return r.call(this, e, 0);
							}
						}
					}
					(function() {
						try {
							r = "function" == typeof setTimeout ? setTimeout : s;
						} catch (e) {
							r = s;
						}
						try {
							o = "function" == typeof clearTimeout ? clearTimeout : a;
						} catch (e) {
							o = a;
						}
					})();
					var c, f = [], l = !1, p = -1;
					function d() {
						l && c && (l = !1, c.length ? f = c.concat(f) : p = -1, f.length && h());
					}
					function h() {
						if (!l) {
							var e = u(d);
							l = !0;
							for (var t = f.length; t;) {
								for (c = f, f = []; ++p < t;) c && c[p].run();
								p = -1, t = f.length;
							}
							c = null, l = !1, function(e) {
								if (o === clearTimeout) return clearTimeout(e);
								if ((o === a || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
								try {
									o(e);
								} catch (t) {
									try {
										return o.call(null, e);
									} catch (t) {
										return o.call(this, e);
									}
								}
							}(e);
						}
					}
					function g(e, t) {
						this.fun = e, this.array = t;
					}
					function m() {}
					i.nextTick = function(e) {
						var t = new Array(arguments.length - 1);
						if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
						f.push(new g(e, t)), 1 !== f.length || l || u(h);
					}, g.prototype.run = function() {
						this.fun.apply(null, this.array);
					}, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function(e) {
						return [];
					}, i.binding = function(e) {
						throw new Error("process.binding is not supported");
					}, i.cwd = function() {
						return "/";
					}, i.chdir = function(e) {
						throw new Error("process.chdir is not supported");
					}, i.umask = function() {
						return 0;
					};
				},
				function(e, t, n) {
					"use strict";
					var r = n(0);
					e.exports = function(e, t) {
						r.forEach(e, function(n, r) {
							r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]);
						});
					};
				},
				function(e, t, n) {
					"use strict";
					var r = n(4);
					e.exports = function(e, t, n) {
						var o = n.config.validateStatus;
						n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n);
					};
				},
				function(e, t, n) {
					"use strict";
					e.exports = function(e, t, n, r, o) {
						return e.config = t, n && (e.code = n), e.request = r, e.response = o, e;
					};
				},
				function(e, t, n) {
					"use strict";
					var r = n(0);
					function o(e) {
						return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
					}
					e.exports = function(e, t, n) {
						if (!t) return e;
						var i;
						if (n) i = n(t);
						else if (r.isURLSearchParams(t)) i = t.toString();
						else {
							var s = [];
							r.forEach(t, function(e, t) {
								null !== e && void 0 !== e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, function(e) {
									r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), s.push(o(t) + "=" + o(e));
								}));
							}), i = s.join("&");
						}
						return i && (e += (-1 === e.indexOf("?") ? "?" : "&") + i), e;
					};
				},
				function(e, t, n) {
					"use strict";
					var r = n(0), o = [
						"age",
						"authorization",
						"content-length",
						"content-type",
						"etag",
						"expires",
						"from",
						"host",
						"if-modified-since",
						"if-unmodified-since",
						"last-modified",
						"location",
						"max-forwards",
						"proxy-authorization",
						"referer",
						"retry-after",
						"user-agent"
					];
					e.exports = function(e) {
						var t, n, i, s = {};
						return e ? (r.forEach(e.split("\n"), function(e) {
							if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
								if (s[t] && o.indexOf(t) >= 0) return;
								s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n;
							}
						}), s) : s;
					};
				},
				function(e, t, n) {
					"use strict";
					var r = n(0);
					e.exports = r.isStandardBrowserEnv() ? function() {
						var e, t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
						function o(e) {
							var r = e;
							return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
								href: n.href,
								protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
								host: n.host,
								search: n.search ? n.search.replace(/^\?/, "") : "",
								hash: n.hash ? n.hash.replace(/^#/, "") : "",
								hostname: n.hostname,
								port: n.port,
								pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
							};
						}
						return e = o(window.location.href), function(t) {
							var n = r.isString(t) ? o(t) : t;
							return n.protocol === e.protocol && n.host === e.host;
						};
					}() : function() {
						return !0;
					};
				},
				function(e, t, n) {
					"use strict";
					function r() {
						this.message = "String contains an invalid character";
					}
					r.prototype = /* @__PURE__ */ new Error(), r.prototype.code = 5, r.prototype.name = "InvalidCharacterError", e.exports = function(e) {
						for (var t, n, o = String(e), i = "", s = 0, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; o.charAt(0 | s) || (a = "=", s % 1); i += a.charAt(63 & t >> 8 - s % 1 * 8)) {
							if ((n = o.charCodeAt(s += .75)) > 255) throw new r();
							t = t << 8 | n;
						}
						return i;
					};
				},
				function(e, t, n) {
					"use strict";
					var r = n(0);
					e.exports = r.isStandardBrowserEnv() ? {
						write: function(e, t, n, o, i, s) {
							var a = [];
							a.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), r.isString(o) && a.push("path=" + o), r.isString(i) && a.push("domain=" + i), !0 === s && a.push("secure"), document.cookie = a.join("; ");
						},
						read: function(e) {
							var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
							return t ? decodeURIComponent(t[3]) : null;
						},
						remove: function(e) {
							this.write(e, "", Date.now() - 864e5);
						}
					} : {
						write: function() {},
						read: function() {
							return null;
						},
						remove: function() {}
					};
				},
				function(e, t, n) {
					"use strict";
					var r = n(0);
					function o() {
						this.handlers = [];
					}
					o.prototype.use = function(e, t) {
						return this.handlers.push({
							fulfilled: e,
							rejected: t
						}), this.handlers.length - 1;
					}, o.prototype.eject = function(e) {
						this.handlers[e] && (this.handlers[e] = null);
					}, o.prototype.forEach = function(e) {
						r.forEach(this.handlers, function(t) {
							null !== t && e(t);
						});
					}, e.exports = o;
				},
				function(e, t, n) {
					"use strict";
					var r = n(0), o = n(23), i = n(5), s = n(1), a = n(24), u = n(25);
					function c(e) {
						e.cancelToken && e.cancelToken.throwIfRequested();
					}
					e.exports = function(e) {
						return c(e), e.baseURL && !a(e.url) && (e.url = u(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach([
							"delete",
							"get",
							"head",
							"post",
							"put",
							"patch",
							"common"
						], function(t) {
							delete e.headers[t];
						}), (e.adapter || s.adapter)(e).then(function(t) {
							return c(e), t.data = o(t.data, t.headers, e.transformResponse), t;
						}, function(t) {
							return i(t) || (c(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
						});
					};
				},
				function(e, t, n) {
					"use strict";
					var r = n(0);
					e.exports = function(e, t, n) {
						return r.forEach(n, function(n) {
							e = n(e, t);
						}), e;
					};
				},
				function(e, t, n) {
					"use strict";
					e.exports = function(e) {
						return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
					};
				},
				function(e, t, n) {
					"use strict";
					e.exports = function(e, t) {
						return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
					};
				},
				function(e, t, n) {
					"use strict";
					var r = n(6);
					function o(e) {
						if ("function" != typeof e) throw new TypeError("executor must be a function.");
						var t;
						this.promise = new Promise(function(e) {
							t = e;
						});
						var n = this;
						e(function(e) {
							n.reason || (n.reason = new r(e), t(n.reason));
						});
					}
					o.prototype.throwIfRequested = function() {
						if (this.reason) throw this.reason;
					}, o.source = function() {
						var e;
						return {
							token: new o(function(t) {
								e = t;
							}),
							cancel: e
						};
					}, e.exports = o;
				},
				function(e, t, n) {
					"use strict";
					e.exports = function(e) {
						return function(t) {
							return e.apply(null, t);
						};
					};
				}
			]);
		})))());
		/**
		* Sanitizer utility for handling untrusted HTML
		*/
		var sanitizerConfig = {
			clobberingProtection: {
				document: true,
				form: true,
				namespaceAttributes: false
			},
			backendOrder: [
				"dompurify",
				"sanitizer",
				"fallback"
			],
			backends: {
				sanitizer: (() => {
					if (typeof window["Sanitizer"] !== "function") return false;
					try {
						return new window.Sanitizer({
							elements: [
								"div",
								"p",
								"br",
								"span",
								"strong",
								"em",
								"b",
								"i",
								"u",
								"ul",
								"ol",
								"li",
								"a",
								"img",
								"table",
								"thead",
								"tbody",
								"tr",
								"th",
								"td",
								"form",
								"label",
								"input",
								"select",
								"option",
								"textarea",
								"button",
								"fieldset",
								"legend",
								"h1",
								"h2",
								"h3",
								"h4",
								"h5",
								"h6"
							],
							attributes: [
								"class",
								"id",
								"title",
								"contenteditable",
								"href",
								"target",
								"rel",
								"src",
								"alt",
								"width",
								"height",
								"type",
								"name",
								"value",
								"checked",
								"disabled",
								"placeholder",
								"required",
								"for",
								"selected",
								"rows",
								"cols",
								"multiple",
								"method",
								"action",
								"tabindex",
								"readonly",
								"minlength",
								"maxlength",
								"pattern",
								"autocomplete",
								"autofocus"
							],
							dataAttributes: true
						});
					} catch (e) {
						return false;
					}
				})(),
				dompurify: window.DOMPurify ? ((purify) => {
					purify.setConfig({
						SANITIZE_DOM: false,
						ADD_ATTR: ["contenteditable"]
					});
					return purify;
				})(window.DOMPurify) : false,
				fallback: (content) => content
			}
		};
		var setSanitizerConfig = (config) => {
			if (typeof config !== "object") throw "Invalid value given to setSanitizerConfig, expected config object";
			if (config.hasOwnProperty("clobberingProtection")) [
				"document",
				"form",
				"namespaceAttributes"
			].forEach((type) => {
				if (config.clobberingProtection.hasOwnProperty(type) && typeof config.clobberingProtection[type] === "boolean") sanitizerConfig.clobberingProtection[type] = config.clobberingProtection[type];
			});
			if (config.hasOwnProperty("backends")) if (typeof config.backends === "object") Object.keys(config.backends).forEach((implementation) => sanitizerConfig.backends[implementation] = config.backends[implementation]);
			else throw "backends config expected to be an Object";
			if (config.hasOwnProperty("backendOrder")) {
				sanitizerConfig.backendOrder = [];
				if (Array.isArray(config.backendOrder)) config.backendOrder.forEach((backend) => {
					if (sanitizerConfig.backends.hasOwnProperty(backend)) sanitizerConfig.backendOrder.push(backend);
					else throw "unknown sanitizer backend " + backend;
				});
				else throw "backendOrder config expected to be an Array of backend keys as strings";
			}
		};
		var isPotentiallyDangerousAttribute = (attrName, attrValue) => {
			if (sanitizerConfig.backendOrder.length === 0) return false;
			const attrNameLc = attrName.toLowerCase();
			attrValue = attrValue ? attrValue + "" : "";
			return attrNameLc.startsWith("on") || ["form", "formaction"].includes(attrNameLc) || attrValue.trim().toLowerCase().startsWith("javascript:");
		};
		function fallbackSanitizer(content) {
			const context = document.implementation.createHTMLDocument("");
			const base = context.createElement("base");
			base.href = document.location.href;
			context.head.appendChild(base);
			const exclude_tags = [
				"applet",
				"comment",
				"embed",
				"iframe",
				"link",
				"listing",
				"meta",
				"noscript",
				"object",
				"plaintext",
				"script",
				"style",
				"xmp"
			];
			const output = $.parseHTML(content, context, false);
			$(output).find("*").addBack().each((nindex, node) => {
				if (node.nodeName === "#text") return;
				if (node.tagName && exclude_tags.includes(node.tagName.toLowerCase())) {
					if (node.parentElement) node.parentElement.removeChild(node);
					else if (output.includes(node)) output.splice(output.indexOf(node), 1);
					return;
				}
				if (node.attributes) Array.from(node.attributes).forEach((attribute) => {
					if (isPotentiallyDangerousAttribute(attribute.name, attribute.value)) $(node).removeAttr(attribute.name);
				});
			});
			const tmp = context.createElement("div");
			$(tmp).html(output);
			return tmp.innerHTML;
		}
		sanitizerConfig.backends.fallback = fallbackSanitizer;
		var attributeWillClobber = (value) => {
			const check_doc = document;
			const check_form = document.createElement("form");
			return value in check_doc || value in check_form;
		};
		var sanitizeNamedAttribute = (value) => {
			const check_doc = sanitizerConfig.clobberingProtection.document ? document : false;
			const check_form = sanitizerConfig.clobberingProtection.form ? document.createElement("form") : false;
			if (check_doc && value in check_doc || check_form && value in check_form) return sanitizerConfig.clobberingProtection.namespaceAttributes ? "user-content-" + value : void 0;
			return value;
		};
		var sanitizeDomClobbering = (element) => {
			$(element).find("*").each((nindex, node) => {
				const protectedTypes = ["id", "name"];
				if ([
					"embed",
					"form",
					"iframe",
					"image",
					"img",
					"object"
				].includes(node.tagName.toLowerCase())) node.removeAttribute("name");
				protectedTypes.forEach((attrName) => {
					if (node.hasAttribute(attrName)) {
						const value = sanitizeNamedAttribute(node.getAttribute(attrName));
						if (value === void 0) node.removeAttribute(attrName);
						else node.setAttribute(attrName, value);
					}
				});
			});
			return element;
		};
		var sanitizersCallbacks = {
			fallback: (element, content) => {
				const purifier = sanitizerConfig.backends.fallback;
				const supported = typeof purifier === "function";
				if (supported) content = purifier(content);
				element.innerHTML = content;
				return supported;
			},
			dompurify: (element, content) => {
				const purifier = sanitizerConfig.backends.dompurify;
				if (purifier === false || !purifier.isSupported) return false;
				element.innerHTML = purifier.sanitize(content);
				return true;
			},
			sanitizer: (element, content) => {
				const sanitizer = sanitizerConfig.backends.sanitizer;
				if (sanitizer) {
					element.setHTML(content, { sanitizer });
					return true;
				}
				return false;
			}
		};
		var setElementContent = (element, content, asText = false) => {
			if (asText) element.textContent = content;
			else {
				const proxyElem = document.createElement(element.tagName);
				if (sanitizerConfig.backendOrder.find((type) => sanitizersCallbacks[type](proxyElem, content)) !== void 0) {
					sanitizeDomClobbering(proxyElem);
					element.innerHTML = proxyElem.innerHTML;
					return element;
				}
				element.innerHTML = content;
				return element;
			}
		};
		//#endregion
		//#region src/js/utils.js
		/**
		* Cross file utilities for working with arrays,
		* sorting and other fun stuff
		*/
		window.fbLoaded = {
			js: [],
			css: []
		};
		window.fbEditors = {
			quill: {},
			tinymce: {}
		};
		/**
		* Remove null, undefined, empty string or empty array values from an object, original object is not modified
		* @param  {Object} obj {attrName: attrValue}
		* @param {boolean} [removeFalse=false] Remove values === false
		* @return {Object} Object trimmed of null or undefined values
		*/
		var trimObj = function(obj, removeFalse = false) {
			if (null == obj || typeof obj !== "object") return obj;
			const attrs = typeof window.structuredClone === "function" ? window.structuredClone(obj) : Object.assign({}, obj);
			/** @type {(null|undefined|''|false)[]} xmlRemove */
			const xmlRemove = [
				null,
				void 0,
				""
			];
			if (removeFalse) xmlRemove.push(false);
			for (const attr in attrs) if (xmlRemove.includes(attrs[attr])) delete attrs[attr];
			else if (Array.isArray(attrs[attr])) {
				if (!attrs[attr].length) delete attrs[attr];
			}
			return attrs;
		};
		/**
		* Test if attribute is a valid HTML attribute
		* @param  {string} attr
		* @return {boolean}
		*/
		var validAttr = function(attr) {
			return ![
				"values",
				"enableOther",
				"other",
				"label",
				"subtype"
			].includes(attr);
		};
		/**
		* Convert an attrs object into a string for xml node
		* @param  {Object} attrs object of attributes for markup
		* @return {string}
		*/
		var xmlAttrString = (attrs) => Object.entries(attrs).map(([key, val]) => `${hyphenCase(key)}="${val}"`).join(" ");
		/**
		* Convert an attrs object into a string
		*
		* @param  {Object} attrs object of attributes for markup
		* @return {string}
		*/
		var attrString = (attrs) => Object.entries(attrs).map(([key, val]) => validAttr(key) && Object.values(safeAttr(key, val)).join("")).filter(Boolean).join(" ");
		/**
		* Convert attributes to markup safe strings
		* @param  {string} name  attribute name
		* @param  {string} value attribute value
		* @return {Object}       {attrName: attrValue}
		*/
		var safeAttr = (name, value) => {
			name = safeAttrName(name);
			let valString;
			if (value) if (Array.isArray(value)) valString = escapeAttr(value.join(" "));
			else {
				if (typeof value === "boolean") value = value.toString();
				valString = escapeAttr(value.trim());
			}
			value = value ? `="${valString}"` : "";
			return {
				name,
				value
			};
		};
		/**
		* recursively flatten a nested array
		* @param {Array} arr to be flattened
		* @return {Array} flattened array
		*/
		var flattenArray = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
		var safeAttrName = (name) => {
			return { className: "class" }[name] || hyphenCase(name);
		};
		/**
		* Converts a className string to a safe CSS class name by replacing bracket notation with hyphens.
		* Transforms square bracket notation (e.g., "class[name]") to hyphen-separated format (e.g., "class-name").
		* 
		* @param {string} className - The className string to be sanitized
		* @returns {string} The sanitized className with brackets replaced by hyphens
		* 
		* @example
		* safeClassName('form[field]') // returns 'form-field'
		* safeClassName('input[name][value]') // returns 'input-name-value'
		*/
		var safeClassName = (className) => className.replace(/\[([^\]]+)\]/g, "-$1");
		/**
		* Convert strings into lowercase-hyphen
		*
		* @param  {string} str
		* @return {string}
		*/
		var hyphenCase = (str) => {
			str = str.replace(/[^\w\s\-\[\]]/gi, "");
			str = safeClassName(str);
			str = str.replace(/([A-Z])/g, function($1) {
				return "-" + $1.toLowerCase();
			});
			return str.replace(/\s/g, "-").replace(/^-+/g, "");
		};
		/**
		* convert a hyphenated string to camelCase
		* @param  {string} str
		* @return {string}
		*/
		var camelCase = (str) => str.replace(/-([a-z])/g, (m, w) => w.toUpperCase());
		/**
		* Bind events to an element
		* @param  {EventTarget} element DOM element
		* @param  {Object} events  object full of events eg. {click: evt => callback}
		* @return {void}
		*/
		var bindEvents = (element, events) => {
			if (events) {
				for (const event in events) if (events.hasOwnProperty(event)) element.addEventListener(event, (evt) => events[event](evt));
			}
		};
		/**
		* Generate a unique name attribute
		* @param  {Object} field
		* @return {string}       name
		*/
		var nameAttr = (function() {
			let lepoch;
			let counter = 0;
			return function(field) {
				const epoch = Date.now();
				if (epoch === lepoch) ++counter;
				else {
					counter = 0;
					lepoch = epoch;
				}
				return (field.type || hyphenCase(field.label)) + "-" + epoch + "-" + counter;
			};
		})();
		/**
		* Determine content type
		* @param  {Node | String | Array | Object} content
		* @return {string}
		*/
		var getContentType = (content) => {
			if (content === void 0) return content;
			return [
				["array", (content) => Array.isArray(content)],
				["node", (content) => content instanceof window.Node || content instanceof window.HTMLElement],
				["component", () => content?.dom],
				[typeof content, () => true]
			].find((typeCondition) => typeCondition[1](content))[0];
		};
		/**
		* Generate markup wrapper where needed
		*
		* @param  {string} tag Tag name
		* @param  {string|Array|object|Node|Function|null} content content to wrap
		* @param  {Object} attributes attributes to assign to element
		* @return {HTMLElement} DOM Element
		*/
		var markup = function(tag, content = "", attributes = {}) {
			let contentType = getContentType(content);
			const { events, ...attrs } = attributes;
			const field = document.createElement(tag);
			const appendContent = {
				string: (content) => {
					setElementContent(field, field.innerHTML + content);
				},
				object: (config) => {
					const { tag, content, ...data } = config;
					return field.appendChild(markup(tag, content, data));
				},
				node: (content) => {
					return field.appendChild(content);
				},
				array: (content) => {
					for (let i = 0; i < content.length; i++) {
						contentType = getContentType(content[i]);
						appendContent[contentType](content[i]);
					}
				},
				function: (content) => {
					content = content();
					contentType = getContentType(content);
					appendContent[contentType](content);
				},
				undefined: () => {}
			};
			for (const attr in attrs) if (attrs.hasOwnProperty(attr)) {
				const name = safeAttrName(attr);
				let attrVal = Array.isArray(attrs[attr]) ? unique(attrs[attr].join(" ").split(" ")).join(" ") : attrs[attr];
				if (isPotentiallyDangerousAttribute(name, attrVal)) continue;
				if (typeof attrVal === "boolean") {
					if (attrVal === true) {
						const val = name === "contenteditable" ? true : name;
						field.setAttribute(name, val);
					}
				} else {
					if (name === "id" || name === "name") attrVal = sanitizeNamedAttribute(attrVal);
					if (attrVal !== void 0) field.setAttribute(name, attrVal);
				}
			}
			if (content) appendContent[contentType](content);
			bindEvents(field, events);
			return field;
		};
		/**
		* Convert html element attributes to key/value object
		* @private
		* @param  {Element} elem DOM element
		* @return {Object} ex: {attrName: attrValue}
		*/
		var xmlParseAttrs = (elem) => {
			const attrs = elem.attributes;
			const data = {};
			forEach(attrs, (attr) => {
				let attrVal = attrs[attr].value || "";
				if (attrVal.match(/false|true/g)) attrVal = attrVal === "true";
				else if (attrVal.match(/undefined/g)) attrVal = void 0;
				if (attrVal) data[camelCase(attrs[attr].name)] = attrVal;
			});
			return data;
		};
		/**
		* Convert field options to optionData
		* @private
		* @param  {NodeList} options  DOM elements
		* @return {Array} optionData array
		*/
		var xmlParseOptions = (options) => {
			const data = [];
			for (let i = 0; i < options.length; i++) {
				const optionData = {
					...xmlParseAttrs(options[i]),
					label: options[i].textContent
				};
				data.push(optionData);
			}
			return data;
		};
		/**
		* Convert field user data to userData
		* @private
		* @param  {NodeList} userData  DOM elements
		* @return {Array} optionData array
		*/
		var xmlParseUserData = (userData) => {
			const data = [];
			if (userData.length) {
				const values = userData[0].getElementsByTagName("value");
				for (let i = 0; i < values.length; i++) data.push(values[i].textContent);
			}
			return data;
		};
		/**
		* Parse XML formData
		* @param  {string} xmlString
		* @return {Array}            formData array
		*/
		var parseXML = (xmlString) => {
			const xml = new window.DOMParser().parseFromString(xmlString, "text/xml");
			const formData = [];
			if (xml) {
				const fields = xml.getElementsByTagName("field");
				for (let i = 0; i < fields.length; i++) {
					const fieldData = xmlParseAttrs(fields[i]);
					const options = fields[i].getElementsByTagName("option");
					const userData = fields[i].getElementsByTagName("userData");
					if (options && options.length) fieldData.values = xmlParseOptions(options);
					if (userData && userData.length) fieldData.userData = xmlParseUserData(userData);
					formData.push(fieldData);
				}
			}
			return formData;
		};
		/**
		* Converts escaped HTML into usable HTML
		* @param  {string} html escaped HTML
		* @return {string}      parsed HTML
		*/
		var parsedHtml = (html) => {
			const escapeElement = document.createElement("textarea");
			escapeElement.innerHTML = html;
			return escapeElement.textContent;
		};
		/**
		* Escape markup so it can be displayed rather than rendered
		* @param  {string} html markup
		* @return {string}      escaped html
		*/
		var escapeHtml = (html) => {
			const escapeElement = document.createElement("textarea");
			escapeElement.textContent = html;
			return escapeElement.innerHTML;
		};
		var escapeAttr = (str) => {
			const match = {
				"\"": "&quot;",
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;"
			};
			const replaceTag = (tag) => match[tag] || tag;
			return typeof str === "string" ? str.replace(/["&<>]/g, replaceTag) : str;
		};
		var escapeAttrs = (attrs) => {
			for (const attr in attrs) if (attrs.hasOwnProperty(attr)) attrs[attr] = escapeAttr(attrs[attr]);
			return attrs;
		};
		var forEach = function(array, callback, scope) {
			for (let i = 0; i < array.length; i++) callback.call(scope, i, array[i]);
		};
		/**
		* Remove duplicates from an array of elements
		* @param  {Array} array  array with possible duplicates
		* @return {Array}        array with only unique values
		*/
		var unique = (array) => {
			return array.filter((elem, pos, arr) => arr.indexOf(elem) === pos);
		};
		/**
		* Removes a value from an array
		* @param  {string|Number} val
		* @param  {Array} arr
		*/
		var removeFromArray = (val, arr) => {
			const index = arr.indexOf(val);
			if (index > -1) arr.splice(index, 1);
		};
		/**
		* Loads an array of scripts using jQuery's `getScript`
		* @param  {string[]|string}  scriptScr    scripts
		* @param  {String} [path='']   optional to load form
		* @return {Promise}       a promise
		*/
		var getScripts = (scriptScr, path = "") => {
			const $ = jQuery;
			let _arr = [];
			if (!Array.isArray(scriptScr)) scriptScr = [scriptScr];
			if (!isCached(scriptScr)) _arr = jQuery.map(scriptScr, (src) => {
				const options = {
					dataType: "script",
					cache: true,
					url: (path || "") + src
				};
				return jQuery.ajax(options).done(() => window.fbLoaded.js.push(src));
			});
			_arr.push(jQuery.Deferred((deferred) => $(deferred.resolve)));
			return jQuery.when(..._arr);
		};
		/**
		* Checks if remote resource is already loaded
		* @param  {string|Array} src  url of remote script or css
		* @param  {'js'|'css'}       [type='js']  type of remote resource
		* @return {boolean}      isCached
		*/
		var isCached = (src, type = "js") => {
			const cache = window.fbLoaded[type];
			return Array.isArray(src) ? src.every((s) => cache.includes(s)) : cache.includes(src);
		};
		/**
		* Appends stylesheets to the head
		* @param  {Array} scriptScr
		* @param  {String} [path='']
		* @return {void}
		*/
		var getStyles = (scriptScr, path = "") => {
			if (!Array.isArray(scriptScr)) scriptScr = [scriptScr];
			scriptScr.forEach((src) => {
				let type = "href";
				let key = src;
				let id = "";
				if (typeof src == "object") {
					type = src.type || (src.style ? "inline" : "href");
					id = src.id;
					key = id || src.href || src.style;
					src = type === "inline" ? src.style : src.href;
				}
				if (isCached(key, "css")) return;
				if (type === "href") {
					const link = document.createElement("link");
					link.type = "text/css";
					link.rel = "stylesheet";
					link.href = (path || "") + src;
					document.head.appendChild(link);
				} else $(`<style type="text/css">${src}</style>`).attr("id", id).appendTo($(document.head));
				window.fbLoaded.css.push(key);
			});
		};
		/**
		* Capitalizes a string
		* @param  {string} str uncapitalized string
		* @return {string} str capitalized string
		*/
		var capitalize = (str) => {
			return str.replace(/\b\w/g, function(m) {
				return m.toUpperCase();
			});
		};
		var merge = (obj1, obj2) => {
			const mergedObj = Object.assign({}, obj1, obj2);
			for (const prop in obj2) if (mergedObj.hasOwnProperty(prop)) if (Array.isArray(obj2[prop])) mergedObj[prop] = Array.isArray(obj1[prop]) ? unique(obj1[prop].concat(obj2[prop])) : obj2[prop];
			else if (typeof obj2[prop] === "object") mergedObj[prop] = merge(obj1[prop], obj2[prop]);
			else mergedObj[prop] = obj2[prop];
			return mergedObj;
		};
		/**
		* Apply the same event listener to multiple events
		* @param {Node} el
		* @param {string} evts events to bind to
		* @param {Function} cb
		* @return {Array} events
		*/
		var addEventListeners = (el, evts, cb) => evts.split(" ").forEach((e) => el.addEventListener(e, cb, false));
		/**
		* Find the closest parent by class
		* @param  {Object} el  DOM element
		* @param  {string} cls class
		* @return {Object}     DOM Element
		*/
		var closest = (el, cls) => {
			const className = cls.replace(".", "");
			while ((el = el.parentElement) && !el.classList.contains(className));
			return el;
		};
		/**
		* Add a mobile class
		* @todo find css only solution
		* @return {string} Mobile class added to formBuilder
		*/
		var mobileClass = () => {
			let mobileClass = "";
			((a) => {
				if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)) mobileClass = "formbuilder-mobile";
			})(navigator.userAgent || navigator.vendor || window.opera);
			return mobileClass;
		};
		/**
		* Make strings safe to be used as classes
		*
		* @param  {string} str string to be converted
		* @return {string}     converted string
		*/
		var safename = (str) => {
			return str.replace(/\s/g, "-").replace(/[^a-zA-Z0-9[\]_-]/g, "");
		};
		/**
		* Strips non-numbers from a number only input
		*
		* @param  {string} str string with possible number
		* @return {string}     string without numbers
		*/
		var forceNumber = (str) => str.replace(/[^0-9]/g, "");
		/**
		* subtract the contents of 1 array from another
		* @param {Array} arr
		* @param {Array} from
		* @returns {Array}
		*/
		var subtract = (arr, from) => {
			return from.filter(function(a) {
				return !~this.indexOf(a);
			}, arr);
		};
		var bootstrapColumnRegex = /^col-(xs|sm|md|lg)-([^\s]+)/;
		/**
		* Returns Array of classNames related to Bootstrap
		* @param {string} className
		* @returns {string[]}
		*/
		var getAllGridRelatedClasses = (className) => {
			return typeof className === "string" ? className.split(" ").filter((x) => bootstrapColumnRegex.test(x) || x.startsWith("row-")) : [];
		};
		/**
		*
		* @param {string} str
		* @return {string} titleized string
		*/
		function titleCase(str) {
			const lowers = [
				"a",
				"an",
				"and",
				"as",
				"at",
				"but",
				"by",
				"for",
				"for",
				"from",
				"in",
				"into",
				"near",
				"nor",
				"of",
				"on",
				"onto",
				"or",
				"the",
				"to",
				"with"
			].map((lower) => `\\s${lower}\\s`);
			const regex = new RegExp(`(?!${lowers.join("|")})\\w\\S*`, "g");
			return `${str}`.replace(regex, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).replace(/[A-Z]/g, (word) => ` ${word}`));
		}
		function firstNumberOrUndefined(...options) {
			return options.find((x) => typeof x === "number");
		}
		var utils = {
			addEventListeners,
			attrString,
			camelCase,
			capitalize,
			closest,
			getContentType,
			escapeAttr,
			escapeAttrs,
			escapeHtml,
			forceNumber,
			forEach,
			getScripts,
			getStyles,
			hyphenCase,
			isCached,
			markup,
			merge,
			mobileClass,
			nameAttr,
			parsedHtml,
			parseXML,
			removeFromArray,
			safeAttr,
			safeAttrName,
			safename,
			subtract,
			trimObj,
			unique,
			validAttr,
			titleCase,
			firstNumberOrUndefined
		};
		/**
		* Splits an object based on array of keys
		*
		* @param {Object} obj Object to be split
		* @param {Array}  keys Array of keys to use when splitting Object
		*
		* @return {Array} returns an array of Objects, the first where the keys matched,
		*                 the second where they did not
		*/
		utils.splitObject = (obj, keys) => {
			const reconstructObj = (initialObj) => (result, key) => {
				result[key] = initialObj[key];
				return result;
			};
			return [Object.keys(obj).filter((key) => keys.includes(key)).reduce(reconstructObj(obj), {}), Object.keys(obj).filter((key) => !keys.includes(key)).reduce(reconstructObj(obj), {})];
		};
		/**
		* jQuery function to Swap two elements positions in the dom
		* @param {Node} that
		* @returns {Node}
		*/
		$.fn.swapWith = function(that) {
			const $this = this;
			const $that = $(that);
			const $temp = $("<div>");
			$this.before($temp);
			$that.before($this);
			$temp.before($that).remove();
			return $this;
		};
		var generateSelectorClassNames = (classNamesObj) => Object.entries(classNamesObj).reduce((acc, [key, val]) => ({
			...acc,
			[`${key}Selector`]: `.${val}`
		}), {});
		//#endregion
		//#region src/js/control.js
		/**
		* Base class for all control classes
		* Defines the structure of a control class and some standard control methods
		*/
		var control = class control {
			/**
			* initialise the control object
			* @param {Object} config each control class receives a control configuration
			* object ({name, label, etc})
			* @param {Boolean} preview isPreview
			*/
			constructor(config, preview) {
				this.rawConfig = jQuery.extend({}, config);
				config = jQuery.extend({}, config);
				this.preview = preview;
				delete config.isPreview;
				if (this.preview) delete config.required;
				for (const prop of [
					"label",
					"description",
					"subtype",
					"required",
					"disabled"
				]) {
					this[prop] = config[prop];
					delete config[prop];
				}
				if (!config.id) if (config.name) config.id = config.name;
				else config.id = "control-" + Math.floor(Math.random() * 1e7 + 1);
				this.id = config.id;
				this.type = config.type;
				if (this.description) config.title = this.description;
				if (!control.controlConfig) control.controlConfig = {};
				const classId = this.subtype ? this.type + "." + this.subtype : this.type;
				this.classConfig = jQuery.extend({}, control.controlConfig[this.type] || {}, control.controlConfig[classId] || {});
				if (this.subtype) config.type = this.subtype;
				if (this.required) {
					config["required"] = "required";
					config["aria-required"] = "true";
				}
				if (this.disabled) config["disabled"] = "disabled";
				this.config = config;
				this.configure();
			}
			/**
			* Getter to retrieve class configuration.
			* Supports properties:
			*  - mi18n - a mi18n lookup, (or object of type: lookup for classes supporting multiple types)
			*  - i18n - for custom / plugin controls, translations for labels can be specified here as an object of locale: label (or an object of type: label for classes supporting multiple types).
			*  - icon - icon, or object of type: icon for defined types
			*  - inactive - array of inactive types that shouldn't appear in formBuilder interface (but still be supported for rendering purposes)
			* @return {Object} configuration
			*/
			static get definition() {
				return {};
			}
			/**
			* Class method to register supported controls and their associated classes
			* @param {Array} types - control type (or array of control types) to register
			* against the specifed class
			* @param {Class} controlClass - class to map against the types
			* @param {String} parentType - optional - if defined, any classes registered
			* will be registered as subtypes of this parent
			*/
			static register(types, controlClass, parentType) {
				const prefix = parentType ? parentType + "." : "";
				if (!control.classRegister) control.classRegister = {};
				if (!Array.isArray(types)) types = [types];
				for (const type of types) {
					if (type.indexOf(".") !== -1) {
						control.error(`Ignoring type ${type}. Cannot use the character '.' in a type name.`);
						continue;
					}
					control.classRegister[prefix + type] = controlClass;
				}
			}
			/**
			* Looks up the classRegister & returns registered types or subtypes
			* @param  {string|false} type optional type of control we want to look up
			* subtypes of. If not specified will return all types
			* @return {Array} registered types (or subtypes)
			*/
			static getRegistered(type = false) {
				const types = Object.keys(control.classRegister);
				if (!types.length) return types;
				return types.filter((key) => {
					if (type) return key.indexOf(type + ".") > -1;
					return key.indexOf(".") === -1;
				});
			}
			/**
			* Retrieves an object of types mapped to an array of subtypes.
			* Only returns types that have subtypes
			* @return {Object} an object containing {type: array of subtypes}.
			*/
			static getRegisteredSubtypes() {
				const types = {};
				for (const key in control.classRegister) if (control.classRegister.hasOwnProperty(key)) {
					const [type, subtype] = key.split(".");
					if (!subtype) continue;
					if (!types[type]) types[type] = [];
					types[type].push(subtype);
				}
				return types;
			}
			/**
			* Retrieve the class for a specified control type
			* @param {String} type type of control we are looking up
			* @param {String} [subtype] if specified we'll try to find
			* a class mapped to this subtype. If none found, fall back to the type.
			* @return {Class} control subclass as defined in the call to register
			*/
			static getClass(type, subtype) {
				const lookup = subtype ? type + "." + subtype : type;
				const controlClass = control.classRegister[lookup] || control.classRegister[type];
				if (!controlClass) return control.error("Invalid control type. (Type: " + type + ", Subtype: " + subtype + "). Please ensure you have registered it, and imported it correctly.");
				return controlClass;
			}
			/**
			* support dynamic loading of custom control classes
			* @param {Array} controls
			*/
			static loadCustom(controls) {
				let controlClasses = [];
				if (controls) controlClasses = controlClasses.concat(controls);
				if (window.fbControls) controlClasses = controlClasses.concat(window.fbControls);
				if (!this.fbControlsLoaded) {
					for (const loadControl of controlClasses) loadControl(control, control.classRegister);
					this.fbControlsLoaded = true;
				}
			}
			/**
			* Retrieve a translated string
			* By default looks for translations defined against the class (for plugin controls)
			* Expects {locale1: {type: label}, locale2: {type: label}}, or {default: label}, or {local1: label, local2: label2}
			* @param {String} lookup string to retrieve the label / translated string for
			* @param {Object|Number|String} [args] - string or key/val pairs for string lookups with variables
			* @return {String} the translated label
			*/
			static mi18n(lookup, args) {
				const def = this.definition;
				let i18n = def.i18n || {};
				const locale = import_mi18n_min.default.locale;
				i18n = i18n[locale] || i18n.default || i18n;
				const lookupCamel = this.camelCase(lookup);
				const value = typeof i18n == "object" ? i18n[lookupCamel] || i18n[lookup] : i18n;
				if (value) return value;
				let mapped = def.mi18n;
				if (typeof mapped === "object") mapped = mapped[lookupCamel] || mapped[lookup];
				if (!mapped) mapped = lookupCamel;
				return import_mi18n_min.default.get(mapped, args);
			}
			/**
			* Should this control type appear in the list of form controls
			* @param {String} type
			* @return {Boolean} isActive
			*/
			static active(type) {
				return !Array.isArray(this.definition.inactive) || this.definition.inactive.indexOf(type) === -1;
			}
			/**
			* Retrieve the translated control label for a control type
			* @param {String} type
			* @return {String} translated control
			*/
			static label(type) {
				return this.mi18n(type);
			}
			/**
			* Retrieve the icon for a control type
			* @param {String} type
			* @return {String} icon
			*/
			static icon(type) {
				const def = this.definition;
				if (def && typeof def.icon === "object") return def.icon[type];
				return def.icon;
			}
			/**
			* this method is called by the constructor and should be overwritten for controls that need to
			* process the configuration arguments prior to rendering
			*/
			configure() {}
			/**
			* this is the core method for all controls to produce the form elements to be injected into the dom
			* the implementation in control.js will return
			* Supported return configuration elements:
			*   - field - the DOM element
			*   - noLabel - this control shouldn't have a label (nor a space for a label)
			*   - hidden - this control shouldn't render anything visible to the page
			* @return {Object} DOM Element to be injected into the form, or an object/hash of configuration as above
			*/
			build() {
				const { label, type, ...data } = this.config;
				return this.markup(type, parsedHtml(label), data);
			}
			/**
			* code to execute for supported events
			* to implement an onRender event in a child class, simply define an onRender method
			* @param {String} eventType - optional type of event to retrieve an event function for. If not specified all events returned
			* @return {Function/Object} - function to execute for specified event, or all events of no eventType is specified
			*/
			on(eventType) {
				const events = {
					/**
					* @param {Node} element
					*/
					prerender: (element) => element,
					/**
					* onRender event to execute code each time an instance of this control is injected into the DOM
					* @param {Node} evt
					*/
					render: (evt) => {
						const onRender = () => {
							if (this.onRender) this.onRender(evt);
						};
						if (this.css) getStyles(this.css);
						if (this.js && !isCached(this.js)) getScripts(this.js).done(onRender);
						else onRender(evt);
					}
				};
				return eventType ? events[eventType] : events;
			}
			/**
			* centralised error handling
			* @param {String} message message to output to the console
			*/
			static error(message) {
				throw new Error(message);
			}
			/**
			* wrap the utils.markup method
			* ideally this would be inherited from a parent 'dom' type element supporting dom helper type methods
			* @param  {String} tag
			* @param  {Object|String|Array} content
			* @param  {Object} attributes
			* @return {Object} DOM element
			*/
			markup(tag, content = "", attributes = {}) {
				this.element = markup(tag, content, attributes);
				return this.element;
			}
			/**
			* Converts escaped HTML into usable HTML
			* @param  {String} html escaped HTML
			* @return {String}      parsed HTML
			*/
			parsedHtml(html) {
				return parsedHtml(html);
			}
			/**
			* convert a hyphenated string to camelCase
			* @param  {String} str
			* @return {String}
			*/
			static camelCase(str) {
				return camelCase(str);
			}
		};
		control.jsonAttrs = /* @__PURE__ */ new Map();
		control.parseJsonAttrs = (field) => {
			const attrs = control.jsonAttrs.get(field?.type);
			if (attrs) attrs.forEach((attr) => {
				if (typeof field[attr] === "string") try {
					field[attr] = JSON.parse(field[attr]);
				} catch {}
			});
			return field;
		};
		control.stringifyJsonAttrs = (field) => {
			const attrs = control.jsonAttrs.get(field?.type);
			if (attrs) attrs.forEach((attr) => {
				if (field[attr] != null && typeof field[attr] !== "string") field[attr] = JSON.stringify(field[attr]);
			});
			return field;
		};
		//#endregion
		//#region src/js/layout.js
		var processClassName = (data, field) => {
			let className = data.id ? `formbuilder-${data.type} form-group field-${data.id}` : "";
			if (data.className) {
				const classes = getAllGridRelatedClasses(data.className);
				if (classes && classes.length > 0) {
					className += ` ${classes.join(" ")}`;
					if (!Array.isArray(field)) field = [field];
					field.forEach((item) => {
						if (item.classList) item.classList.remove(...classes);
						item.querySelectorAll("[class*=row-],[class*=col-]").forEach((element) => {
							if (element.classList) element.classList.remove(...classes);
						});
					});
				}
			}
			return className;
		};
		/**
		* Base class for controlling the layout of each 'row' on the form
		* Can be extended & customised with the new object being passed to FormRender as the new layout object
		* Controls things like the label, help text, and how they fit together with the control itself
		*/
		var layout = class {
			/**
			* Prepare the templates for layout
			* @param {Object} templates object containing custom or overwrite templates
			* @param {Boolean} [preview=false] - are we rendering a preview for the formBuilder stage
			* @param {Boolean} [disableHTMLLabels=false] - do we render labels as HTML or plain text
			* @param {Array} [controlConfig={}] - ability for controls to have their own configuration / options of the format control identifier (type, or type.subtype): {options}
			*/
			constructor(templates, preview = false, disableHTMLLabels = false, controlConfig = {}) {
				this.preview = preview ?? false;
				this.disableHTMLLabels = disableHTMLLabels ?? false;
				this.controlConfig = controlConfig ?? {};
				this.templates = {
					label: null,
					help: null,
					default: (field, label, help, data) => {
						if (help) label.appendChild(help);
						return this.markup("div", [label, field], { className: processClassName(data, field) });
					},
					noLabel: (field, label, help, data) => {
						return this.markup("div", field, { className: processClassName(data, field) });
					},
					hidden: (field) => {
						return field;
					}
				};
				if (templates) this.templates = jQuery.extend(this.templates, templates);
				this.configure();
			}
			/**
			* this method is called by the constructor and should be overwritten for custom layouts that need to
			* process the configuration arguments prior to rendering
			*/
			configure() {}
			/**
			* Process the configuration from an element from the standard formData array
			* building the control, label and help text, and then putting them all together.
			* Should support the control object returning a DOM element, or an object containing
			* configuration properties:
			*   - field - the DOM element
			*   - noLabel - this control shouldn't have a label (nor a space for a label)
			*   - hidden - this control shouldn't render anything visible to the page
			* @param {Class} renderControl - the relevant control class
			* @param {Object} data - configuration data passed through formData for this control
			* @param {String} forceTemplate - programmatically force the template with which this control to be rendered
			* @return {HTMLElement} element
			*/
			build(renderControl, data, forceTemplate) {
				if (this.preview) if (data.name) data.name = data.name + "-preview";
				else data.name = utils.nameAttr(data) + "-preview";
				data.id = data.name;
				this.data = jQuery.extend({}, data);
				control.controlConfig = this.controlConfig;
				const controlInstance = new renderControl(data, this.preview);
				let field = controlInstance.build();
				if (typeof field !== "object" || !field.field) field = { field };
				if (typeof field.field === "string") {
					const tmpField = this.markup("div", field.field, {});
					if (tmpField.childElementCount === 1) field.field = tmpField.children.item(0);
					else field.field = Array.from(tmpField.children);
				}
				const label = this.label();
				const help = this.help();
				let elementTemplate;
				if (forceTemplate && this.isTemplate(forceTemplate)) elementTemplate = forceTemplate;
				else elementTemplate = this.isTemplate(field.layout) ? field.layout : "default";
				const element = this.processTemplate(elementTemplate, field.field, label, help);
				controlInstance.on("prerender")(element);
				element.addEventListener("fieldRendered", controlInstance.on("render"));
				return element;
			}
			/**
			* Build a label element
			* @return {Object} dom element to render the label
			*/
			label() {
				const label = this.data.label || "";
				const labelContents = [this.disableHTMLLabels ? document.createTextNode(label) : utils.parsedHtml(label)];
				if (this.data.required) labelContents.push(this.markup("span", "*", { className: "formbuilder-required" }));
				if (this.isTemplate("label")) return this.processTemplate("label", labelContents);
				return this.markup("label", labelContents, {
					for: this.data.id,
					className: `formbuilder-${this.data.type}-label`
				});
			}
			/**
			* Build a help element
			* @return {Object} dom element to render the help text
			*/
			help() {
				if (!this.data.description) return null;
				if (this.isTemplate("help")) return this.processTemplate("help", this.data.description);
				return this.markup("span", "?", {
					className: "tooltip-element",
					tooltip: this.data.description
				});
			}
			/**
			* Determines if a template is defined for the specified key
			* @param {String} template string template key to check for
			* @return {Boolean}
			*/
			isTemplate(template) {
				return typeof this.templates[template] === "function";
			}
			/**
			* Process a template & prepare the results
			* @param {String} template - template key to execute
			* @param {Array} args - any number of args that should be passed to the template. this.data is sent as the last parameter to any template.
			* @return {HTMLElement}
			*/
			processTemplate(template, ...args) {
				let processed = this.templates[template](...args, this.data);
				if (processed.jquery) processed = processed[0];
				return processed;
			}
			/**
			* link to the utils.markup method
			* ideally this would be inherited from a parent 'dom' type element supporting dom helper type methods
			* @param {String} tag
			* @param {Object|String|Array} content
			* @param {Object} attributes
			* @return {Object} DOM element
			*/
			markup(tag, content = "", attributes = {}) {
				return utils.markup(tag, content, attributes);
			}
		};
		//#endregion
		//#region src/js/config.js
		/* istanbul ignore next */
		var noop = () => null;
		import_mi18n_min.default.addLanguage("en-US", {
			"NATIVE_NAME": "English (US)",
			"ENGLISH_NAME": "English",
			"addOption": "Add Option +",
			"allFieldsRemoved": "All fields were removed.",
			"allowMultipleFiles": "Allow users to upload multiple files",
			"allowSelect": "Allow selection",
			"autocomplete": "Autocomplete",
			"button": "Button",
			"cannotBeEmpty": "This field cannot be empty",
			"checkboxGroup": "Checkbox Group",
			"checkbox": "Checkbox",
			"checkboxes": "Checkboxes",
			"className": "Class",
			"clearAllMessage": "Are you sure you want to clear all fields?",
			"clear": "Clear",
			"close": "Close",
			"content": "Content",
			"copy": "Copy To Clipboard",
			"copyButton": "&#43;",
			"copyButtonTooltip": "Copy",
			"dateField": "Date Field",
			"description": "Help Text",
			"descriptionField": "Description",
			"devMode": "Developer Mode",
			"editNames": "Edit Names",
			"editorTitle": "Form Elements",
			"editXML": "Edit XML",
			"enableOther": "Enable &quot;Other&quot;",
			"enableOtherMsg": "Let users enter an unlisted option",
			"fieldDeleteWarning": "false",
			"fieldVars": "Field Variables",
			"fieldNonEditable": "This field cannot be edited.",
			"fieldRemoveWarning": "Are you sure you want to remove this field?",
			"fileUpload": "File Upload",
			"formUpdated": "Form Updated",
			"getStarted": "Drag a field from the right to this area",
			"header": "Header",
			"hide": "Edit",
			"hidden": "Hidden Input",
			"inline": "Inline",
			"inlineDesc": "Display {type} inline",
			"label": "Label",
			"labelEmpty": "Field Label cannot be empty",
			"limitRole": "Limit access to one or more of the following roles:",
			"mandatory": "Mandatory",
			"maxlength": "Max Length",
			"minOptionMessage": "This field requires a minimum of 2 options",
			"minSelectionRequired": "Minimum {min} selections required",
			"multipleFiles": "Multiple Files",
			"name": "Name",
			"no": "No",
			"noFieldsToClear": "There are no fields to clear",
			"number": "Number",
			"off": "Off",
			"on": "On",
			"option": "Option",
			"optionCount": "Option {count}",
			"options": "Options",
			"optional": "optional",
			"optionLabelPlaceholder": "Label",
			"optionValuePlaceholder": "Value",
			"optionEmpty": "Option value required",
			"other": "Other",
			"paragraph": "Paragraph",
			"placeholder": "Placeholder",
			"placeholders.value": "Value",
			"placeholders.label": "Label",
			"placeholders.email": "Enter your email",
			"placeholders.className": "space separated classes",
			"placeholders.password": "Enter your password",
			"preview": "Preview",
			"radioGroup": "Radio Group",
			"radio": "Radio",
			"removeMessage": "Remove Element",
			"removeOption": "Remove Option",
			"remove": "&#215;",
			"required": "Required",
			"reset": "Reset",
			"requireValidOption": "Only accept a pre-defined Option",
			"richText": "Rich Text Editor",
			"roles": "Access",
			"rows": "Rows",
			"save": "Save",
			"selectOptions": "Options",
			"select": "Select",
			"selectColor": "Select Color",
			"selectionsMessage": "Allow Multiple Selections",
			"size": "Size",
			"sizes": "Sizes",
			"size.xs": "Extra Small",
			"size.sm": "Small",
			"size.m": "Default",
			"size.lg": "Large",
			"step": "Step",
			"style": "Style",
			"styles": "Styles",
			"styles.btn": "Button Styles",
			"styles.btn.default": "Default",
			"styles.btn.danger": "Danger",
			"styles.btn.info": "Info",
			"styles.btn.primary": "Primary",
			"styles.btn.success": "Success",
			"styles.btn.warning": "Warning",
			"submit": "Submit",
			"subtype": "Type",
			"text": "Text Field",
			"textArea": "Text Area",
			"toggle": "Toggle",
			"warning": "Warning!",
			"value": "Value",
			"viewJSON": "[{&hellip;}]",
			"viewXML": "&lt;/&gt;",
			"yes": "Yes"
		});
		var defaultOptions = {
			actionButtons: [],
			allowStageSort: true,
			append: false,
			controlOrder: [
				"autocomplete",
				"button",
				"checkbox-group",
				"checkbox",
				"date",
				"file",
				"header",
				"hidden",
				"number",
				"paragraph",
				"radio-group",
				"select",
				"text",
				"textarea"
			],
			controlPosition: "right",
			dataType: "json",
			defaultFields: [],
			disabledActionButtons: [],
			disabledAttrs: [],
			disabledFieldButtons: {},
			disabledSubtypes: {},
			disableFields: [],
			disableHTMLLabels: false,
			disableInjectedStyle: false,
			editOnAdd: false,
			fields: [],
			fieldRemoveWarn: false,
			fieldEditContainer: null,
			inputSets: [],
			notify: {
				error: (error) => {
					console.log(error);
				},
				success: (success) => {
					console.log(success);
				},
				warning: (warning) => {
					console.warn(warning);
				}
			},
			onAddField: (fieldId, fieldData) => fieldData,
			onAddFieldAfter: (fieldId, fieldData) => fieldData,
			onAddOption: (obj) => obj,
			onClearAll: noop,
			onCloseFieldEdit: noop,
			onOpenFieldEdit: noop,
			onRemoveField: noop,
			/**
			* @param {Object} evt
			* @param {Object} formData
			*/
			onSave: noop,
			persistDefaultFields: false,
			prepend: false,
			replaceFields: [],
			roles: { 1: "Administrator" },
			sanitizerOptions: {
				clobberingProtection: {
					document: false,
					form: false
				},
				backendOrder: []
			},
			scrollToFieldOnAdd: true,
			showActionButtons: true,
			sortableControls: false,
			stickyControls: {
				enable: true,
				offset: {
					top: 5,
					bottom: "auto",
					right: "auto"
				}
			},
			subtypes: {},
			templates: {},
			typeUserAttrs: {},
			typeUserDisabledAttrs: {},
			typeUserEvents: {},
			defaultGridColumnClass: "col-md-12",
			cancelGridModeDistance: 100,
			enableColumnInsertMenu: false,
			enableEnhancedBootstrapGrid: false
		};
		var styles = { btn: [
			"default",
			"danger",
			"info",
			"primary",
			"success",
			"warning"
		] };
		var defaultI18n = { location: "assets/lang/" };
		var instanceConfig = {};
		var gridClassNames = {
			rowWrapperClass: "rowWrapper",
			colWrapperClass: "colWrapper",
			tmpRowPlaceholderClass: "tempRowWrapper",
			invisibleRowPlaceholderClass: "invisibleRowPlaceholder"
		};
		var defaultFieldSelector = "li.form-field";
		//#endregion
		//#region src/js/helpers.js
		var import_storage_available = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
			module.exports = function storageAvailable(type) {
				try {
					var storage = window[type], x = "__storage_test__";
					storage.setItem(x, x);
					storage.removeItem(x);
					return true;
				} catch (e) {
					return false;
				}
			};
		})))());
		/**
		* Utilities specific to form-builder.js
		*/
		var Helpers = class {
			/**
			* Setup defaults, get instance data and dom
			* @param  {string} formId
			* @param {Object} layout object instance used by various helpers
			* @param {Object} formBuilder instance
			*/
			constructor(formId, layout, formBuilder) {
				this.data = instanceData[formId];
				this.d = instanceDom[formId];
				this.config = instanceConfig[formId];
				this.doCancel = false;
				this.layout = layout;
				this.handleKeyDown = this.handleKeyDown.bind(this);
				this.formBuilder = formBuilder;
				this.toastTimer = null;
			}
			/**
			* Callback for when a drag begins
			*
			* @param  {Object} event
			* @param  {Object} ui
			*/
			startMoving(event, ui) {
				ui.item.show().addClass("moving");
				this.doCancel = true;
				this.from = ui.item.parent();
			}
			/**
			* Callback for when a drag ends
			*
			* @param  {Object} event
			* @param  {Object} ui
			*/
			stopMoving(event, ui) {
				const _this = this;
				ui.item.removeClass("moving");
				if (_this.doCancel) {
					if (ui.sender) $(ui.sender).sortable("cancel");
					this.from.closest(".frmb-control").sortable("cancel");
				}
				_this.save();
				_this.doCancel = false;
			}
			/**
			* jQuery UI sortable beforeStop callback used for both lists.
			* Logic for canceling the sort or drop.
			* @param  {Object} event
			* @param  {Object} ui
			* @return {void}
			*/
			beforeStop(event, ui) {
				const _this = this;
				const opts = this.config.opts;
				const lastIndex = _this.d.stage.childNodes.length - 1;
				const cancelArray = [];
				_this.stopIndex = ui.placeholder.closest("ul.stage-wrap > *").index() - 1;
				if (!opts.sortableControls && ui.item.parent().hasClass("frmb-control")) cancelArray.push(true);
				cancelArray.push(ui.item.is(":not(li.input-control,li.input-set-control)") && !ui.item.parent().hasClass("frmb-control"));
				if (opts.prepend) cancelArray.push(_this.stopIndex === 0);
				if (opts.append) cancelArray.push(_this.stopIndex + 1 === lastIndex);
				_this.doCancel = cancelArray.some((elem) => elem === true);
			}
			/**
			* Attempts to get element type and subtype
			*
			* @param  {Object} $field
			* @return {Object} {type: 'fieldType', subtype: 'fieldSubType'}
			*/
			getTypes($field) {
				const types = { type: $field.attr("type") };
				const subtype = $(".fld-subtype", $field).val();
				if (subtype !== types.type) types.subtype = subtype;
				return types;
			}
			/**
			* Get option data for a field
			* @param  {Object} field jQuery field object
			* @return {Array}        Array of option values
			*/
			fieldOptionData(field) {
				const options = [];
				const $options = $(".sortable-options li", field);
				$options.each((i) => {
					const option = $options[i];
					const stringAttrs = option.querySelectorAll("input:not([type=checkbox]):not([type=radio]), select");
					const boolAttrs = option.querySelectorAll("input[type=checkbox], input[type=radio]");
					const attrs = {};
					forEach(stringAttrs, (i) => {
						const stringAttr = stringAttrs[i];
						const attrName = stringAttr.dataset.attr;
						attrs[attrName] = stringAttr.value;
					});
					forEach(boolAttrs, (i) => {
						const boolAttr = boolAttrs[i];
						const attrName = boolAttr.getAttribute("data-attr");
						attrs[attrName] = boolAttr.checked;
					});
					options.push(attrs);
				});
				return options;
			}
			/**
			* XML save
			* @param  {Object} form sortableFields node
			* @return {string} xml in string
			*/
			xmlSave(form) {
				const formData = this.prepData(form);
				const xmlSerializer = new XMLSerializer();
				/** @type {Array.<string|string[]>} fields */
				const fields = ["<fields>"];
				formData.forEach((field) => {
					const { values, ...fieldData } = field;
					let fieldHTML = [`<field ${xmlAttrString(fieldData)}>`];
					if (optionFields.includes(field.type)) {
						const options = values.map((option) => markup("option", option.label, option).outerHTML);
						fieldHTML = fieldHTML.concat(options);
					}
					fieldHTML.push("</field>");
					fields.push(fieldHTML);
				});
				fields.push("</fields>");
				const formTemplate = markup("form-template", flattenArray(fields).join(""));
				return xmlSerializer.serializeToString(formTemplate);
			}
			/**
			* Get formData from editor in JS Object format
			* @param  {Object} form aka stage, DOM element
			* @return {Object} formData
			*/
			prepData(form) {
				const formData = [];
				const _this = this;
				const config = this.config;
				if (form.childNodes.length !== 0) {
					const fields = [];
					forEach(form.childNodes, function(_index, fieldWrapper) {
						$(fieldWrapper).find("li.form-field").each(function(i, field) {
							fields.push(field);
						});
					});
					forEach(form.childNodes, function(_index, testElement) {
						const $testElement = $(testElement);
						if ($testElement.is("li") && $testElement.hasClass("form-field")) fields.push(testElement);
					});
					if (fields.length) fields.forEach((field) => {
						const $field = $(field);
						if (!$field.hasClass("disabled-field")) {
							let fieldData = _this.getTypes($field);
							const $roleInputs = $(".roles-field:checked", field);
							const roleVals = $roleInputs.map((index) => $roleInputs[index].value).get();
							fieldData = Object.assign({}, fieldData, _this.getAttrVals(field));
							if (fieldData.subtype) {
								if (fieldData.subtype === "quill") {
									const id = `${fieldData.name}-preview`;
									if (window.fbEditors.quill[id]) {
										const data = window.fbEditors.quill[id].instance.getContents();
										fieldData.value = window.JSON.stringify(data.ops);
									}
								} else if (fieldData.subtype === "tinymce" && window.tinymce) {
									const id = `${fieldData.name}-preview`;
									const editor = window.tinymce.get(id);
									if (editor) fieldData.value = editor.getContent();
								}
							}
							if (roleVals.length) fieldData.role = roleVals.join(",");
							fieldData.className = fieldData.className || fieldData.class;
							if (fieldData.className && $field.attr("addeddefaultcolumnclass") == "true" && $field.closest(this.formBuilder.rowWrapperClassSelector).children().length == 1 && fieldData.className.includes(config.opts.defaultGridColumnClass)) {
								const classes = getAllGridRelatedClasses(fieldData.className);
								if (classes && classes.length > 0) classes.forEach((element) => {
									fieldData.className = fieldData.className.replace(element, "").trim();
								});
							}
							if (fieldData.className) {
								const match = new RegExp("(?:^|\\s)btn-(" + styles.btn.join("|") + ")(?:\\s|$)", "g").exec(fieldData.className);
								if (match) fieldData.style = match[1];
							}
							fieldData = trimObj(fieldData);
							control.parseJsonAttrs(fieldData);
							$field.find(".form-group.field-options").each((_, attribute) => {
								const attributeName = attribute.getAttribute("name");
								fieldData[attributeName] = _this.fieldOptionData(attribute);
							});
							formData.push(fieldData);
						}
					});
				}
				return formData;
			}
			/**
			* Get and set the data for an editor. Mainly
			* a wrapper for handling dataType option
			* @param  {Object} formData
			* @return {Object} formData
			*/
			getData(formData) {
				const data = this.data;
				if (!formData) formData = this.config.opts.formData;
				if (!formData) return false;
				data.formData = {
					xml: (formData) => Array.isArray(formData) ? formData : parseXML(formData),
					json: (formData) => {
						if (typeof formData === "string") return window.JSON.parse(formData);
						return formData;
					}
				}[this.config.opts.dataType](formData) || [];
				return data.formData;
			}
			/**
			* Saves and returns formData
			* @param {boolean} [minify=false] whether to return formatted or minified data
			* @return {string} formData FormData formatted in either XML or JSON depending on the current config.opts.dataType value
			*/
			save(minify = false) {
				const _this = this;
				const data = this.data;
				const stage = this.d.stage;
				data.formData = {
					xml: () => _this.xmlSave(stage),
					json: (minify) => window.JSON.stringify(_this.prepData(stage), null, minify && "  ")
				}[this.config.opts.dataType](minify);
				stage.dispatchEvent(new Event("formSaved", {
					bubbles: true,
					cancelable: false
				}));
				return data.formData;
			}
			/**
			* increments the field ids with support for multiple editors
			* @param  {string} id field ID
			* @return {string}    incremented field ID
			*/
			incrementId(id) {
				const split = id.lastIndexOf("-");
				const newFieldNumber = parseInt(id.substring(split + 1)) + 1;
				return `${id.substring(0, split)}-${newFieldNumber}`;
			}
			/**
			* Set the values for field attributes in the editor
			* @param {Object} field
			* @return {Object} fieldData
			*/
			getAttrVals(field) {
				const config = this.config;
				const fieldData = Object.create(null);
				const attrs = field.querySelectorAll("[class*=\"fld-\"]");
				forEach(attrs, (index) => {
					const attr = attrs[index];
					const name = camelCase(attr.getAttribute("name"));
					const attrVal = [
						[attr.attributes.contenteditable, () => config.opts.dataType === "xml" ? escapeHtml(attr.innerHTML) : attr.innerHTML],
						[attr.type === "checkbox", () => attr.checked],
						[attr.type === "number" && attr.value !== "", () => Number(attr.value)],
						[attr.attributes.multiple, () => $(attr).val()],
						[true, () => attr.value]
					].find(([condition]) => !!condition)[1]();
					const matches = /^([^[]+)\[([^[\]]+)\]$/.exec(name);
					if (matches) {
						const [, objName, propName] = matches;
						fieldData[objName] ??= {};
						fieldData[objName][propName] = attrVal;
					} else fieldData[name] = attrVal;
				});
				return fieldData;
			}
			/**
			* Collect field attribute values and call fieldPreview to generate preview
			* @param  {Object} $field jQuery DOM element
			*/
			updatePreview($field) {
				const _this = this;
				const fieldClass = $field.attr("class");
				const field = $field[0];
				if (!field || fieldClass.includes("input-control")) return;
				const fieldType = $field.attr("type");
				const $prevHolder = $(".prev-holder", field);
				let previewData = Object.assign({}, _this.getAttrVals(field), { type: fieldType });
				$field.find(".form-group.field-options").each((_, attribute) => {
					const attributeName = attribute.getAttribute("name");
					previewData[attributeName] = _this.fieldOptionData(attribute);
				});
				previewData = trimObj(previewData, true);
				previewData.className = _this.classNames(field, previewData);
				$field.data("fieldData", previewData);
				const custom = _this.formBuilder.controls.custom.lookup(previewData.type);
				const template = _this.formBuilder.controls.custom.getClass(previewData.type);
				const controlClass = custom ? custom.class : template || control.getClass(previewData.type, previewData.subtype);
				const preview = this.layout.build(controlClass, previewData);
				empty($prevHolder[0]);
				$prevHolder[0].appendChild(preview);
				preview.dispatchEvent(new Event("fieldRendered", {
					bubbles: true,
					cancelable: false
				}));
			}
			/**
			* Display a custom tooltip for disabled fields.
			*
			* @param  {Object} stage
			*/
			disabledTT(stage) {
				const move = (e, elem) => {
					const fieldOffset = elem.field.getBoundingClientRect();
					const x = e.clientX - fieldOffset.left - 21;
					const y = e.clientY - fieldOffset.top - elem.tt.offsetHeight - 12;
					elem.tt.style.transform = `translate(${x}px, ${y}px)`;
				};
				const disabledFields = stage.querySelectorAll(".disabled-field");
				forEach(disabledFields, (index) => {
					const field = disabledFields[index];
					const title = import_mi18n_min.default.get("fieldNonEditable");
					if (title) {
						const tt = markup("p", title, { className: "frmb-tt" });
						field.appendChild(tt);
						field.addEventListener("mousemove", (e) => move(e, {
							tt,
							field
						}));
					}
				});
			}
			/**
			* Process classNames for field
			* @param  {Object} field
			* @param  {Object} previewData
			* @return {String|void} classNames
			*/
			classNames(field, previewData) {
				const className = field.querySelector(".fld-className");
				const styleField = field.querySelector(".btn-style");
				const style = styleField && styleField.value;
				if (!className) return;
				const { type } = previewData;
				const classes = className.multiple ? $(className).val() : className.value.trim().split(" ");
				const primaryType = {
					button: "btn",
					submit: "btn"
				}[type];
				if (primaryType && style) {
					for (let i = 0; i < classes.length; i++) {
						const re = new RegExp(`^${primaryType}-(?:` + styles.btn.join("|") + ")$");
						if (classes[i].match(re)) classes.splice(i, 1, primaryType + "-" + style);
					}
					classes.push(primaryType + "-" + style);
					classes.push(primaryType);
				}
				const trimmedClassName = unique(classes).join(" ").trim();
				className.value = trimmedClassName;
				return trimmedClassName;
			}
			/**
			* Closes and open dialog
			*
			* @param  {HTMLElement} [overlay] Existing overlay if there is one
			* @param  {HTMLElement} [dialog]  Existing dialog
			*/
			closeConfirm(overlay, dialog) {
				if (!overlay) overlay = document.getElementsByClassName("form-builder-overlay")[0];
				overlay && remove(overlay);
				if (!dialog) dialog = document.getElementsByClassName("form-builder-dialog")[0];
				dialog && remove(dialog);
				document.removeEventListener("keydown", this.handleKeyDown, false);
				document.dispatchEvent(new Event("modalClosed", {
					bubbles: true,
					cancelable: false
				}));
			}
			/**
			*
			* @param {KeyboardEvent} e keydown event object
			*/
			handleKeyDown(e) {
				if ((e.keyCode || e.which) === 27) {
					e.preventDefault();
					this.closeConfirm.call(this);
				}
			}
			/**
			* Adds overlay to the page. Used for modals.
			* @return {HTMLElement} DOM Object
			*/
			showOverlay() {
				const overlay = markup("div", null, { className: "form-builder-overlay" });
				document.body.appendChild(overlay);
				overlay.classList.add("visible");
				overlay.addEventListener("click", ({ target }) => this.closeConfirm(target), false);
				document.addEventListener("keydown", this.handleKeyDown, false);
				return overlay;
			}
			/**
			* Custom confirmation dialog
			*
			* @param  {Object}  message   Content to be displayed in the dialog
			* @param  {Function}  yesAction callback to fire if they confirm
			* @param  {{pageX: Number, pageY: Number}|false} [coords=false]    location to put the dialog
			* @param  {string}  [className=''] Custom class to be added to the dialog
			* @return {HTMLElement}            Reference to the modal
			*/
			confirm(message, yesAction, coords = false, className = "") {
				const _this = this;
				const i18n = import_mi18n_min.default.current;
				const overlay = _this.showOverlay();
				const yes = markup("button", i18n.yes, { className: "yes btn btn-success btn-sm" });
				const no = markup("button", i18n.no, { className: "no btn btn-danger btn-sm" });
				no.onclick = function() {
					_this.closeConfirm(overlay);
				};
				yes.onclick = function() {
					yesAction();
					_this.closeConfirm(overlay);
				};
				const btnWrap = markup("div", [no, yes], { className: "button-wrap" });
				className = "form-builder-dialog " + className;
				const miniModal = markup("div", [message, btnWrap], { className });
				if (!coords) {
					const dE = document.documentElement;
					coords = {
						pageX: Math.max(dE.clientWidth, window.innerWidth || 0) / 2,
						pageY: Math.max(dE.clientHeight, window.innerHeight || 0) / 2
					};
					miniModal.style.position = "fixed";
				} else miniModal.classList.add("positioned");
				miniModal.style.left = coords.pageX + "px";
				miniModal.style.top = coords.pageY + "px";
				document.body.appendChild(miniModal);
				yes.focus();
				return miniModal;
			}
			/**
			* Popup dialog the does not require confirmation.
			* @param  {string|HTMLElement|Array}  content
			* @param  {{pageX: Number, pageY: Number}|false} [coords=false]   screen coordinates to position dialog
			* @param  {string} [className=''] classname to be added to the dialog
			* @return {HTMLElement}            dom
			*/
			dialog(content, coords = false, className = "") {
				const _this = this;
				const clientWidth = document.documentElement.clientWidth;
				const clientHeight = document.documentElement.clientHeight;
				_this.showOverlay();
				className = "form-builder-dialog " + className;
				const miniModal = markup("div", content, { className });
				if (!coords) {
					coords = {
						pageX: Math.max(clientWidth, window.innerWidth || 0) / 2,
						pageY: Math.max(clientHeight, window.innerHeight || 0) / 2
					};
					miniModal.style.position = "fixed";
				} else miniModal.classList.add("positioned");
				miniModal.style.left = coords.pageX + "px";
				miniModal.style.top = coords.pageY + "px";
				document.body.appendChild(miniModal);
				document.dispatchEvent(new Event("modalOpened", {
					bubbles: true,
					cancelable: false
				}));
				if (className.indexOf("data-dialog") !== -1) document.dispatchEvent(new Event("viewData", {
					bubbles: true,
					cancelable: false
				}));
				return miniModal;
			}
			/**
			* Confirm all fields will be removed then remove them
			* @param  {Object} e click event object
			*/
			confirmRemoveAll(e) {
				const _this = this;
				const config = this.config;
				const formID = e.target.id.match(/frmb-\d{13}/)[0];
				const stage = document.getElementById(formID);
				const i18n = import_mi18n_min.default.current;
				const fields = $("li.form-field", stage);
				const buttonPosition = e.target.getBoundingClientRect();
				const bodyRect = document.body.getBoundingClientRect();
				const coords = {
					pageX: buttonPosition.left + buttonPosition.width / 2,
					pageY: buttonPosition.top - bodyRect.top - 12
				};
				if (fields.length) _this.confirm(i18n.clearAllMessage, () => {
					_this.removeAllFields.call(_this, stage);
					if (config.opts.persistDefaultFields && config.opts.defaultFields) this.addDefaultFields();
					else config.opts.notify.success(i18n.allFieldsRemoved);
					config.opts.onClearAll();
				}, coords);
				else _this.dialog(i18n.noFieldsToClear, coords);
			}
			addDefaultFields() {
				this.config.opts.defaultFields.forEach((field) => this.formBuilder.prepFieldVars(field));
				this.d.stage.classList.remove("empty");
			}
			/**
			* Removes all fields from the form
			* @param {HTMLElement} stage to remove fields form
			* @return {void}
			*/
			removeAllFields(stage) {
				const i18n = import_mi18n_min.default.current;
				const opts = this.config.opts;
				const fields = stage.querySelectorAll(this.formBuilder.fieldSelector);
				const markEmptyArray = [];
				if (!fields.length) return;
				if (opts.prepend) markEmptyArray.push(true);
				if (opts.append) markEmptyArray.push(true);
				if (!markEmptyArray.some(Boolean)) {
					stage.classList.add("empty");
					stage.dataset.content = i18n.getStarted;
				}
				this.emptyStage(stage);
			}
			/**
			* @param {HTMLElement} stage
			*/
			emptyStage(stage) {
				empty(stage).classList.remove("removing");
				stage.dispatchEvent(new Event("stageEmptied", {
					bubbles: true,
					cancelable: false
				}));
				this.save();
			}
			/**
			* Check if stage is empty
			* @return {boolean}
			*/
			stageIsEmpty() {
				return $(this.d.stage).find("li").length === 0;
			}
			/**
			* If user re-orders the elements their order should be saved.
			* @param {Object} $cbUL our list of elements
			* @return {Array|false} fieldOrder
			*/
			setFieldOrder($cbUL) {
				if (!this.config.opts.sortableControls) return false;
				const JSON = window.JSON;
				const fieldOrder = [];
				$cbUL.children().each((index, element) => {
					const type = $(element).data("type");
					if (type) fieldOrder.push(type);
				});
				if ((0, import_storage_available.default)("sessionStorage")) window.sessionStorage.setItem("fieldOrder", JSON.stringify(fieldOrder));
				return fieldOrder;
			}
			/**
			* Close fields being editing
			*/
			closeAllEdit() {
				$(this.d.stage).find("li.form-field").each((i, elem) => {
					this.closeField(elem.id, false);
				});
			}
			/**
			* Toggles the edit mode for the given field
			* @param  {string} fieldId
			* @param  {boolean} animate
			* @return {HTMLElement|void} field
			*/
			toggleEdit(fieldId, animate = true) {
				const field = document.getElementById(fieldId);
				if (!field) return;
				if ($(field).hasClass("editing")) return this.closeField(fieldId, animate);
				else return this.openField(fieldId, animate);
			}
			/**
			* Close the editing panel of the field
			* @param {string} fieldId
			* @param {boolean} animate
			* @returns {HTMLElement}
			*/
			closeField(fieldId, animate = true) {
				const _this = this;
				const field = document.getElementById(fieldId);
				if (!field) return field;
				const $editPanel = $(".frm-holder", field);
				const $preview = $(".prev-holder", field);
				let currentlyEditing = false;
				if ($(field).hasClass("editing")) currentlyEditing = true;
				if (!currentlyEditing) return field;
				field.classList.toggle("editing");
				$(".toggle-form", field).toggleClass("open");
				if (animate) {
					$preview.slideToggle(250);
					$editPanel.slideToggle(250);
				} else {
					$preview.toggle();
					$editPanel.toggle();
				}
				this.updatePreview($(field));
				const liContainer = $(`#${fieldId}`);
				const rowContainer = $(`#${fieldId}-cont`);
				rowContainer.append(liContainer);
				this.removeContainerProtection(rowContainer.attr("id"));
				this.config.opts.onCloseFieldEdit($editPanel[0]);
				this.d.stage.dispatchEvent(new Event("fieldEditClosed", {
					bubbles: true,
					cancelable: false
				}));
				const prevHolder = liContainer.find(".prev-holder");
				const resultsTimeout = setTimeout(() => {
					clearTimeout(resultsTimeout);
					_this.tmpCleanPrevHolder(prevHolder).forEach((result) => {
						if (result["columnInfo"].columnSize) {
							const currentClassRow = _this.getBootstrapColumnClass(rowContainer.attr("class"));
							if (currentClassRow !== result["columnInfo"].columnSize) {
								rowContainer.removeClass(currentClassRow).addClass(result["columnInfo"].columnSize);
								_this.tmpCleanPrevHolder(prevHolder);
							}
						}
					});
				}, 300);
				return field;
			}
			/**
			* Open the editing panel of the field
			* @param {string} fieldId
			* @param {boolean} animate
			* @returns {HTMLElement}
			*/
			openField(fieldId, animate = true) {
				const field = document.getElementById(fieldId);
				if (!field) return field;
				const $editPanel = $(".frm-holder", field);
				const $preview = $(".prev-holder", field);
				let currentlyEditing = false;
				if ($(field).hasClass("editing")) currentlyEditing = true;
				if (currentlyEditing) return field;
				field.classList.toggle("editing");
				$(".toggle-form", field).toggleClass("open");
				if (animate) {
					$preview.slideToggle(250);
					$editPanel.slideToggle(250);
				} else {
					$preview.toggle();
					$editPanel.toggle();
				}
				this.updatePreview($(field));
				const liContainer = $(`#${fieldId}`);
				const colWrapper = $(`#${fieldId}-cont`);
				const rowWrapper = colWrapper.closest(this.formBuilder.rowWrapperClassSelector);
				this.formBuilder.preserveTempContainers.push(colWrapper.attr("id"));
				liContainer.insertAfter(rowWrapper);
				this.formBuilder.currentEditPanel = $editPanel[0];
				this.config.opts.onOpenFieldEdit($editPanel[0]);
				this.d.stage.dispatchEvent(new Event("fieldEditOpened", {
					bubbles: true,
					cancelable: false
				}));
				$(document).trigger("fieldOpened", [{ rowWrapperID: rowWrapper.attr("id") }]);
				return field;
			}
			/**
			* Get the computed style for DOM element @TODO Find usage?
			* @param  {Element}  elem     dom element
			* @param  {boolean} property style eg. width, height, opacity
			* @return {string}           computed style
			* @deprecated Function is not called anywhere
			*/
			getStyle(elem, property = false) {
				let style;
				if (window.getComputedStyle) style = window.getComputedStyle(elem, null);
				else if (elem.currentStyle) style = elem.currentStyle;
				return property ? style[property] : style;
			}
			/**
			* Open a dialog with the form's data
			*/
			showData() {
				const code = markup("code", escapeHtml(this.getFormData(this.config.opts.dataType, true)), { className: `formData-${this.config.opts.dataType}` });
				this.dialog(markup("pre", code), false, "data-dialog");
			}
			/**
			* Remove a given field from the stage or the last field if no fieldID is provided
			* @param  {string}  fieldID ID of the field to be removed
			* @param  {Number}  animationSpeed
			* @return {boolean} fieldRemoved returns true if field is removed
			*/
			removeField(fieldID, animationSpeed = 250) {
				let fieldRemoved = false;
				const _this = this;
				const form = this.d.stage;
				const fields = form.getElementsByClassName("form-field");
				if (!fields.length) {
					this.config.opts.notify.warning("No fields to remove");
					return false;
				}
				if (!fieldID) {
					const availableIds = [].slice.call(fields).map((field) => {
						return field.id;
					});
					this.config.opts.notify.warning("fieldID required to remove specific fields.");
					this.config.opts.notify.warning("Removing last field since no ID was supplied.");
					this.config.opts.notify.warning("Available IDs: " + availableIds.join(", "));
					fieldID = availableIds[availableIds.length - 1];
				}
				const field = document.getElementById(fieldID);
				if (!field) {
					this.config.opts.notify.warning("Field not found");
					return false;
				}
				const $field = $(field);
				const fieldRowWrapper = $field.closest(this.formBuilder.rowWrapperClassSelector);
				$field.slideUp(animationSpeed, function() {
					$field.removeClass("deleting");
					$field.remove();
					fieldRemoved = true;
					_this.save();
					if (!form.childNodes.length) {
						form.classList.add("empty");
						form.dataset.content = import_mi18n_min.default.current.getStarted;
					}
				});
				const userEvents = Object.assign({}, this.config.opts.typeUserEvents["*"], this.config.opts.typeUserEvents[field.type]);
				if (userEvents && userEvents.onremove) userEvents.onremove(field);
				this.d.stage.dispatchEvent(new Event("fieldRemoved", {
					bubbles: true,
					cancelable: false
				}));
				if (fieldRowWrapper.length) {
					this.removeContainerProtection(`${fieldID}-cont`);
					const timeout = setTimeout(() => {
						clearTimeout(timeout);
						$(document).trigger("checkRowCleanup", [{ rowWrapperID: fieldRowWrapper.attr("id") }]);
					}, 333);
				}
				const fieldData = $field.data("fieldData") || {};
				this.config.opts.onRemoveField(fieldID, fieldData, field);
				return fieldRemoved;
			}
			/**
			* Generate markup for form action buttons
			* @param  {Object} buttonData
			* @return {HTMLElement} DOM element for action button
			*/
			processActionButtons(buttonData) {
				const { label, events, ...attrs } = buttonData;
				let labelText = label;
				const data = this.data;
				if (!labelText) if (attrs.id) labelText = import_mi18n_min.default.current[attrs.id] || capitalize(attrs.id);
				else labelText = "";
				else labelText = import_mi18n_min.default.current[labelText] || labelText;
				if (!attrs.id) attrs.id = `${data.formID}-action-${Math.round(Math.random() * 1e3)}`;
				else attrs.id = `${data.formID}-${attrs.id}-action`;
				const button = markup("button", labelText, attrs);
				if (events) {
					for (const event in events) if (events.hasOwnProperty(event)) button.addEventListener(event, (evt) => events[event](evt));
				}
				return button;
			}
			/**
			* Register any subtype controls specified in the 'subtypes' option, retrieve
			* all defined subtypes & build the export subtype format
			* @param  {Array} subtypeOpts
			* @return {Array} subtypes
			*/
			processSubtypes(subtypeOpts) {
				const disabledSubtypes = this.config.opts.disabledSubtypes;
				for (const fieldType in subtypeOpts) if (subtypeOpts.hasOwnProperty(fieldType)) control.register(subtypeOpts[fieldType], control.getClass(fieldType), fieldType);
				const registeredSubtypes = control.getRegisteredSubtypes();
				const subtypeDef = Object.entries(registeredSubtypes).reduce((acc, [key, val]) => {
					acc[key] = disabledSubtypes[key] && subtract(disabledSubtypes[key], val) || val;
					return acc;
				}, {});
				const subtypes = {};
				for (const fieldType in subtypeDef) if (subtypeDef.hasOwnProperty(fieldType)) {
					const formatted = [];
					for (const subtype of subtypeDef[fieldType]) {
						const controlClass = control.getClass(fieldType, subtype);
						const label = controlClass.mi18n(`subtype.${subtype}`) || controlClass.mi18n(subtype) || subtype;
						formatted.push({
							label,
							value: subtype
						});
					}
					subtypes[fieldType] = formatted;
				}
				return subtypes;
			}
			/**
			* Generate stage and controls dom elements
			* @param  {string} formID
			* @param  {string} controlPosition
			*/
			editorUI(formID, controlPosition) {
				const d = this.d;
				const data = this.data;
				const id = formID || data.formID;
				const controlPositionClass = (controlPosition || "") === "left" ? "controls-left" : "controls-right";
				d.editorWrap = markup("div", null, {
					id: `${data.formID}-form-wrap`,
					className: `form-wrap form-builder formbuilder-embedded-bootstrap ${mobileClass()} ${controlPositionClass}`
				});
				d.stage = markup("ul", null, {
					id,
					className: "frmb stage-wrap"
				});
				d.controls = markup("ul", null, {
					id: `${id}-control-box`,
					className: "frmb-control"
				});
				d.formActions = markup("div", this.formActionButtons(), { className: "form-actions btn-group" });
			}
			/**
			* Generates form action buttons
			* @return {HTMLElement[]} formActions btn-group
			*/
			formActionButtons() {
				const opts = this.config.opts;
				return opts.actionButtons.map((btnData) => {
					if (btnData.id && opts.disabledActionButtons.indexOf(btnData.id) === -1) return this.processActionButtons(btnData);
				}).filter(Boolean);
			}
			/**
			* Process user configured options
			* @param  {Object} options
			* @return {Object} processedOptions
			*/
			processOptions(options) {
				const _this = this;
				const { actionButtons, replaceFields, ...opts } = options;
				let fieldEditContainer = opts.fieldEditContainer;
				if (typeof opts.fieldEditContainer === "string") fieldEditContainer = document.querySelector(opts.fieldEditContainer);
				const mergedActionButtons = [
					{
						type: "button",
						id: "clear",
						className: "clear-all btn btn-danger",
						events: { click: _this.confirmRemoveAll.bind(_this) }
					},
					{
						type: "button",
						label: "viewJSON",
						id: "data",
						className: "btn btn-default get-data",
						events: { click: _this.showData.bind(_this) }
					},
					{
						type: "button",
						id: "save",
						className: "btn btn-primary save-template",
						events: { click: (evt) => {
							_this.save();
							_this.config.opts.onSave(evt, _this.data.formData);
						} }
					}
				].concat(actionButtons);
				opts.fields = opts.fields.concat(replaceFields);
				opts.disableFields = opts.disableFields.concat(replaceFields.map(({ type }) => type && type));
				if (opts.dataType === "xml") opts.disableHTMLLabels = true;
				_this.config.opts = {
					actionButtons: mergedActionButtons,
					fieldEditContainer,
					...opts
				};
				return _this.config.opts;
			}
			/**
			* Small wrapper for input markup
			* @param  {Object} attrs
			* @return {Object} DOM element
			*/
			input(attrs = {}) {
				return markup("input", null, attrs);
			}
			/**
			* Gets the data for current instance of formBuilder
			* @param  {string} type
			* @param  {boolean} formatted
			* @return {Array|string} formData
			*/
			getFormData(type = "js", formatted = false) {
				const h = this;
				return {
					js: () => h.prepData(h.d.stage),
					xml: () => h.xmlSave(h.d.stage),
					json: (formatted) => window.JSON.stringify(h.prepData(h.d.stage), null, formatted && "  ")
				}[type](formatted);
			}
			/**
			* @param $prevHolder
			* @returns {Object[]}
			*/
			tmpCleanPrevHolder($prevHolder) {
				const _this = this;
				const cleanedFields = [];
				const formGroup = $prevHolder.find(".form-group");
				tmpCleanColumnInfo(formGroup);
				formGroup.find("*").each(function(i, field) {
					tmpCleanColumnInfo($(field));
				});
				function tmpCleanColumnInfo($field) {
					const classAttr = $field.attr("class");
					if (typeof classAttr !== "undefined" && classAttr !== false) {
						const parseResult = _this.tryParseColumnInfo($field[0]);
						$field.attr("class", $field.attr("class").replace("__fb-tmp-col-", "col-"));
						$field.attr("class", $field.attr("class").replace("__fb-tmp-row-", "row-"));
						$field.attr("class", $field.attr("class").replace("col-", "__fb-tmp-col-"));
						$field.attr("class", $field.attr("class").replace("row-", "__fb-tmp-row-"));
						const result = {};
						result["field"] = $field;
						result["columnInfo"] = parseResult;
						cleanedFields.push(result);
					}
				}
				return cleanedFields;
			}
			/**
			* @typedef BsColumnInfo
			* @param {string} [rowUniqueId]
			* @param {string} [columnSize]
			*/
			/**
			* @param data
			* @returns {BsColumnInfo}
			*/
			tryParseColumnInfo(data) {
				const result = {};
				if (data.className) {
					const classes = getAllGridRelatedClasses(data.className);
					if (classes && classes.length > 0) classes.forEach((element) => {
						if (element.startsWith("row-")) result["rowUniqueId"] = element.replace("row-", "").trim();
						else result["columnSize"] = element;
					});
				}
				return result;
			}
			/**
			*  Remove one reference that protected this potentially empty container. There may be other open fields needing the container
			*  @param {string} containerID
			*/
			removeContainerProtection(containerID) {
				const index = this.formBuilder.preserveTempContainers.indexOf(containerID);
				if (index !== -1) this.formBuilder.preserveTempContainers.splice(index, 1);
			}
			/**
			* Briefly highlight on/off
			* @param {jQuery} field
			* @param {number} ms
			*/
			toggleHighlight(field, ms = 600) {
				field.addClass("moveHighlight");
				setTimeout(function() {
					field.removeClass("moveHighlight");
				}, ms);
			}
			/**
			* Show a message in the snackbar
			* @param {string} msg
			* @param {number} timeout
			*/
			showToast(msg, timeout = 3e3) {
				if (this.toastTimer != null) {
					window.clearTimeout(this.toastTimer);
					this.toastTimer = null;
				}
				this.toastTimer = setTimeout(function() {
					$(".snackbar").removeClass("show");
				}, timeout);
				$(".snackbar").addClass("show").html(msg);
			}
			/**
			* Calculate the 2D distance between two points
			* @param x1
			* @param y1
			* @param x2
			* @param y2
			* @returns {number}
			*/
			getDistanceBetweenPoints(x1, y1, x2, y2) {
				const y = x2 - x1;
				const x = y2 - y1;
				return Math.floor(Math.sqrt(x * x + y * y));
			}
			/**
			* Return full row name (row-1)
			* @param className
			* @returns {string}
			*/
			getRowClass(className) {
				if (className) {
					const splitClasses = className.split(" ").filter((x) => x.startsWith("row-"));
					if (splitClasses && splitClasses.length > 0) return splitClasses[0];
				}
				return "";
			}
			/**
			* Return the row value i.e row-2 would return '2'
			* @param {string} className
			* @returns {string} Row value as string or '0' for invalid definitions
			*/
			getRowValue(className) {
				if (className) {
					const rowClass = this.getRowClass(className);
					if (rowClass) return rowClass.split("-")[1];
				}
				return "0";
			}
			/**
			* Example className of 'row row-1' would be changed for 'row row-4' where 4 is the newValue
			* @deprecated Function is not called anywhere
			*/
			changeRowClass(className, newValue) {
				const rowClass = this.getRowClass(className);
				return className.replace(rowClass, `row-${newValue}`);
			}
			/**
			* Return the column size i.e col-md-6 would return 6
			* @param {string} className
			* @return {number} Column value between 1-12 or 0 for invalid definitions
			*/
			getBootstrapColumnValue(className) {
				if (className) {
					const bootstrapClass = this.getBootstrapColumnClass(className);
					if (bootstrapClass) return parseInt(bootstrapClass.split("-")[2]);
				}
				return 0;
			}
			/**
			* Return the prefix (col-md)
			* @param {string} className
			* @returns {string}
			*/
			getBootstrapColumnPrefix(className) {
				if (className) {
					const bootstrapClass = this.getBootstrapColumnClass(className);
					if (bootstrapClass) return `${bootstrapClass.split("-")[0]}-${bootstrapClass.split("-")[1]}`;
				}
				return "";
			}
			/**
			* Return full class name (col-md-6)
			* @param {string} className
			* @returns {string}
			*/
			getBootstrapColumnClass(className) {
				if (className) {
					const splitClasses = className.split(" ").filter((className) => bootstrapColumnRegex.test(className));
					if (splitClasses && splitClasses.length > 0) return splitClasses[0];
				}
				return "";
			}
			/**
			* Example className of 'row row-1 col-md-6' would be changed for 'row row-1 col-md-4' where 4 is the newValue
			* @param {string} className
			* @param {number} newValue
			* @returns {string}
			*/
			changeBootstrapClass(className, newValue) {
				const boostrapClass = this.getBootstrapColumnClass(className);
				return className.replace(boostrapClass, `${this.getBootstrapColumnPrefix(className)}-${newValue}`);
			}
			/**
			*
			* @param {string} fieldID
			* @param {number} newValue
			*/
			syncBootstrapColumnWrapperAndClassProperty(fieldID, newValue) {
				const colWrapper = $(`#${fieldID}-cont`);
				colWrapper.attr("class", this.changeBootstrapClass(colWrapper.attr("class"), newValue));
				const inputClassElement = $(`#className-${fieldID}`);
				if (inputClassElement.val()) inputClassElement.val(this.changeBootstrapClass(inputClassElement.val(), newValue));
			}
			/**
			* Updates the field's className to include the current wrapping row, removing the previous row if defined
			* @param {HTMLElement} field
			* @param {HTMLElement} wrapperRow
			*/
			syncFieldWithNewRow(field, wrapperRow) {
				if (field) {
					const inputClassElement = $(field).find(".fld-className");
					const currentClassName = inputClassElement.val()?.trim();
					if (currentClassName) {
						let currentClasses = currentClassName.split(" ");
						const oldRow = this.getRowClass(currentClassName);
						const newRow = this.getRowClass(wrapperRow?.className ?? "");
						if (oldRow !== newRow) {
							if (oldRow) currentClasses = currentClasses.filter(function(obj) {
								return obj !== oldRow;
							});
							if (newRow) currentClasses.push(newRow);
							inputClassElement.val(currentClasses.join(" "));
						}
					}
				}
			}
		};
		//#endregion
		//#region src/js/control/autocomplete.js
		/**
		* Autocomplete class
		* Output an autocomplete form element
		* @extends control
		*/
		var controlAutocomplete = class extends control {
			/**
			* definition
			* @return {Object} select control definition
			*/
			static get definition() {
				return { mi18n: { requireValidOption: "requireValidOption" } };
			}
			/**
			* build a text DOM element, supporting other jquery text form-control's
			* @return {Object} DOM Element to be injected into the form.
			*/
			build() {
				const { values, type, ...data } = this.config;
				const keyboardNav = (e) => {
					const list = e.target.nextSibling.nextSibling;
					const hiddenField = e.target.nextSibling;
					const activeOption = this.getActiveOption(list);
					let direction = (/* @__PURE__ */ new Map([
						[38, () => {
							const previous = this.getPreviousOption(activeOption);
							if (previous) this.selectOption(list, previous);
						}],
						[40, () => {
							const next = this.getNextOption(activeOption);
							if (next) this.selectOption(list, next);
						}],
						[13, () => {
							if (activeOption) {
								e.target.value = activeOption.innerHTML;
								hiddenField.value = activeOption.getAttribute("value");
								if (list.style.display === "none") this.showList(list, activeOption);
								else this.hideList(list);
							} else if (this.config.requireValidOption) {
								if (!this.isOptionValid(list, e.target.value)) {
									e.target.value = "";
									e.target.nextSibling.value = "";
								}
							}
							e.preventDefault();
						}],
						[27, () => {
							this.hideList(list);
						}]
					])).get(e.keyCode);
					if (!direction) direction = () => false;
					return direction();
				};
				const fauxAttrs = Object.assign({}, data, {
					id: `${data.id}-input`,
					autocomplete: "off",
					events: {
						focus: (evt) => {
							const list = evt.target.nextSibling.nextSibling;
							const filteredOptions = filter(list.querySelectorAll("li"), evt.target.value);
							evt.target.addEventListener("keydown", keyboardNav);
							if (evt.target.value.length > 0) {
								const selectedOption = filteredOptions.length > 0 ? filteredOptions[filteredOptions.length - 1] : null;
								this.showList(list, selectedOption);
							}
						},
						blur: (evt) => {
							evt.target.removeEventListener("keydown", keyboardNav);
							const blurTimeout = setTimeout(() => {
								evt.target.nextSibling.nextSibling.style.display = "none";
								clearTimeout(blurTimeout);
							}, 200);
							if (this.config.requireValidOption) {
								const list = evt.target.nextSibling.nextSibling;
								if (!this.isOptionValid(list, evt.target.value)) {
									evt.target.value = "";
									evt.target.nextSibling.value = "";
								}
							}
						},
						input: (evt) => {
							const list = evt.target.nextSibling.nextSibling;
							const hiddenField = evt.target.nextSibling;
							hiddenField.value = evt.target.value;
							const filteredOptions = filter(list.querySelectorAll("li"), evt.target.value);
							if (filteredOptions.length == 0) this.hideList(list);
							else {
								let activeOption = this.getActiveOption(list);
								if (!activeOption) activeOption = filteredOptions[filteredOptions.length - 1];
								this.showList(list, activeOption);
							}
						}
					}
				});
				const hiddenAttrs = Object.assign({}, data, { type: "hidden" });
				delete fauxAttrs.name;
				const field = [this.markup("input", null, fauxAttrs), this.markup("input", null, hiddenAttrs)];
				const options = values.map((optionData) => {
					const label = optionData.label;
					const config = {
						events: { click: (evt) => {
							const list = evt.target.parentElement;
							const field = list.previousSibling.previousSibling;
							field.value = optionData.label;
							field.nextSibling.value = optionData.value;
							this.hideList(list);
						} },
						value: optionData.value
					};
					return this.markup("li", label, config);
				});
				field.push(this.markup("ul", options, {
					id: `${data.id}-list`,
					className: `formbuilder-${type}-list`
				}));
				return field;
			}
			/**
			* Hides autocomplete list and deselects all the options
			* @param {Object} list - list of autocomplete options
			*/
			hideList(list) {
				this.selectOption(list, null);
				list.style.display = "none";
			}
			/**
			* Shows autocomplete list. Automatically selects 'selectedOption'
			* @param {Object} list - list of autocomplete options
			* @param {Object} selectedOption - option to be selected
			*/
			showList(list, selectedOption) {
				this.selectOption(list, selectedOption);
				list.style.display = "block";
				list.style.width = list.parentElement.offsetWidth + "px";
			}
			/**
			* Returns first option from autocomplete list with 'active-option' class
			* @param {Object} list - list of autocomplete options
			* @return {Object} first list option with 'active-option' class
			*/
			getActiveOption(list) {
				const activeOption = list.getElementsByClassName("active-option")[0];
				if (activeOption && activeOption.style.display !== "none") return activeOption;
				return null;
			}
			/**
			* Previous next option to the current option
			* @param {Object} current - currently selected option
			* @return {Object} previous option to the current option or null if previous doesn't exist
			*/
			getPreviousOption(current) {
				let previous = current;
				do
					previous = previous ? previous.previousSibling : null;
				while (previous != null && previous.style.display === "none");
				return previous;
			}
			/**
			* Returns next option to the current option
			* @param {Object} current - currently selected option
			* @return {Object} next option to the current option or null if next doesn't exist
			*/
			getNextOption(current) {
				let next = current;
				do
					next = next ? next.nextSibling : null;
				while (next != null && next.style.display === "none");
				return next;
			}
			/**
			* Selects option in autocomplete list. Removes class 'active-option' from all options
			* and then adds that class to 'selected' option. If 'selected' is null then no option is selected
			* @param {Object} list - list of autocomplete options
			* @param {Object} selectedOption - option - 'li' element - to be selected in autocomplete list
			*/
			selectOption(list, selectedOption) {
				const options = list.querySelectorAll("li");
				for (let i = 0; i < options.length; i++) options[i].classList.remove("active-option");
				if (selectedOption) selectedOption.classList.add("active-option");
			}
			/**
			* Is the value in the autocomplete field in the pre-defined Options list?
			* @param {Object} list - list of autocomplete options
			* @param {Object} value -value trying to be set
			* @return {Object} - is the option in the pre defined list
			*/
			isOptionValid(list, value) {
				const options = list.querySelectorAll("li");
				let validValue = false;
				for (let i = 0; i < options.length; i++) if (options[i].innerHTML === value) {
					validValue = true;
					break;
				}
				return validValue;
			}
			/**
			* onRender callback
			* @param {Object} evt
			*/
			onRender(evt) {
				if (this.config.userData) {
					const $el = $("#" + this.config.name);
					const $options = $el.next();
					const preSelectedOption = this.config.userData[0];
					let selectedOption = null;
					$options.find("li").each(function() {
						if ($(this).attr("value") === preSelectedOption) selectedOption = $(this).get(0);
					});
					if (selectedOption === null) if (this.config.requireValidOption) return;
					else {
						$el.prev().val(this.config.userData[0]);
						return;
					}
					$el.prev().val(selectedOption.innerHTML);
					$el.val(selectedOption.getAttribute("value"));
					const list = $el.next().get(0);
					if (list.style.display === "none") this.showList(list, selectedOption);
					else this.hideList(list);
				}
				return evt;
			}
		};
		control.register("autocomplete", controlAutocomplete);
		//#endregion
		//#region src/js/control/button.js
		/**
		* Button class
		* Output a <button>Label</button> form element
		* @extends control
		*/
		var controlButton = class extends control {
			/**
			* build a text DOM element, supporting other jquery text form-control's
			* @return {{field: HTMLElement, layout: string}} DOM Element to be injected into the form.
			*/
			build() {
				return {
					field: this.markup("button", this.label, this.config),
					layout: "noLabel"
				};
			}
		};
		control.register("button", controlButton);
		control.register([
			"button",
			"submit",
			"reset"
		], controlButton, "button");
		//#endregion
		//#region src/js/control/custom.js
		/**
		* Support for custom controls
		* Implementing support for custom templates being passed as options to formBuilder/Render
		* @extends control
		*/
		var controlCustom = class extends control {
			constructor(config, preview, template) {
				super(config, preview);
				this.template = template;
			}
			/**
			* build a custom control defined in the templates option
			* @return {{field: any, layout: any}} DOM Element to be injected into the form.
			*/
			build() {
				let custom = this.template;
				/* istanbul ignore next */
				if (!custom) return control.error(`Invalid custom control type '${this.type}'. Please ensure you have registered it correctly as a template option.`);
				const fieldData = Object.assign(this.config);
				for (const prop of [
					"label",
					"description",
					"subtype",
					"id",
					"preview",
					"required",
					"title",
					"aria-required",
					"type"
				]) fieldData[prop] = this.config[prop] || this[prop];
				custom = custom.bind(this);
				custom = custom(fieldData);
				if (custom.js) this.js = custom.js;
				if (custom.css) this.css = custom.css;
				this.onRender = custom.onRender;
				return {
					field: custom.field,
					layout: custom.layout
				};
			}
		};
		//#endregion
		//#region src/js/control/hidden.js
		/**
		* Hidden input class
		* Output a <input type="hidden" ... /> form element
		* @extends control
		*/
		var controlHidden = class extends control {
			/**
			* build a hidden input dom element
			* @return {Object} DOM Element to be injected into the form.
			*/
			build() {
				this.field = this.markup("input", null, this.config);
				return {
					field: this.field,
					layout: "hidden"
				};
			}
			/**
			* onRender callback
			*/
			onRender() {
				if (this.config.userData) $(this.field).val(this.config.userData[0]);
			}
		};
		control.register("hidden", controlHidden);
		//#endregion
		//#region src/js/control/paragraph.js
		/**
		* Text input class
		* Output a <input type="text" ... /> form element
		* @extends control
		*/
		var controlParagraph = class extends control {
			/**
			* build a paragraph DOM element
			* @return {Object} DOM Element to be injected into the form.
			*/
			build() {
				const { type, ...attrs } = this.config;
				let tag = type;
				const typeMap = {
					paragraph: "p",
					header: this.subtype
				};
				if (typeMap[type]) tag = typeMap[type];
				return {
					field: this.markup(tag, utils.parsedHtml(this.label), attrs),
					layout: "noLabel"
				};
			}
		};
		control.register(["paragraph", "header"], controlParagraph);
		control.register([
			"p",
			"address",
			"blockquote",
			"canvas",
			"output"
		], controlParagraph, "paragraph");
		control.register([
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6"
		], controlParagraph, "header");
		//#endregion
		//#region src/js/control/select.js
		/**
		* Text input class
		* Output a <input type="text" ... /> form element
		* @extends control
		*/
		var controlSelect = class extends control {
			/**
			* definition
			* @return {Object} select control definition
			*/
			static get definition() {
				return {
					inactive: ["checkbox"],
					mi18n: { minSelectionRequired: "minSelectionRequired" }
				};
			}
			/**
			* build a select DOM element, supporting other jquery text form-control's
			* @return {Object} DOM Element to be injected into the form.
			*/
			build() {
				const options = [];
				const { values, value, placeholder, type, inline, other, toggle, ...data } = this.config;
				const optionType = type.replace("-group", "");
				const isSelect = type === "select";
				if (data.multiple || type === "checkbox-group") data.name = data.name + "[]";
				if ((type === "checkbox-group" || type === "radio-group") && data.required) {
					const self = this;
					const defaultOnRender = this.onRender.bind(this);
					this.onRender = function() {
						defaultOnRender();
						self.groupRequired();
					};
				}
				delete data.title;
				if (values) {
					if (placeholder && isSelect) options.push(this.markup("option", placeholder, {
						disabled: true,
						selected: true,
						value: ""
					}));
					for (let i = 0; i < values.length; i++) {
						let option = values[i];
						if (typeof option === "string") option = {
							label: option,
							value: option
						};
						const { label = "", ...optionAttrs } = option;
						optionAttrs.id = `${data.id}-${i}`;
						if (!optionAttrs.selected || placeholder) delete optionAttrs.selected;
						if (typeof value !== "undefined" && optionAttrs.value === value) optionAttrs.selected = true;
						if (isSelect) {
							const o = this.markup("option", document.createTextNode(label), optionAttrs);
							options.push(o);
						} else {
							const labelContents = [label];
							let wrapperClass = `formbuilder-${optionType}`;
							if (inline) wrapperClass += "-inline";
							optionAttrs.type = optionType;
							if (optionAttrs.selected) {
								optionAttrs.checked = "checked";
								delete optionAttrs.selected;
							}
							const input = this.markup("input", null, Object.assign({}, data, optionAttrs));
							const labelAttrs = { for: optionAttrs.id };
							let output = [input, this.markup("label", labelContents, labelAttrs)];
							if (toggle) {
								delete labelAttrs.for;
								labelAttrs.className = "kc-toggle";
								labelContents.unshift(input, this.markup("span"));
								output = this.markup("label", labelContents, labelAttrs);
							}
							const wrapper = this.markup("div", output, { className: wrapperClass });
							options.push(wrapper);
						}
					}
					if (!isSelect && other) {
						const otherOptionAttrs = {
							id: `${data.id}-other`,
							className: `${data.className ?? ""} other-option`,
							value: ""
						};
						let wrapperClass = `formbuilder-${optionType}`;
						if (inline) wrapperClass += "-inline";
						const optionAttrs = Object.assign({}, data, otherOptionAttrs);
						optionAttrs.type = optionType;
						const otherValAttrs = {
							type: "text",
							events: { input: (evt) => {
								const otherInput = evt.target;
								const other = otherInput.parentElement.previousElementSibling;
								other.value = otherInput.value;
							} },
							id: `${otherOptionAttrs.id}-value`,
							className: "other-val"
						};
						const primaryInput = this.markup("input", null, optionAttrs);
						const otherInputs = [document.createTextNode(control.mi18n("other")), this.markup("input", null, otherValAttrs)];
						const inputLabel = this.markup("label", otherInputs, { for: optionAttrs.id });
						const wrapper = this.markup("div", [primaryInput, inputLabel], { className: wrapperClass });
						options.push(wrapper);
					}
				}
				if (type === "select") this.dom = this.markup(optionType, options, trimObj(data, true));
				else {
					let className = type;
					if (inline) className += ` ${className}--inline`;
					this.dom = this.markup("div", options, { className });
				}
				return this.dom;
			}
			/**
			* setCustomValidity for checkbox-group
			*/
			groupRequired() {
				const allInputs = this.element.getElementsByTagName("input");
				const checkboxes = this.element.querySelectorAll("input:not([type=text])");
				const otherCheckbox = this.element.querySelector(".other-option");
				const otherValue = this.element.querySelector(".other-val");
				const setValidity = (checkbox, isValid) => {
					const minReq = control.mi18n("minSelectionRequired", 1);
					if (isValid) checkbox.setCustomValidity("");
					else checkbox.setCustomValidity(minReq);
				};
				const toggleRequired = (checkboxes, otherCheckbox, otherValue, isValid) => {
					Array.prototype.forEach.call(checkboxes, (cb) => {
						if (isValid) cb.removeAttribute("required");
						else cb.setAttribute("required", "required");
						setValidity(cb, isValid);
					});
					if (otherCheckbox) if (otherCheckbox.checked) otherValue.setAttribute("required", "required");
					else otherValue.removeAttribute("required");
				};
				const toggleValid = () => {
					toggleRequired(checkboxes, otherCheckbox, otherValue, [].some.call(checkboxes, (cb) => cb.checked));
				};
				for (let i = allInputs.length - 1; i >= 0; i--) allInputs[i].addEventListener("change", toggleValid);
				toggleValid();
			}
			/**
			* onRender callback
			*/
			onRender() {
				if (this.config.userData) {
					const selectedOptions = this.config.userData.slice();
					if (this.config.type === "select") $(this.dom).val(selectedOptions).prop("selected", true);
					else if (this.config.type.endsWith("-group")) {
						if (this.config.type === "checkbox-group") this.dom.querySelectorAll("input[type=checkbox]").forEach((input) => {
							input.removeAttribute("checked");
						});
						this.dom.querySelectorAll("input").forEach((input) => {
							if (input.classList.contains("other-val")) return;
							for (let i = 0; i < selectedOptions.length; i++) if (input.value === selectedOptions[i]) {
								input.setAttribute("checked", "checked");
								selectedOptions.splice(i, 1);
								break;
							}
							if (input.id.endsWith("-other") && selectedOptions.length > 0) {
								const otherVal = this.dom.querySelector(`#${input.id}-value`);
								input.setAttribute("checked", "checked");
								otherVal.value = input.value = selectedOptions[0];
								otherVal.style.display = "inline-block";
							}
						});
					}
				}
			}
		};
		control.register([
			"select",
			"checkbox-group",
			"radio-group",
			"checkbox"
		], controlSelect);
		//#endregion
		//#region src/js/control/text.js
		/**
		* Text input class
		* Output a <input type="text" ... /> form element
		* @extends control
		*/
		var controlText = class extends control {
			/**
			* class configuration
			*/
			static get definition() {
				return { mi18n: {
					date: "dateField",
					file: "fileUpload"
				} };
			}
			/**
			* build a text DOM element, supporting other jquery text form-control's
			* @return {Object} DOM Element to be injected into the form.
			*/
			build() {
				let { name } = this.config;
				name = this.config.multiple ? `${name}[]` : name;
				const inputConfig = Object.assign({}, this.config, { name });
				this.dom = this.markup("input", null, inputConfig);
				return this.dom;
			}
			/**
			* onRender callback
			*/
			onRender() {
				if (this.config.userData) $(this.dom).val(this.config.userData[0]);
			}
		};
		control.register([
			"text",
			"file",
			"date",
			"number"
		], controlText);
		control.register([
			"text",
			"password",
			"email",
			"color",
			"tel"
		], controlText, "text");
		control.register([
			"date",
			"time",
			"datetime-local"
		], controlText, "date");
		control.register(["number", "range"], controlText, "number");
		//#endregion
		//#region src/js/control/textarea.js
		/**
		* Text input class
		* Output a <input type="text" ... /> form element
		* @extends control
		*/
		var controlTextarea = class extends control {
			/**
			* class configuration
			*/
			static get definition() {
				return { mi18n: { textarea: "textArea" } };
			}
			/**
			* build a text DOM element, supporting other jquery text form-control's
			* @return {Object} DOM Element to be injected into the form.
			*/
			build() {
				const { value = "", ...attrs } = this.config;
				delete attrs["type"];
				this.field = this.markup("textarea", this.parsedHtml(value), attrs);
				return this.field;
			}
			/**
			* onRender callback
			*/
			onRender() {
				if (this.config.userData) $(this.field).val(this.config.userData[0]);
			}
			/**
			* extend the default events to add a prerender for textareas
			* @param {string} eventType
			* @return {Function} prerender function
			*/
			on(eventType) {
				if (eventType == "prerender" && this.preview) return (element) => {
					if (this.field) element = this.field;
					$(element).on("mousedown", (e) => {
						e.stopPropagation();
					});
				};
				return super.on(eventType);
			}
		};
		control.register("textarea", controlTextarea);
		control.register("textarea", controlTextarea, "textarea");
		//#endregion
		//#region src/js/control/textarea.tinymce.js
		/**
		* TinyMCE editor element
		* See https://www.tinymce.com/ for more info
		*
		* To customise the options on this editor, simply pass any properties you wish to overwrite in the controlConfig option to formRender
		* e.g. the below example would disable the ability to paste images as a base64 encoded src
		* ```
		* var renderOpts = {
		*    controlConfig: {
		*      'textarea.tinymce': {
		*         paste_data_images: false
		*       }
		*    }
		* };
		* ```
		* @extends controlTextarea
		*/
		var controlTinymce = class extends controlTextarea {
			/**
			* configure the tinymce editor requirements
			*/
			configure() {
				this.js = [];
				if (!window.tinymce) this.js.push("https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.9.11/tinymce.min.js");
				if (this.classConfig.js) {
					let js = this.classConfig.js;
					if (!Array.isArray(js)) js = new Array(js);
					this.js = this.js.concat(js);
					delete this.classConfig.js;
				}
				if (this.classConfig.css) this.css = this.classConfig.css;
				this.editorOptions = {
					height: 250,
					paste_data_images: true,
					plugins: [
						"advlist",
						"autolink",
						"lists",
						"link",
						"image",
						"charmap",
						"print",
						"preview",
						"anchor",
						"searchreplace",
						"visualblocks",
						"code",
						"fullscreen",
						"insertdatetime",
						"media",
						"table",
						"contextmenu",
						"paste",
						"code"
					],
					toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | table"
				};
			}
			/**
			* build a textarea DOM element, to be later replaced by the TinyMCE editor
			* @return {Object} DOM Element to be injected into the form.
			*/
			build() {
				const { value = "", ...attrs } = this.config;
				delete attrs["type"];
				this.field = this.markup("textarea", this.parsedHtml(value), attrs);
				if (attrs.disabled) this.editorOptions.readonly = true;
				return this.field;
			}
			/**
			* When the element is rendered into the DOM, execute the following code to initialise it
			*/
			onRender() {
				const oldInst = window.tinymce.get(this.id);
				if (oldInst) window.tinymce.remove(oldInst);
				const options = jQuery.extend(this.editorOptions, this.classConfig);
				options.target = this.field;
				const removedPlugins = [];
				if (Number(window.tinymce.majorVersion) >= 5) removedPlugins.push("contextmenu");
				if (Number(window.tinymce.majorVersion) >= 6) removedPlugins.push("paste", "print");
				options.plugins = options.plugins.filter((plugin) => {
					return removedPlugins.indexOf(plugin) === -1;
				});
				const userData = this.config.userData ? this.parsedHtml(this.config.userData[0]) : void 0;
				const copiedData = window.lastFormBuilderCopiedTinyMCE ? this.parsedHtml(window.lastFormBuilderCopiedTinyMCE) : void 0;
				window.lastFormBuilderCopiedTinyMCE = null;
				const afterInit = function(inst) {
					if (copiedData) inst[0].setContent(copiedData);
					else if (userData) inst[0].setContent(userData);
				};
				setTimeout(() => {
					window.tinymce.init(options).then(afterInit);
				}, 0);
			}
		};
		controlTextarea.register("tinymce", controlTinymce, "textarea");
		//#endregion
		//#region src/js/control/textarea.quill.js
		/**
		* Quill rich text editor element
		* See https://quilljs.com/ for more info
		* @extends controlTextarea
		*/
		var controlQuill = class extends controlTextarea {
			/**
			* configure the quill editor requirements
			*/
			configure() {
				const defaultClassConfig = {
					js: "https://cdn.quilljs.com/1.2.4/quill.js",
					css: "https://cdn.quilljs.com/1.2.4/quill.snow.css"
				};
				const defaultEditorConfig = {
					modules: { toolbar: [
						[{ header: [
							1,
							2,
							false
						] }],
						[
							"bold",
							"italic",
							"underline"
						],
						["code-block"]
					] },
					placeholder: this.config.placeholder || "",
					theme: "snow"
				};
				const [customClassConfig, customEditorConfig] = utils.splitObject(this.classConfig, ["css", "js"]);
				Object.assign(this, {
					...defaultClassConfig,
					...customClassConfig
				});
				this.editorConfig = {
					...defaultEditorConfig,
					...customEditorConfig
				};
			}
			/**
			* build a div DOM element to be later replaced with the quill editor
			* @return {Object} DOM Element to be injected into the form.
			*/
			build() {
				const { value = "", ...attrs } = this.config;
				delete attrs["type"];
				this.field = this.markup("div", null, attrs);
				if (this.field.classList.contains("form-control")) this.field.classList.remove("form-control");
				return this.field;
			}
			/**
			* When the element is rendered into the DOM, execute the following code to initialise it
			* @param {Object} evt - event
			*/
			onRender(evt) {
				const value = this.config.value || "";
				const Delta = window.Quill.import("delta");
				window.fbEditors.quill[this.id] = {};
				const editor = window.fbEditors.quill[this.id];
				editor.instance = new window.Quill(this.field, this.editorConfig);
				editor.data = new Delta();
				if (value) editor.instance.setContents(window.JSON.parse(this.parsedHtml(value)));
				editor.instance.on("text-change", function(delta) {
					editor.data = editor.data.compose(delta);
				});
				return evt;
			}
		};
		controlTextarea.register("quill", controlQuill, "textarea");
		//#endregion
		//#region src/js/customControls.js
		/**
		* customControls serves as a register for two types of custom fields supported by formBuilder
		*  - Custom controls defined by a template
		*  - Custom control defined by a field definition only
		*
		*  The code takes two paths
		*   - Custom controls with a template will be a proxy function created to generate a controlCustom class
		*   - Fields without templates will map to their defined type/subtype class
		*/
		var customControls = class {
			constructor(templates = {}, fields = []) {
				this.customRegister = {};
				this.templateControlRegister = {};
				this.def = {
					icon: {},
					i18n: {}
				};
				this.register(templates, fields);
			}
			/**
			* Override the register method to allow passing 'templates' configuration data
			* @param {Object} templates an object/hash of template data as defined https://formbuilder.online/docs/formBuilder/options/templates/
			* @param {Array} fields
			*/
			register(templates = {}, fields = []) {
				fields.forEach((field) => {
					if (field.template) {
						const fieldType = field.type || field.attrs?.type;
						templates[fieldType] = field.template;
					}
				});
				const locale = import_mi18n_min.default.locale;
				if (!this.def.i18n[locale]) this.def.i18n[locale] = {};
				const _this = this;
				Object.keys(templates).forEach((templateName) => {
					const templateControl = function(config, preview) {
						this.customControl = new controlCustom(config, preview, templates[templateName]);
						/**
						* build a custom control defined in the templates option
						* @return {{field: any, layout: any}} DOM Element to be injected into the form.
						*/
						this.build = function() {
							return this.customControl.build();
						};
						this.on = function(eventType) {
							return this.customControl.on(eventType);
						};
					};
					templateControl.definition = {};
					templateControl.label = (type) => _this.label(type);
					templateControl.icon = (type) => _this.icon(type);
					this.templateControlRegister[templateName] = templateControl;
				});
				for (const field of fields) {
					let type = field.type;
					field.attrs = field.attrs || {};
					if (!type) {
						if (!field.attrs.type) {
							control.error("Ignoring invalid custom field definition. Please specify a type property.");
							continue;
						}
						type = field.attrs.type;
					}
					let lookup = field.subtype || type;
					if (!templates[type]) try {
						const controlClass = control.getClass(type, field.subtype);
						lookup = field.datatype ? field.datatype : `${type}-${Math.floor(Math.random() * 9e3 + 1e3)}`;
						this.customRegister[lookup] = jQuery.extend(field, {
							type,
							class: controlClass
						});
					} catch (e) {
						control.error("Error while registering custom field: " + type + (field.subtype ? ":" + field.subtype : "") + ". Unable to find any existing defined control or template for rendering.");
					}
					else {
						const controlClass = this.templateControlRegister[type];
						controlClass.definition = field;
						this.customRegister[lookup] = jQuery.extend(field, {
							type,
							class: controlClass
						});
					}
					this.def.i18n[locale][lookup] = Array.isArray(field.label) ? import_mi18n_min.default.get(...field.label) || field.label[0] : field.label;
					this.def.icon[lookup] = field.icon;
				}
			}
			/**
			* Retrieve the translated control label for a control type
			* @param {String} type
			* @return {String} translated control
			*/
			label(type) {
				/**
				* Retrieve a translated string
				* By default looks for translations defined against the class (for plugin controls)
				* Expects {locale1: {type: label}, locale2: {type: label}}, or {default: label}, or {local1: label, local2: label2}
				* @param {String} lookup string to retrieve the label / translated string for
				* @param {Object|Number|String} [args] - string or key/val pairs for string lookups with variables
				* @return {String} the translated label
				*/
				const def = this.def;
				let i18n = def.i18n || {};
				const locale = import_mi18n_min.default.locale;
				i18n = i18n[locale] || i18n.default || i18n;
				const lookupCamel = control.camelCase(type);
				const value = typeof i18n == "object" ? i18n[lookupCamel] || i18n[type] : i18n;
				if (value) return value;
				else {
					let mapped = def.mi18n;
					if (typeof mapped === "object") mapped = mapped[lookupCamel] || mapped[type];
					if (!mapped) mapped = lookupCamel;
					return import_mi18n_min.default.get(mapped);
				}
			}
			get definition() {
				return {};
			}
			/**
			* Retrieve the icon for a control type
			* @param {String} type
			* @return {String} icon
			*/
			icon(type) {
				const def = this.def;
				if (def && typeof def.icon === "object") return def.icon[type];
				return def.icon;
			}
			/**
			* Returns any custom fields that map to an existing type/subtype combination
			* @param  {string|false} type optional type of control we want to look up
			* subtypes of. If not specified will return all types
			* @return {Array|function} registered custom lookup keys
			*/
			getRegistered(type = false) {
				if (type) return this.templateControlRegister[type] ?? void 0;
				return Object.keys(this.customRegister);
			}
			/**
			* Retrieve the class for a specified control type
			* @param {String} type type of control we are looking up
			* a class mapped to this subtype. If none found, fall back to the type.
			* @return {Class} control subclass as defined in the call to register
			*/
			getClass(type) {
				return this.templateControlRegister[type] ?? void 0;
			}
			/**
			* Retrieve the class for a specified control type
			* @param {string} lookup - custom control lookup to check for
			* @return {Class} control subclass as defined in the call to register
			*/
			lookup(lookup) {
				return this.customRegister[lookup];
			}
		};
		var config_default = {
			name: "formbuilder-icons",
			css_prefix_text: "formbuilder-icon-",
			css_use_suffix: false,
			hinting: true,
			units_per_em: 1e3,
			ascent: 850,
			copyright: "Kevin Chappell",
			glyphs: [
				{
					"uid": "a113ca13e1dc6e9426ab05a6b9afb709",
					"css": "autocomplete",
					"code": 59392,
					"src": "custom_icons",
					"selected": true,
					"svg": {
						"path": "M375 312.5H437.5V375H375V312.5ZM250 250H187.5V312.5H250V250ZM375 250H312.5V312.5H375V250ZM125 312.5V375H187.5V312.5H125ZM187.5 437.5H250V375H187.5V437.5ZM312.5 437.5H375V375H312.5V437.5ZM250 312.5V375H312.5V312.5H250ZM125 875H187.5V812.5H125V875ZM250 875H312.5V812.5H250V875ZM375 875H437.5V812.5H375V875ZM562.5 812.5H500V875H562.5V812.5ZM1000 218.8V468.8C1000 518.8 956.3 562.5 906.3 562.5H875V750 937.5C875 975 850 1000 812.5 1000H62.5C25 1000 0 975 0 937.5V218.8C0 168.8 43.8 125 93.8 125H281.3 500V93.8 62.5H437.5 375V31.3 0H531.3 687.5V31.3 62.5H625 562.5V93.8 125H750 906.3C956.3 125 1000 168.8 1000 218.8ZM812.5 750H437.5 62.5V937.5H812.5V750ZM187.5 687.5V625H125V687.5H187.5ZM312.5 687.5V625H250V687.5H312.5ZM937.5 218.8C937.5 200 925 187.5 906.3 187.5H562.5V343.8 500H531.3 500V468.8 437.5H437.5V375H500V343.8 312.5H437.5V250H500V218.8 187.5H93.8C75 187.5 62.5 200 62.5 218.8V468.8C62.5 487.5 75 500 93.8 500H500V562.5H375V593.8 625H531.3 687.5V593.8 562.5H562.5V500H906.3C925 500 937.5 487.5 937.5 468.8V218.8Z",
						"width": 1e3
					},
					"search": ["autocomplete"]
				},
				{
					"uid": "60d3802098875c9d50eb2846aa852206",
					"css": "checkbox",
					"code": 59394,
					"src": "custom_icons",
					"selected": true,
					"svg": {
						"path": "M843.8 312.5V812.5C843.8 862.5 800 906.3 750 906.3H187.5C137.5 906.3 93.8 862.5 93.8 812.5V250C93.8 200 137.5 156.3 187.5 156.3H750C793.8 156.3 831.3 187.5 843.8 231.3L993.8 143.8 843.8 312.5ZM781.3 387.5L481.3 750 175 343.8 481.3 443.8 781.3 262.5V250C781.3 231.3 768.8 218.8 750 218.8H187.5C168.8 218.8 156.3 231.3 156.3 250V812.5C156.3 831.3 168.8 843.8 187.5 843.8H750C768.8 843.8 781.3 831.3 781.3 812.5V387.5Z",
						"width": 1e3
					},
					"search": ["checkbox"]
				},
				{
					"uid": "63a50266513c881511c22fcdb2122493",
					"css": "checkbox-group",
					"code": 59395,
					"src": "custom_icons",
					"selected": true,
					"svg": {
						"path": "M0 62.5H1000V0H0V62.5ZM0 187.5H1000V125H0V187.5ZM375 312.5V375H937.5V312.5H375ZM937.5 875V812.5H375V875H937.5ZM375 625H937.5V562.5H375V625ZM250 750L93.8 843.8 0 812.5 93.8 937.5 250 750ZM250 500L93.8 593.8 0 562.5 93.8 687.5 250 500ZM250 250L93.8 343.8 0 312.5 93.8 437.5 250 250Z",
						"width": 1e3
					},
					"search": ["checkbox-group"]
				},
				{
					"uid": "9f39a1f82b1cbb01f975506835a94c87",
					"css": "radio-group",
					"code": 59396,
					"src": "custom_icons",
					"selected": true,
					"svg": {
						"path": "M0 62.5H1000V0H0V62.5ZM0 187.5H1000V125H0V187.5ZM312.5 375H937.5V312.5H312.5V375ZM937.5 562.5H312.5V625H937.5V562.5ZM937.5 875V812.5H312.5V875H937.5ZM93.8 437.5C43.8 437.5 0 393.8 0 343.8S43.8 250 93.8 250 187.5 293.8 187.5 343.8 143.8 437.5 93.8 437.5ZM93.8 312.5C75 312.5 62.5 325 62.5 343.8S75 375 93.8 375 125 362.5 125 343.8 112.5 312.5 93.8 312.5ZM93.8 693.8C43.8 693.8 0 650 0 600S43.8 506.3 93.8 506.3 187.5 543.8 187.5 600 143.8 693.8 93.8 693.8ZM93.8 568.8C75 568.8 62.5 581.3 62.5 600S75 631.3 93.8 631.3 125 612.5 125 600 112.5 568.8 93.8 568.8ZM93.8 937.5C43.8 937.5 0 893.8 0 843.8S43.8 750 93.8 750 187.5 793.8 187.5 843.8 143.8 937.5 93.8 937.5ZM93.8 812.5C75 812.5 62.5 825 62.5 843.8S75 875 93.8 875 125 862.5 125 843.8 112.5 812.5 93.8 812.5Z",
						"width": 1e3
					},
					"search": ["radio-group"]
				},
				{
					"uid": "4cfbf7acfb7547f67749103ef0d58f05",
					"css": "rich-text",
					"code": 59397,
					"src": "custom_icons",
					"selected": true,
					"svg": {
						"path": "M937.5 62.5H62.5C25 62.5 0 87.5 0 125V875C0 912.5 25 937.5 62.5 937.5H937.5C975 937.5 1000 912.5 1000 875V125C1000 87.5 975 62.5 937.5 62.5ZM62.5 193.8H112.5V212.5H62.5V193.8ZM62.5 225H112.5V243.8H62.5V225ZM937.5 875H62.5V318.8H937.5V875ZM937.5 306.3H62.5V287.5H937.5V306.3ZM937.5 275H62.5V256.3H112.5V268.8H206.3V256.3H287.5V268.8H375V256.3H456.3V268.8H550V256.3H625V268.8H718.8V256.3H800V268.8H893.8V256.3H937.5V275ZM281.3 225V243.8H206.3V225H281.3ZM206.3 212.5V193.8H287.5V212.5H206.3ZM456.3 225V243.8H375V225H456.3ZM375 212.5V193.8H456.3V212.5H375ZM625 225V243.8H550V225H625ZM550 212.5V193.8H625V212.5H550ZM800 225V243.8H718.8V225H800ZM718.8 212.5V193.8H800V212.5H718.8ZM937.5 243.8H887.5V225H937.5V243.8ZM937.5 212.5H887.5V193.8H937.5V212.5ZM937.5 181.3H887.5V175H793.8V187.5H712.5V175H625V187.5H550V175H456.3V187.5H375V175H281.3V187.5H206.3V175H112.5V187.5H62.5V162.5H937.5V181.3ZM937.5 150H62.5V131.3H937.5V150ZM187.5 750V687.5H812.5V750H187.5ZM812.5 625H187.5V562.5H812.5V625ZM687.5 500H187.5V437.5H687.5V500Z",
						"width": 1e3
					},
					"search": ["rich-text"]
				},
				{
					"uid": "27d742cd4497db0344d7d72495c51f17",
					"css": "select",
					"code": 59398,
					"src": "custom_icons",
					"selected": true,
					"svg": {
						"path": "M0 0V875H0C0 912.5 25 937.5 62.5 937.5H687.5C725 937.5 750 912.5 750 875H750V312.5H1000V0H0ZM62.5 62.5H687.5V250H62.5V62.5ZM62.5 437.5H687.5V625H62.5V437.5ZM62.5 875V687.5H687.5V875H62.5ZM937.5 250H750V62.5H937.5V250ZM125 125H187.5V187.5H125V125ZM125 750H187.5V812.5H125V750ZM250 750H312.5V812.5H250V750ZM375 750H437.5V812.5H375V750ZM562.5 750V812.5H500V750H562.5ZM125 500H187.5V562.5H125V500ZM250 500H312.5V562.5H250V500ZM375 500H437.5V562.5H375V500ZM843.8 193.8L781.3 125H900L843.8 193.8ZM125 375V312.5H187.5V375H125L125 375ZM250 375V312.5H312.5V375H250L250 375Z",
						"width": 1e3
					},
					"search": ["select"]
				},
				{
					"uid": "b77875e20d0c91ac65379ed6723bcf67",
					"css": "textarea",
					"code": 59399,
					"src": "custom_icons",
					"selected": true,
					"svg": {
						"path": "M187.5 687.5V625H687.5V687.5H187.5L187.5 687.5ZM187.5 437.5H812.5V375H187.5V437.5L187.5 437.5ZM187.5 500V562.5H812.5V500H187.5L187.5 500ZM812.5 250H187.5V312.5H812.5V250L812.5 250ZM1000 875V125C1000 87.5 975 62.5 937.5 62.5H62.5C25 62.5 0 87.5 0 125V875C0 912.5 25 937.5 62.5 937.5H937.5C975 937.5 1000 912.5 1000 875ZM937.5 125V875H62.5V125H937.5Z",
						"width": 1e3
					},
					"search": ["text-area"]
				},
				{
					"uid": "206b010525b2181ffa0ad26f52b1762a",
					"css": "text",
					"code": 59400,
					"src": "custom_icons",
					"selected": true,
					"svg": {
						"path": "M937.5 250H281.3V187.5H375V125H281.3 218.8 125V187.5H218.8V250H62.5C25 250 0 281.3 0 312.5V687.5C0 725 25 750 62.5 750H218.8V812.5H125V875H375V812.5H281.3V750H937.5C975 750 1000 725 1000 687.5V312.5C1000 281.3 975 250 937.5 250ZM62.5 687.5V312.5H218.8V687.5H62.5ZM937.5 687.5H281.3V312.5H937.5V687.5Z",
						"width": 1e3
					},
					"search": ["text-input"]
				},
				{
					"uid": "c34ccd41e97f9d3639a660841e3475ab",
					"css": "hidden",
					"code": 59403,
					"src": "custom_icons",
					"selected": true,
					"svg": {
						"path": "M62.5 312.5L125 312.5 125 250 62.5 250ZM187.5 312.5L250 312.5 250 250 187.5 250ZM312.5 312.5L375 312.5 375 250 312.5 250ZM437.5 312.5L500 312.5 500 250 437.5 250ZM562.5 312.5L625 312.5 625 250 562.5 250ZM687.5 312.5L750 312.5 750 250 687.5 250ZM812.5 312.5L875 312.5 875 250 812.5 250ZM0 375L62.5 375 62.5 312.5 0 312.5ZM937.5 437.5L1000 437.5 1000 375 937.5 375ZM0 500L62.5 500 62.5 437.5 0 437.5ZM937.5 562.5L1000 562.5 1000 500 937.5 500ZM0 625L62.5 625 62.5 562.5 0 562.5ZM937.5 687.5L1000 687.5 1000 625 937.5 625ZM125 750L187.5 750 187.5 687.5 125 687.5ZM250 750L312.5 750 312.5 687.5 250 687.5ZM375 750L437.5 750 437.5 687.5 375 687.5ZM500 750L562.5 750 562.5 687.5 500 687.5ZM625 750L687.5 750 687.5 687.5 625 687.5ZM750 750L812.5 750 812.5 687.5 750 687.5ZM875 750L937.5 750 937.5 687.5 875 687.5ZM937.5 312.5L1000 312.5 1000 250 937.5 250ZM0 750L62.5 750 62.5 687.5 0 687.5Z",
						"width": 1e3
					},
					"search": ["hidden-input"]
				},
				{
					"uid": "0474eb3bb737aa8a306ebeffd2155839",
					"css": "button",
					"code": 59405,
					"src": "custom_icons",
					"selected": true,
					"svg": {
						"path": "M61.6 312.5L936.6 312.5 936.6 250 61.6 250ZM0 687.5L62.5 687.5 62.5 312.5 0 312.5ZM62.5 750L937.5 750 937.5 687.5 62.5 687.5ZM937.5 687.5L1000 687.5 1000 312.5 937.5 312.5ZM385.6 406.8Q352.1 406.8 332.2 431.9 312.5 456.9 312.5 500.1 312.5 543.1 332.2 568.1 352.1 593.2 385.6 593.2 419.2 593.2 438.7 568.1 458.4 543.1 458.4 500.1 458.4 456.9 438.7 431.9 419.2 406.8 385.6 406.8ZM385.6 381.8Q433.5 381.8 462.2 414 490.9 446.1 490.9 500.1 490.9 553.9 462.2 586.1 433.5 618.2 385.6 618.2 337.6 618.2 308.7 586.1 280 554.1 280 500.1 280 446.1 308.7 414 337.6 381.8 385.6 381.8ZM539.1 385.9L570 385.9 570 482.2 672.2 385.9 711.9 385.9 598.8 492.1 720 613.8 679.4 613.8 570 504 570 613.8 539.1 613.8 539.1 385.9Z",
						"width": 1e3
					},
					"search": ["button-input"]
				},
				{
					"uid": "d35a1d35efeb784d1dc9ac18b9b6c2b6",
					"css": "pencil",
					"code": 59401,
					"src": "fontawesome"
				},
				{
					"uid": "f6f11c17a7d16ee01cf0a46b757652af",
					"css": "file",
					"code": 59402,
					"src": "custom_icons",
					"selected": true,
					"svg": {
						"path": "M468.8 687.5H0V937.5H937.5V687.5H468.8ZM875 812.5H750V750H875V812.5ZM218.8 312.5L468.8 62.5 718.8 312.5H562.5V625H375V312.5Z",
						"width": 1e3
					},
					"search": ["file-input"]
				},
				{
					"uid": "0c708edd8fae2376b3370aa56d40cf9e",
					"css": "header",
					"code": 59407,
					"src": "fontawesome"
				},
				{
					"uid": "c5845105a87df2ee1999826d90622f6a",
					"css": "paragraph",
					"code": 59408,
					"src": "fontawesome"
				},
				{
					"uid": "5c54dda49adb1444c47944fb9550569e",
					"css": "number",
					"code": 59409,
					"src": "custom_icons",
					"selected": true,
					"svg": {
						"path": "M875 375V250H718.6L749.9 0H624.9L593.6 250H343.7L374.9 0H249.9L218.7 250H0V375H203.1L171.9 625H0V750H156.3L125 1000H250L281.3 750H531.2L499.9 1000H625L656.3 750H875V625H671.9L703 375H875ZM546.8 625H296.9L328.1 375H578L546.8 625Z",
						"width": 875
					},
					"search": ["number"]
				},
				{
					"uid": "531bc468eecbb8867d822f1c11f1e039",
					"css": "date",
					"code": 59393,
					"src": "fontawesome"
				},
				{
					"uid": "6846d155ad5bda456569df81f3057faa",
					"css": "copy",
					"code": 62029,
					"src": "fontawesome"
				},
				{
					"uid": "06301c50d89b5d3e651bd07ebd6d7de7",
					"css": "cancel",
					"code": 59404,
					"src": "mfglabs"
				},
				{
					"uid": "720f98e7580b7987c8dc542513d1d440",
					"css": "sort-higher",
					"code": 61814,
					"src": "fontawesome"
				},
				{
					"uid": "f06941dfcb90dc24b987d810898c4310",
					"css": "sort-lower",
					"code": 61813,
					"src": "fontawesome"
				}
			]
		};
		//#endregion
		//#region src/js/controls.js
		var css_prefix_text$1 = config_default.css_prefix_text;
		/**
		* control parent class for creating control panel
		*/
		var Controls = class {
			/**
			* setup instance
			* @param {Object} opts
			* @param {Object} d dom instance
			*/
			constructor(opts, d) {
				this.opts = opts;
				this.dom = d.controls;
				this.getRegistered = control.getRegistered;
				this.init();
			}
			/**
			* bootstrap controls and append them
			*/
			init() {
				this.setupControls();
				this.appendControls();
			}
			/**
			* registers controls
			*/
			setupControls() {
				const opts = this.opts;
				control.loadCustom(opts.controls);
				this.custom = new customControls(opts.templates, opts.fields);
				const registeredControls = control.getRegistered();
				const customFields = this.custom.getRegistered();
				if (customFields) jQuery.merge(registeredControls, customFields);
				this.registeredSubtypes = control.getRegisteredSubtypes();
				if (opts.sortableControls) this.dom.classList.add("sort-enabled");
				this.controlList = [];
				this.allControls = {};
				for (let i = 0; i < registeredControls.length; i++) {
					const type = registeredControls[i];
					let custom = this.custom.lookup(type);
					let controlClass;
					let label;
					if (custom) {
						controlClass = custom.class;
						label = this.custom.label(type);
					} else {
						custom = {};
						controlClass = control.getClass(type);
						if (!controlClass || !controlClass.active(type)) continue;
						label = controlClass.label(type);
					}
					const icon = custom.icon || controlClass.icon(type);
					const iconClassName = !icon ? custom.iconClassName || `${css_prefix_text$1 + type.replace(/-[\d]{4}$/, "")}` : "";
					if (icon) label = `<span class="control-icon">${icon}</span>${label}`;
					const newFieldControl = markup("li", markup("span", label), { className: `${iconClassName} input-control input-control-${i}` });
					newFieldControl.dataset.type = type;
					this.controlList.push(type);
					this.allControls[type] = newFieldControl;
				}
				if (opts.inputSets.length) opts.inputSets.forEach((set, i) => {
					let { name, label } = set;
					name = name || hyphenCase(label);
					if (set.icon) label = `<span class="control-icon">${set.icon}</span>${label}`;
					const inputSet = markup("li", markup("span", label), { className: `input-set-control input-set-${i}` });
					inputSet.dataset.type = name;
					this.controlList.push(name);
					this.allControls[name] = inputSet;
				});
			}
			/**
			* Reorder the controls if the user has previously ordered them.
			*
			* @param  {Array} controls - an array of control types
			* @return {Array} ordered fields
			*/
			orderFields(controls) {
				const opts = this.opts;
				const controlOrder = opts.controlOrder.concat(controls);
				let fieldOrder;
				if ((0, import_storage_available.default)("sessionStorage")) if (opts.sortableControls) fieldOrder = window.sessionStorage.getItem("fieldOrder");
				else window.sessionStorage.removeItem("fieldOrder");
				if (!fieldOrder) fieldOrder = unique(controlOrder);
				else {
					fieldOrder = window.JSON.parse(fieldOrder);
					fieldOrder = unique(fieldOrder.concat(controls));
					fieldOrder = Object.keys(fieldOrder).map((i) => fieldOrder[i]);
				}
				fieldOrder.forEach((field) => {
					const randomKey = /* @__PURE__ */ new RegExp("-[\\d]{4}$");
					if (field.match(randomKey)) {
						const baseFieldIndex = fieldOrder.indexOf(field.replace(randomKey, ""));
						if (baseFieldIndex !== -1) {
							fieldOrder.splice(fieldOrder.indexOf(field), 1);
							fieldOrder.splice(baseFieldIndex + 1, fieldOrder.indexOf(field), field);
						}
					}
				});
				if (opts.disableFields.length) fieldOrder = fieldOrder.filter((type) => !opts.disableFields.includes(type));
				return fieldOrder.filter(Boolean);
			}
			/**
			* Adds the controls to the control list
			*/
			appendControls() {
				const fragment = document.createDocumentFragment();
				empty(this.dom);
				this.orderFields(this.controlList).forEach((controlKey) => {
					const control = this.allControls[controlKey];
					if (control) fragment.appendChild(control);
				});
				this.dom.appendChild(fragment);
			}
			/**
			* Retrieve the class for a specified control type
			* @param {String} type type of control we are looking up
			* @param {String} [subtype] if specified we'll try to find
			* a class mapped to this subtype. If none found, fall back to the type.
			* @return {Class} control subclass as defined in the call to register
			*/
			getClass(type, subtype) {
				return this.custom.getClass(type) || control.getClass(type, subtype);
			}
		};
		//#endregion
		//#region src/js/form-builder.js
		var css_prefix_text = config_default.css_prefix_text;
		var { rowWrapperClass, colWrapperClass, tmpRowPlaceholderClass, invisibleRowPlaceholderClass } = gridClassNames;
		var { rowWrapperClassSelector, colWrapperClassSelector, tmpRowPlaceholderClassSelector, invisibleRowPlaceholderClassSelector } = generateSelectorClassNames(gridClassNames);
		function FormBuilder(opts, element, $) {
			const formBuilder = this;
			const i18n = import_mi18n_min.default.current;
			const formID = `frmb-${Date.now()}`;
			const data = new Data(formID);
			const d = new Dom(formID);
			const config = instanceConfig[formID] = {};
			/** @var formRows Allocated rows IDs in the builder */
			let formRows = [];
			formBuilder.preserveTempContainers = [];
			formBuilder.rowWrapperClassSelector = rowWrapperClassSelector;
			formBuilder.colWrapperClassSelector = colWrapperClassSelector;
			formBuilder.colWrapperClass = colWrapperClass;
			formBuilder.fieldSelector = opts.enableEnhancedBootstrapGrid ? rowWrapperClassSelector : defaultFieldSelector;
			setSanitizerConfig(opts.sanitizerOptions);
			if ($(element).closest("form").length) opts.notify.warning("WARNING: FormBuilder does not support being contained with a <form> Element");
			if (!opts.layout) opts.layout = layout;
			const h = new Helpers(formID, new opts.layout(opts.layoutTemplates, true, opts.disableHTMLLabels, opts.controlConfig), formBuilder);
			const m = markup;
			opts = h.processOptions(opts);
			h.editorUI(formID, opts.controlPosition);
			data.formID = formID;
			data.lastID = `${data.formID}-fld-0`;
			const controls = new Controls(opts, d);
			formBuilder.controls = controls;
			const subtypes = config.subtypes = h.processSubtypes(opts.subtypes);
			const $stage = $(d.stage);
			d.stage.fbInstance = formBuilder;
			const $cbUL = $(d.controls);
			let insertingNewControl = false;
			let insertTargetIsRow = false;
			let insertTargetIsColumn = false;
			let $targetInsertWrapper;
			let cloneControls;
			function enhancedBootstrapEnabled() {
				return !!opts.enableEnhancedBootstrapGrid;
			}
			$stage.sortable({
				cursor: "move",
				opacity: .9,
				revert: 150,
				beforeStop: (evt, ui) => h.beforeStop.call(h, evt, ui),
				start: (evt, ui) => h.startMoving.call(h, evt, ui),
				stop: (evt, ui) => h.stopMoving.call(h, evt, ui),
				change: function(event, ui) {
					if (opts.prepend && ui.placeholder.index() < 1) $("li.form-prepend").after(ui.placeholder);
					else if (opts.append && ui.placeholder.index() >= $stage.children("li").length - 1) $("li.form-append").before(ui.placeholder);
				},
				cancel: [
					"input",
					"select",
					"textarea",
					".disabled-field",
					".form-elements",
					".btn",
					"button",
					".is-locked"
				].join(", "),
				placeholder: "frmb-placeholder hoverDropStyleInverse"
			});
			if (!opts.allowStageSort) $stage.sortable("disable");
			$cbUL.sortable({
				helper: "clone",
				opacity: .9,
				connectWith: `#${formID}, ${rowWrapperClassSelector}`,
				cancel: ".formbuilder-separator",
				cursor: "move",
				scroll: false,
				placeholder: "hoverDropStyleInverse ui-state-highlight",
				tolerance: "pointer",
				start: (evt, ui) => h.startMoving.call(h, evt, ui),
				stop: (evt, ui) => {
					h.stopMoving.call(h, evt, ui);
				},
				revert: 150,
				beforeStop: (evt, ui) => h.beforeStop.call(h, evt, ui),
				distance: 3,
				change: function(event, ui) {
					if (opts.prepend && ui.placeholder.index() < 1) $("li.form-prepend").after(ui.placeholder);
					else if (opts.append && ui.placeholder.index() >= $stage.children("li").length - 1) $("li.form-append").before(ui.placeholder);
				},
				update: function(event, ui) {
					if (h.doCancel) return false;
					if ($(ui.item).closest(".stage-wrap").length && $(ui.item).closest(rowWrapperClassSelector).length === 0) {
						h.doCancel = true;
						processControl(ui.item);
					} else {
						if (enhancedBootstrapEnabled()) hideInvisibleRowPlaceholders();
						h.setFieldOrder($cbUL);
						h.doCancel = !opts.sortableControls;
					}
				}
			});
			$cbUL.on("mouseenter", function() {
				if (!h.stageIsEmpty()) $stage.children(tmpRowPlaceholderClassSelector + ":not(:last-child)").addClass(invisibleRowPlaceholderClass);
			});
			const processControl = (control) => {
				if (control[0].classList.contains("input-set-control")) {
					const inputSets = [];
					const inputSet = opts.inputSets.find((set) => hyphenCase(set.name || set.label) === control[0].dataset.type);
					if (inputSet && inputSet.showHeader) {
						const header = {
							type: "header",
							subtype: "h2",
							id: inputSet.name,
							label: inputSet.label
						};
						inputSets.push(header);
					}
					inputSets.push(...inputSet.fields);
					inputSets.forEach((field) => {
						prepFieldVars(field, true);
						if (h.stopIndex || h.stopIndex === 0) h.stopIndex++;
					});
				} else prepFieldVars(control, true);
			};
			const $editorWrap = $(d.editorWrap);
			$("<div class=\"snackbar\">").appendTo($editorWrap);
			let cbClasses = "cb-wrap";
			let cbStyle = "";
			if (opts.stickyControls.enable) {
				cbClasses += " sticky-controls";
				const offset = Object.assign({}, {
					top: 0,
					bottom: "auto",
					right: "auto",
					left: "auto"
				}, config.opts.stickyControls.offset);
				if (offset.top !== 0) cbStyle = `top: ${offset.top}px`;
			}
			const cbWrap = m("div", d.controls, {
				id: `${data.formID}-cb-wrap`,
				className: cbClasses,
				style: cbStyle
			});
			if (opts.showActionButtons) cbWrap.appendChild(d.formActions);
			const gridModeHelp = m("div", "", {
				id: `${data.formID}-gridModeHelp`,
				className: "grid-mode-help"
			});
			cbWrap.appendChild(gridModeHelp);
			$editorWrap.append(d.stage, cbWrap);
			if (element.type !== "textarea") $(element).append($editorWrap);
			else $(element).replaceWith($editorWrap);
			$(d.controls).on("click", "li.input-control, li.input-set-control", ({ target }) => {
				if (h.stageIsEmpty()) $stage.find(tmpRowPlaceholderClassSelector).eq(0).remove();
				const $control = $(target).closest("li");
				h.stopIndex = opts.append ? $stage.children().length - 1 : void 0;
				processControl($control);
				h.save.call(h);
			});
			const nonEditableFields = () => {
				const cancelArray = [];
				const disabledField = (type) => m("li", opts[type], { className: `disabled-field form-${type}` });
				if (opts.prepend && !$(".disabled-field.form-prepend", d.stage).length) {
					cancelArray.push(true);
					$stage.prepend(disabledField("prepend"));
				}
				if (opts.append && !$(".disabled-field.form-append", d.stage).length) {
					cancelArray.push(true);
					$stage.append(disabledField("append"));
				}
				h.disabledTT(d.stage);
				return cancelArray.some((elem) => elem === true);
			};
			const prepFieldVars = (fieldArg, isNew = false) => {
				let field = {};
				if (fieldArg instanceof jQuery) {
					field.type = fieldArg[0].dataset.type;
					if (field.type) {
						const custom = controls.custom.lookup(field.type);
						if (custom) {
							const customType = field.type;
							field = Object.assign({}, custom);
							field.label = controls.custom.label(customType);
						} else {
							const controlClass = controls.getClass(field.type);
							field.label = controlClass.label(field.type);
						}
					} else {
						const attrs = fieldArg[0].attributes;
						if (!isNew) field.values = fieldArg.children().map((index, elem) => {
							return {
								label: $(elem).text(),
								value: $(elem).attr("value"),
								selected: Boolean($(elem).attr("selected"))
							};
						});
						for (let i = attrs.length - 1; i >= 0; i--) field[attrs[i].name] = attrs[i].value;
					}
				} else field = Object.assign({}, fieldArg);
				if (!field.name) field.name = nameAttr(field);
				if (isNew && [
					"text",
					"number",
					"file",
					"date",
					"select",
					"textarea",
					"autocomplete"
				].includes(field.type)) field.className = field.className || "form-control";
				const match = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(field.className);
				if (match) field.style = match[1];
				if (isNew) {
					const eventTimeout = setTimeout(() => {
						$stage[0].dispatchEvent(new Event("fieldAdded", {
							bubbles: true,
							cancelable: false
						}));
						clearTimeout(eventTimeout);
					}, 10);
				}
				control.stringifyJsonAttrs(field);
				opts.onAddField(data.lastID, field);
				appendNewField(field, isNew);
				opts.onAddFieldAfter(data.lastID, field);
				d.stage.classList.remove("empty");
			};
			formBuilder.prepFieldVars = prepFieldVars;
			formBuilder.generateAdvFields = (values) => generateAdvFields(control.stringifyJsonAttrs({ ...values }));
			formBuilder.getAttrVals = (node) => h.getAttrVals(node);
			formBuilder.updatePreview = ($node) => h.updatePreview($node);
			const loadFields = function(formData) {
				formData = h.getData(formData);
				if (formData && formData.length) {
					formData.forEach((field) => CaptureRowData(field));
					formData.forEach((fieldData) => prepFieldVars(trimObj(fieldData)));
					d.stage.classList.remove("empty");
				} else if (opts.defaultFields && opts.defaultFields.length) {
					config.opts.defaultFields.forEach((field) => CaptureRowData(field));
					h.addDefaultFields();
				} else if (!opts.prepend && !opts.append) {
					d.stage.classList.add("empty");
					d.stage.dataset.content = import_mi18n_min.default.get("getStarted");
				}
				if (nonEditableFields()) d.stage.classList.remove("empty");
				h.save();
			};
			function CaptureRowData(field) {
				const gridRowValue = h.getRowValue(field.className);
				if (gridRowValue && !formRows.includes(gridRowValue)) formRows.push(gridRowValue);
			}
			/**
			* Add data for field with options [select, checkbox-group, radio-group]
			*
			* @param {string} fieldName
			* @param  {Object} fieldData
			* @return {string} field options markup
			*/
			const fieldOptions = function(fieldName, fieldData) {
				const { type } = fieldData;
				let fieldValues;
				const optionActions = [m("a", import_mi18n_min.default.get("addOption"), { className: "add add-opt" })];
				const fieldOptions = [m("label", fieldName === "values" ? import_mi18n_min.default.get("selectOptions") : i18n[fieldName], { className: "false-label" })];
				const optionsNoSelect = fieldData["noSelect"] ?? false;
				const isMultiple = fieldData.multiple || type === "checkbox-group";
				const optionDataTemplate = (count) => {
					const label = import_mi18n_min.default.get("optionCount", count);
					return {
						selected: false,
						label,
						value: hyphenCase(label)
					};
				};
				/**
				* For build-in options attributes the options are stored in the "values" key
				* For custom options the options will be in the attribute named key when in saved formData or in the values key when coming from field definition
				*/
				const values = fieldName === "options" ? fieldData["values"] : fieldData[fieldName] || fieldData["values"];
				if (!values || !values.length) {
					let defaultOptCount = [
						1,
						2,
						3
					];
					if (["checkbox-group", "checkbox"].includes(type)) defaultOptCount = [1];
					fieldValues = defaultOptCount.map(optionDataTemplate);
					const firstOption = fieldValues[0];
					if (firstOption.hasOwnProperty("selected") && type !== "radio-group") firstOption.selected = true;
				} else fieldValues = values.map((option) => Object.assign({}, { selected: false }, option));
				const optionActionsWrap = m("div", optionActions, { className: "option-actions" });
				const optionGroupName = nameAttr({ type: "grp-options" }) + "-options";
				const optionsWrap = m("div", [m("ol", fieldValues.map((option, index) => {
					const optionData = config.opts.onAddOption(option, {
						type,
						index,
						isMultiple,
						fieldName
					});
					if (optionsNoSelect) optionData.selected = false;
					return selectFieldOptions(optionGroupName, optionData, isMultiple);
				}), { className: "sortable-options" + (optionsNoSelect ? " options-no-select" : "") }), optionActionsWrap], { className: "sortable-options-wrap" });
				fieldOptions.push(optionsWrap);
				return m("div", fieldOptions, {
					name: fieldName,
					className: "form-group field-options"
				});
			};
			const defaultFieldAttrs = (type) => {
				const defaultAttrs = [
					"required",
					"label",
					"description",
					"placeholder",
					"className",
					"name",
					"access",
					"value"
				];
				const valueField = ![
					"header",
					"paragraph",
					"file",
					"autocomplete"
				].concat(d.optionFields).includes(type);
				const typeAttrsMap = {
					autocomplete: defaultAttrs.concat(["options", "requireValidOption"]),
					button: [
						"label",
						"subtype",
						"style",
						"className",
						"name",
						"value",
						"access"
					],
					checkbox: [
						"required",
						"label",
						"description",
						"toggle",
						"inline",
						"className",
						"name",
						"access",
						"other",
						"options"
					],
					text: defaultAttrs.concat(["subtype", "maxlength"]),
					date: defaultAttrs.concat([
						"subtype",
						"min",
						"max",
						"step"
					]),
					file: defaultAttrs.concat(["multiple"]),
					header: [
						"label",
						"subtype",
						"className",
						"access"
					],
					hidden: [
						"name",
						"value",
						"access"
					],
					paragraph: [
						"label",
						"subtype",
						"className",
						"access"
					],
					number: defaultAttrs.concat([
						"subtype",
						"min",
						"max",
						"step"
					]),
					select: defaultAttrs.concat(["multiple", "options"]),
					textarea: defaultAttrs.concat([
						"subtype",
						"maxlength",
						"rows"
					])
				};
				if (type in controls.registeredSubtypes && !(type in typeAttrsMap)) typeAttrsMap[type] = defaultAttrs.concat(["subtype"]);
				typeAttrsMap["checkbox-group"] = typeAttrsMap.checkbox;
				typeAttrsMap["radio-group"] = typeAttrsMap.checkbox;
				const typeAttrs = typeAttrsMap[type];
				if (type === "radio-group") removeFromArray("toggle", typeAttrs);
				if ([
					"header",
					"paragraph",
					"button"
				].includes(type)) removeFromArray("description", typeAttrs);
				if (!valueField) removeFromArray("value", typeAttrs);
				return typeAttrs || defaultAttrs;
			};
			/**
			* Build the editable properties for the field
			* @param  {Object} values configuration object for advanced fields
			* @return {string}        markup for advanced fields
			*/
			const generateAdvFields = (values) => {
				const { type, subtype } = values;
				const roles = values.role !== void 0 ? values.role.split(",") : [];
				const advFields = [];
				const typeClass = controls.getClass(type);
				const fieldAttrs = defaultFieldAttrs(type);
				const advFieldMap = {
					required: () => requiredField(values),
					toggle: () => boolAttribute("toggle", values, { first: import_mi18n_min.default.get("toggle") }),
					inline: () => {
						return boolAttribute("inline", values, {
							first: import_mi18n_min.default.get("inline"),
							second: import_mi18n_min.default.get("inlineDesc", type.replace("-group", ""))
						});
					},
					label: () => textAttribute("label", values),
					description: () => textAttribute("description", values),
					subtype: (isHidden) => {
						return selectAttribute("subtype", {
							events: { change: (evt) => {
								const { value } = evt.target;
								const field = closest(evt.target, ".form-field");
								const curAdvFields = evt.target.closest(".form-elements-inner");
								const newAdvFields = generateAdvFields({
									...values,
									...h.getAttrVals(field),
									subtype: value
								});
								curAdvFields.replaceWith(newAdvFields);
							} },
							...values
						}, subtypes[type], isHidden);
					},
					style: () => btnStyles(values.style),
					placeholder: () => textAttribute("placeholder", values),
					rows: () => numberAttribute("rows", values),
					className: (isHidden) => textAttribute("className", values, isHidden),
					name: (isHidden) => textAttribute("name", values, isHidden),
					value: () => textAttribute("value", values),
					maxlength: () => numberAttribute("maxlength", values),
					access: () => {
						const rolesDisplay = values.role ? "style=\"display:block\"" : "";
						const availableRoles = [];
						for (key in opts.roles) if (opts.roles.hasOwnProperty(key)) {
							const roleId = `fld-${data.lastID}-roles-${key}`;
							const cbAttrs = {
								type: "checkbox",
								name: "roles[]",
								value: key,
								id: roleId,
								className: "roles-field"
							};
							if (roles.includes(key)) cbAttrs.checked = "checked";
							const label = m("label", [h.input(cbAttrs), ` ${opts.roles[key]}`], { for: roleId });
							availableRoles.push(label);
						}
						const availableRolesDiv = m("div", availableRoles, {
							className: "available-roles",
							style: rolesDisplay
						});
						return boolAttribute("access", values, {
							first: import_mi18n_min.default.get("roles"),
							second: import_mi18n_min.default.get("limitRole"),
							content: availableRolesDiv
						});
					},
					other: () => boolAttribute("other", values, {
						first: import_mi18n_min.default.get("enableOther"),
						second: import_mi18n_min.default.get("enableOtherMsg")
					}),
					options: () => fieldOptions("values", values),
					requireValidOption: () => boolAttribute("requireValidOption", values, {
						first: " ",
						second: import_mi18n_min.default.get("requireValidOption")
					}),
					multiple: () => {
						const typeLabels = {
							default: {
								first: "Multiple",
								second: "set multiple attribute"
							},
							file: {
								first: import_mi18n_min.default.get("multipleFiles"),
								second: import_mi18n_min.default.get("allowMultipleFiles")
							},
							select: {
								first: " ",
								second: import_mi18n_min.default.get("selectionsMessage")
							}
						};
						return boolAttribute("multiple", values, typeLabels[type] || typeLabels.default);
					}
				};
				let key;
				[
					"min",
					"max",
					"step"
				].forEach((numAttr) => {
					advFieldMap[numAttr] = type === "number" ? () => numberAttribute(numAttr, values) : () => textAttribute(numAttr, values);
				});
				const noDisable = [
					"name",
					"className",
					"subtype"
				];
				const tuaLookup = [type, subtype].filter(Boolean).join("-");
				const typeUserAttrs = {
					...opts.typeUserAttrs["*"] ?? {},
					...opts.typeUserAttrs[tuaLookup] ?? {},
					...typeClass?.definition?.userAttrs ?? {}
				};
				Object.keys(fieldAttrs).forEach((index) => {
					const attr = fieldAttrs[index];
					const useDefaultAttr = [true];
					const isDisabled = opts.disabledAttrs.includes(attr);
					if (opts.typeUserDisabledAttrs[type]) {
						const typeDisabledAttrs = opts.typeUserDisabledAttrs[type];
						useDefaultAttr.push(!typeDisabledAttrs.includes(attr));
					}
					if (typeClass.definition.hasOwnProperty("disabledAttrs")) {
						const userDisabledAttrs = typeClass.definition.disabledAttrs;
						useDefaultAttr.push(!userDisabledAttrs.includes(attr));
					}
					if (typeClass.definition.hasOwnProperty("defaultAttrs")) {
						const userAttrs = Object.keys(typeClass.definition.defaultAttrs);
						useDefaultAttr.push(!userAttrs.includes(attr));
					}
					if (typeUserAttrs) {
						const userAttrs = Object.keys(typeUserAttrs);
						useDefaultAttr.push(!userAttrs.includes(attr));
					}
					if (isDisabled && !noDisable.includes(attr)) useDefaultAttr.push(false);
					if (useDefaultAttr.every(Boolean)) advFields.push(advFieldMap[attr](isDisabled));
				});
				if (typeClass.definition.hasOwnProperty("defaultAttrs")) {
					const customAttr = processTypeUserAttrs(typeClass.definition.defaultAttrs, values);
					advFields.push(customAttr);
				}
				if (typeUserAttrs) {
					const customAttr = processTypeUserAttrs(typeUserAttrs, values);
					advFields.push(customAttr);
				}
				return m("div", advFields, { className: "form-elements-inner" });
			};
			/**
			* Detects the type of user defined attribute
			* @param {Object} attrData attribute config
			* @return {string} type of user attr
			*/
			function userAttrType(attrData) {
				return [
					["array", ({ options }) => !!options],
					["boolean", ({ type }) => type === "checkbox"],
					["options", ({ type }) => type === "options"],
					[typeof (attrData.value ?? attrData), () => true]
				].find((typeCondition) => typeCondition[1](attrData))[0];
			}
			/**
			*
			* @param {Object} values    field attributes
			* @param {string} subType   subType
			* @return {boolean}         indicates whether or not the field has a subtype
			*/
			function hasSubType(values, subType) {
				return values.subtype && values.subtype === subType;
			}
			/**
			* Processes typeUserAttrs
			* @param  {Object} typeUserAttr option
			* @param  {Object} values       field attributes
			* @return {string}              markup for custom user attributes
			*/
			function processTypeUserAttrs(typeUserAttr, values) {
				const advField = [];
				const attrTypeMap = {
					array: selectUserAttrs,
					string: inputUserAttrs,
					number: numberAttribute,
					boolean: (attrName, attrData) => {
						let isChecked = false;
						if (attrName.type === "checkbox") isChecked = Boolean(attrData.hasOwnProperty("value") ? attrData.value : false);
						else if (values.hasOwnProperty(attrName)) isChecked = values[attrName];
						else if (attrData.hasOwnProperty("value") || attrData.hasOwnProperty("checked")) isChecked = attrData.value || attrData.checked || false;
						return boolAttribute(attrName, {
							...attrData,
							[attrName]: isChecked
						}, { first: i18n[attrName] });
					},
					options: fieldOptions,
					object: (attrName, { [attrName]: value, label, className }) => {
						const id = `${attrName}-${data.lastID}`;
						const userAttrs = Object.entries(value).reduce((acc, [name, val]) => {
							const subAttrName = `${attrName}[${name}]`;
							acc[subAttrName] = {
								label: i18n[name] || titleCase(name),
								value: val,
								name: subAttrName
							};
							return acc;
						}, {});
						return m("div", [m("label", label || i18n[attrName]), m("div", processTypeUserAttrs(userAttrs, values), {
							id,
							className: "input-group-wrap"
						})], { className: [
							"form-group",
							`${safeClassName(attrName)}-wrap`,
							className
						] });
					}
				};
				for (const attribute in typeUserAttr) if (typeUserAttr.hasOwnProperty(attribute)) {
					const attrValType = userAttrType(typeUserAttr[attribute]);
					if (attrValType !== "undefined") {
						const orig = import_mi18n_min.default.get(attribute);
						const { [attribute]: value, ...tUA } = typeUserAttr[attribute];
						let origValue = tUA.value;
						if (attrValType === "boolean") tUA[attribute] ??= tUA.value;
						else if (attrValType === "number") tUA[attribute] ??= firstNumberOrUndefined(values[attribute], origValue);
						else {
							origValue ??= "";
							tUA[attribute] ??= values[attribute] || origValue;
						}
						tUA.value = value;
						if (tUA.label) i18n[attribute] = Array.isArray(tUA.label) ? import_mi18n_min.default.get(...tUA.label) || tUA.label[0] : tUA.label;
						if (attrTypeMap[attrValType]) advField.push(attrTypeMap[attrValType](attribute, tUA));
						i18n[attribute] = orig;
					} else if (attrValType === "undefined" && hasSubType(values, attribute)) advField.push(processTypeUserAttrs(typeUserAttr[attribute], values));
					else {
						const def = {};
						def[attribute] = typeUserAttr[attribute];
						opts.notify.warning("Warning: unable to process typeUserAttr definition : " + JSON.stringify(def));
					}
				}
				return advField;
			}
			/**
			* Text input value for attribute
			* @param  {string} name
			* @param  {Object} inputAttrs also known as values
			* @return {string}       input markup
			*/
			function inputUserAttrs(name, inputAttrs) {
				const { class: classname, className, ...attrs } = inputAttrs;
				let textAttrs = {
					id: name + "-" + data.lastID,
					title: attrs.description || attrs.label || name.toUpperCase(),
					name,
					type: attrs.type || "text",
					className: [safeClassName(`fld-${name}`), (classname || className || "").trim()],
					value: attrs.hasOwnProperty(name) ? attrs[name] : attrs.value || ""
				};
				const label = m("label", i18n[name] || "", { for: textAttrs.id });
				if (![
					"checkbox",
					"checkbox-group",
					"radio-group"
				].includes(textAttrs.type)) textAttrs.className.push("form-control");
				textAttrs = Object.assign({}, attrs, textAttrs);
				return m("div", [label, m("div", (() => {
					if (textAttrs.type === "textarea") {
						const textValue = textAttrs.value;
						delete textAttrs.value;
						return m("textarea", textValue, textAttrs);
					} else return m("input", null, textAttrs);
				})(), { className: "input-wrap" })], { className: `form-group ${safeClassName(name)}-wrap` });
			}
			/**
			* Select input for multiple choice user attributes
			* @todo  replace with selectAttr
			* @param  {string} name
			* @param  {Object} fieldData
			* @return {string}         select markup
			*/
			function selectUserAttrs(name, fieldData) {
				const { multiple, options, label: labelText, value, class: classname, className, ...restData } = fieldData;
				const selectValues = fieldData.hasOwnProperty(name) ? fieldData[name] : value || [];
				const optis = Object.keys(options).map((val) => {
					const attrs = { value: val };
					const optionTextVal = options[val];
					const optionText = Array.isArray(optionTextVal) ? import_mi18n_min.default.get(...optionTextVal) || optionTextVal[0] : optionTextVal;
					if (Array.isArray(selectValues) ? selectValues.includes(val) : val === selectValues) attrs.selected = true;
					return m("option", optionText, attrs);
				});
				const selectAttrs = {
					id: `${name}-${data.lastID}`,
					title: restData.description || labelText || name.toUpperCase(),
					name,
					className: `fld-${name} form-control ${classname || className || ""}`.trim(),
					...restData
				};
				if (multiple) selectAttrs.multiple = true;
				return m("div", [m("label", i18n[name] || "", { for: selectAttrs.id }), m("div", m("select", optis, selectAttrs), { className: "input-wrap" })], { className: `form-group ${safeClassName(name)}-wrap` });
			}
			const boolAttribute = (name, values, labels = {}) => {
				const label = (txt) => m("label", txt, { for: `${name}-${data.lastID}` });
				const cbAttrs = {
					type: "checkbox",
					className: `fld-${name}`,
					name,
					id: `${name}-${data.lastID}`
				};
				if (values[name]) cbAttrs.checked = true;
				const left = [];
				let right = [m("input", null, cbAttrs)];
				if (labels.first) left.push(label(labels.first));
				if (labels.second) right.push(" ", label(labels.second));
				if (labels.content) right.push(labels.content);
				right = m("div", right, { className: "input-wrap" });
				return m("div", left.concat(right), { className: `form-group ${safeClassName(name)}-wrap` });
			};
			const btnStyles = (style) => {
				const styleLabel = m("label", i18n.style);
				const styleInput = h.input({
					value: style || "default",
					type: "hidden",
					className: "btn-style"
				});
				const styleButtonGroup = m("div", styles.btn.map((btnStyle) => {
					const classList = [
						"btn-xs",
						"btn",
						`btn-${btnStyle}`
					];
					if (style === btnStyle) classList.push("selected");
					return m("button", import_mi18n_min.default.get(`styles.btn.${btnStyle}`), {
						value: btnStyle,
						type: "button",
						className: classList.join(" ")
					});
				}), {
					className: "btn-group",
					role: "group"
				});
				if (style === "undefined") style = "default";
				return m("div", [
					styleLabel,
					styleInput,
					styleButtonGroup
				], { className: "form-group style-wrap" });
			};
			/**
			* Add a number attribute to a field.
			* @param  {string} attribute
			* @param  {Object} values
			* @return {string} markup for number attribute
			*/
			const numberAttribute = (attribute, values) => {
				const { className = "", ...attrs } = values;
				const attrVal = Number.isNaN(attrs[attribute]) ? void 0 : attrs[attribute];
				const attrLabel = import_mi18n_min.default.get(attribute) || attribute;
				const inputConfig = {
					type: "number",
					value: attrVal,
					name: attribute,
					placeholder: import_mi18n_min.default.get(`placeholder.${attribute}`),
					className: [
						safeClassName(`fld-${attribute}`),
						"form-control",
						`${className}`.trim()
					],
					id: `${attribute}-${data.lastID}`
				};
				const inputWrap = m("div", h.input(trimObj(inputConfig)), { className: "input-wrap" });
				return m("div", [m("label", attrLabel, { for: inputConfig.id }), inputWrap], { className: `form-group ${safeClassName(attribute)}-wrap` });
			};
			/**
			* selectAttribute
			* @param  {string} attribute  attribute name
			* @param  {Object} values     aka attrs
			* @param  {Array} optionData  select field option data
			* @param  {boolean} [isHidden=false] field should be hidden on the stage
			* @return {string}            select input makrup
			*/
			const selectAttribute = (attribute, { events, ...values }, optionData, isHidden = false) => {
				const selectOptions = optionData.map((option, i) => {
					let optionAttrs = Object.assign({
						label: `${i18n.option} ${i}`,
						value: void 0
					}, option);
					if (option.value === values[attribute]) optionAttrs.selected = true;
					optionAttrs = trimObj(optionAttrs);
					return m("option", optionAttrs.label, optionAttrs);
				});
				const selectAttrs = {
					id: attribute + "-" + data.lastID,
					name: attribute,
					className: `fld-${attribute} form-control`,
					events
				};
				return m("div", [m("label", import_mi18n_min.default.get(attribute) || capitalize(attribute) || "", { for: selectAttrs.id }), m("div", m("select", selectOptions, selectAttrs), { className: "input-wrap" })], {
					className: `form-group ${selectAttrs.name}-wrap`,
					style: isHidden && "display: none"
				});
			};
			/**
			* Generate some text inputs for field attributes, **will be replaced**
			* @param  {string} attribute
			* @param  {Object} values
			* @param  {boolean} [isHidden=false] field should be hidden on the stage
			* @return {string}
			*/
			const textAttribute = (attribute, values, isHidden = false) => {
				const textArea = ["paragraph"];
				let attrVal = values[attribute] || "";
				let attrLabel = import_mi18n_min.default.get(attribute) || attribute;
				if (attribute === "label") if (textArea.includes(values.type)) attrLabel = import_mi18n_min.default.get("content");
				else attrVal = parsedHtml(attrVal);
				const placeholder = import_mi18n_min.default.get(`placeholders.${attribute}`) || "";
				let attributefield;
				if (![].some((elem) => elem === true)) {
					const inputConfig = {
						name: attribute,
						placeholder,
						className: `fld-${attribute} form-control`,
						id: `${attribute}-${data.lastID}`
					};
					const attributeLabel = m("label", attrLabel);
					if (attribute === "label" && !opts.disableHTMLLabels) {
						inputConfig.contenteditable = true;
						attributefield = m("div", attrVal, inputConfig);
					} else if (values.type === "textarea" && attribute === "value") attributefield = m("textarea", attrVal, inputConfig);
					else {
						inputConfig.value = attrVal;
						inputConfig.type = "text";
						attributefield = m("input", null, inputConfig);
					}
					const inputWrap = m("div", attributefield, { className: "input-wrap" });
					const fieldAttrs = { className: `form-group ${attribute}-wrap` };
					if (attribute === "value" && values.subtype === "quill" || isHidden) fieldAttrs.style = "display: none";
					attributefield = m("div", [attributeLabel, inputWrap], fieldAttrs);
				}
				return attributefield;
			};
			const requiredField = (fieldData) => {
				const { type } = fieldData;
				const noRequire = [
					"header",
					"paragraph",
					"button"
				];
				const noMake = [];
				let requireField = "";
				if (noRequire.includes(type)) noMake.push(true);
				if (!noMake.some((elem) => elem === true)) requireField = boolAttribute("required", fieldData, { first: import_mi18n_min.default.get("required") });
				return requireField;
			};
			const appendNewField = function(values, isNew = true) {
				const columnData = prepareFieldRow(values);
				data.lastID = h.incrementId(data.lastID);
				const { type = "text", subtype } = values;
				let label = values.label || (isNew ? i18n[type] || import_mi18n_min.default.get("label") : "");
				if (type === "hidden" || label === "") label = `${import_mi18n_min.default.get(type) ?? type}: ${values.name}`;
				const disabledFieldButtons = opts.disabledFieldButtons[type] || values.disabledFieldButtons;
				let fieldButtons = [
					m("a", null, {
						type: "remove",
						id: "del_" + data.lastID,
						className: `del-button btn ${css_prefix_text}cancel delete-confirm`,
						title: import_mi18n_min.default.get("removeMessage")
					}),
					m("a", null, {
						type: "edit",
						id: data.lastID + "-edit",
						className: `toggle-form btn ${css_prefix_text}pencil`,
						title: import_mi18n_min.default.get("hide")
					}),
					m("a", null, {
						type: "copy",
						id: data.lastID + "-copy",
						className: `copy-button btn ${css_prefix_text}copy`,
						title: import_mi18n_min.default.get("copyButtonTooltip")
					})
				];
				if (enhancedBootstrapEnabled()) fieldButtons.push(m("a", null, {
					type: "grid",
					id: data.lastID + "-grid",
					className: `grid-button btn ${css_prefix_text}grid`,
					title: "Grid Mode"
				}));
				else fieldButtons.push(m("a", null, {
					type: "sort",
					id: data.lastID + "-sort-higher",
					className: `sort-button sort-button-higher btn ${css_prefix_text}sort-higher`,
					title: "Move Higher"
				}), m("a", null, {
					type: "sort",
					id: data.lastID + "-sort-lower",
					className: `sort-button sort-button-lower btn ${css_prefix_text}sort-lower`,
					title: "Move Lower"
				}));
				if (disabledFieldButtons && Array.isArray(disabledFieldButtons)) fieldButtons = fieldButtons.filter((btnData) => !disabledFieldButtons.includes(btnData.type));
				const liContents = [m("div", fieldButtons, { className: "field-actions" })];
				const labelValue = opts.disableHTMLLabels ? document.createTextNode(label) : parsedHtml(label);
				liContents.push(m("label", labelValue, { className: "field-label" }));
				liContents.push(m("span", " *", {
					className: "required-asterisk",
					style: values.required ? "display:inline" : ""
				}));
				const descAttrs = {
					className: "tooltip-element",
					tooltip: values.description,
					style: values.description ? "display:inline-block" : "display:none"
				};
				liContents.push(m("span", "?", descAttrs));
				const prevHolder = m("div", "", {
					className: "prev-holder",
					dataFieldId: data.lastID
				});
				liContents.push(prevHolder);
				const editPanel = m("div", m("div", [generateAdvFields(values), m("a", import_mi18n_min.default.get("close"), { className: "close-field" })], { className: "form-elements" }), {
					id: `${data.lastID}-holder`,
					className: "frm-holder",
					dataFieldId: data.lastID
				});
				formBuilder.currentEditPanel = editPanel;
				liContents.push(editPanel);
				const liAttrs = {
					class: `${type}-field form-field`,
					type,
					id: data.lastID
				};
				if (type !== subtype) liAttrs.subtype = subtype;
				const field = m("li", liContents, liAttrs);
				const $li = $(field);
				AttachColWrapperHandler($li);
				$li.data("fieldData", { attrs: values });
				if (typeof h.stopIndex !== "undefined") $(d.stage).children().eq(h.stopIndex).before($li);
				else $stage.append($li);
				$(".sortable-options", $li).sortable({ update: () => UpdatePreviewAndSave($li) });
				h.updatePreview($li);
				let rowWrapperNode;
				if (enhancedBootstrapEnabled()) {
					const targetRow = `div.row-${columnData.rowUniqueId}`;
					let newRowCreated = false;
					if ($stage.children(targetRow).length) rowWrapperNode = $stage.children(targetRow);
					else {
						rowWrapperNode = m("div", null, {
							id: `${field.id}-row`,
							className: `row row-${columnData.rowUniqueId} ${rowWrapperClass}`
						});
						newRowCreated = true;
					}
					if (insertingNewControl && insertTargetIsRow) {
						$targetInsertWrapper.attr("id", rowWrapperNode.id);
						$targetInsertWrapper.attr("class", rowWrapperNode.className);
						$targetInsertWrapper.attr("style", "");
						$targetInsertWrapper.attr("data-row-id", columnData.rowUniqueId);
						rowWrapperNode = $targetInsertWrapper;
					}
					const colWrapperNode = m("div", null, {
						id: `${field.id}-cont`,
						className: `${columnData.columnSize} ${colWrapperClass}`
					});
					if (insertingNewControl && insertTargetIsColumn) if ($targetInsertWrapper.attr("prepend") === "true") $(colWrapperNode).prependTo(rowWrapperNode);
					else $(colWrapperNode).insertAfter(`#${$targetInsertWrapper.attr("appendAfter")}`);
					if (!insertTargetIsColumn) $(colWrapperNode).appendTo(rowWrapperNode);
					if (!insertingNewControl && newRowCreated) $li.after(rowWrapperNode);
					$li.appendTo(colWrapperNode);
					if (newRowCreated) {
						setupSortableRowWrapper(rowWrapperNode);
						hideInvisibleRowPlaceholders();
						SetupInvisibleRowPlaceholders(rowWrapperNode);
						if (opts.enableColumnInsertMenu) {
							$(rowWrapperNode).off("mouseenter");
							$(rowWrapperNode).on("mouseenter", function(e) {
								setupColumnInserts($(e.currentTarget));
							});
							$(rowWrapperNode).off("mouseleave");
							$(rowWrapperNode).on("mouseleave", function(e) {
								hideColumnInsertButtons($(e.currentTarget));
							});
						}
					}
					setupColumnInserts(rowWrapperNode, true);
					if (columnData.addedDefaultColumnClass) $li.attr("addedDefaultColumnClass", true);
					h.tmpCleanPrevHolder($(prevHolder));
				}
				if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onadd) opts.typeUserEvents[type].onadd(field);
				else if (opts.typeUserEvents["*"] && opts.typeUserEvents["*"].onadd) opts.typeUserEvents["*"].onadd(field);
				if (isNew) {
					if (opts.editOnAdd) {
						h.closeAllEdit();
						h.toggleEdit(data.lastID, false);
					}
					if (field.scrollIntoView && opts.scrollToFieldOnAdd) field.scrollIntoView({ behavior: "smooth" });
				}
				if (enhancedBootstrapEnabled()) {
					if (insertingNewControl && insertTargetIsColumn) autoSizeRowColumns(rowWrapperNode, true);
				}
				insertingNewControl = false;
				insertTargetIsRow = false;
				insertTargetIsColumn = false;
			};
			function AttachColWrapperHandler(colWrapper) {
				if (!enhancedBootstrapEnabled()) return;
				colWrapper.mouseenter(function(e) {
					if (!gridMode) {
						gridModeTargetField = $(this);
						gridModeStartX = e.pageX;
						gridModeStartY = e.pageY;
					}
				});
			}
			function hideInvisibleRowPlaceholders() {
				$stage.find(tmpRowPlaceholderClassSelector + ":not(:last-child)").css("height", "1px").addClass(invisibleRowPlaceholderClass);
			}
			function SetupInvisibleRowPlaceholders(rowWrapperNode) {
				const wrapperClone = $(rowWrapperNode).clone();
				wrapperClone.addClass(invisibleRowPlaceholderClass).addClass(tmpRowPlaceholderClass).html("");
				wrapperClone.css("height", "1px");
				wrapperClone.attr("class", wrapperClone.attr("class").replace("row-", ""));
				wrapperClone.removeAttr("id");
				if ($(rowWrapperNode).index() === 0) {
					const wrapperClone2 = $(wrapperClone).clone();
					$stage.prepend(wrapperClone2);
					setupSortableRowWrapper(wrapperClone2);
				}
				wrapperClone.insertAfter($(rowWrapperNode));
				setupSortableRowWrapper(wrapperClone);
				$stage.find(rowWrapperClassSelector + ":last-of-type").removeClass(invisibleRowPlaceholderClass);
			}
			function ResetAllInvisibleRowPlaceholders() {
				$stage.children(tmpRowPlaceholderClassSelector).remove();
				$stage.children(rowWrapperClassSelector).each((i, elem) => {
					SetupInvisibleRowPlaceholders($(elem));
				});
				$stage.find(rowWrapperClassSelector + ":last-of-type").removeClass(invisibleRowPlaceholderClass);
			}
			function setupSortableRowWrapper(rowWrapperNode) {
				if (!enhancedBootstrapEnabled()) return;
				$(rowWrapperNode).sortable({
					connectWith: [rowWrapperClassSelector],
					cursor: "move",
					opacity: .9,
					revert: 150,
					distance: 3,
					tolerance: "pointer",
					helper: function(e, el) {
						const clone = el.clone();
						clone.find(".field-actions").remove();
						clone.css({
							width: "20%",
							height: "100px",
							minHeight: "60px",
							overflow: "hidden"
						});
						return clone;
					},
					over: function(event) {
						const overTarget = $(event.target);
						const overTargetIsPlaceholder = overTarget.hasClass(tmpRowPlaceholderClass);
						if (!overTargetIsPlaceholder) removeColumnInsertButtons(overTarget);
						overTarget.addClass("hoverDropStyleInverse");
						if (!overTargetIsPlaceholder) {
							hideInvisibleRowPlaceholders();
							overTarget.prev(tmpRowPlaceholderClassSelector).removeClass(invisibleRowPlaceholderClass).css("height", "40px");
							overTarget.next(tmpRowPlaceholderClassSelector).removeClass(invisibleRowPlaceholderClass).css("height", "40px");
						}
					},
					out: function(event) {
						$stage.children(tmpRowPlaceholderClassSelector).removeClass("hoverDropStyleInverse");
						$(event.target).removeClass("hoverDropStyleInverse");
					},
					placeholder: "hoverDropStyleInverse",
					receive: function(event, ui) {
						const senderIsControlsBox = $(ui.sender).attr("id") === $cbUL.attr("id");
						const droppingToNewRow = $(ui.item).parent().hasClass(tmpRowPlaceholderClass);
						const droppingToExistingRow = !droppingToNewRow && $(ui.item).parent().hasClass(rowWrapperClass);
						if (droppingToNewRow) if (senderIsControlsBox) {
							insertTargetIsRow = true;
							insertingNewControl = true;
							$targetInsertWrapper = $(ui.item).parent();
						} else {
							const colWrapper = $(ui.item);
							const columnData = prepareFieldRow({});
							const rowWrapperNode = m("div", null, {
								id: `${colWrapper.find("li").attr("id")}-row`,
								className: `row row-${columnData.rowUniqueId} ${rowWrapperClass}`
							});
							$(ui.item).parent().replaceWith(rowWrapperNode);
							AttachColWrapperHandler($(ui.item));
							colWrapper.appendTo(rowWrapperNode);
							setupSortableRowWrapper(rowWrapperNode);
							h.syncFieldWithNewRow(colWrapper[0], colWrapper.closest(rowWrapperClassSelector)[0]);
						}
						if (droppingToExistingRow && senderIsControlsBox) {
							if ($(ui.item).prev().hasClass("btnAddControl")) $targetInsertWrapper = $(ui.item).prev();
							else if ($(ui.item).next().hasClass("btnAddControl")) $targetInsertWrapper = $(ui.item).next();
							else $targetInsertWrapper = $(ui.item).attr("prepend", "true");
							const parentRowValue = h.getRowClass($(ui.item).parent().attr("class"));
							$targetInsertWrapper.addClass(parentRowValue);
							insertTargetIsColumn = true;
							insertingNewControl = true;
							h.stopIndex = void 0;
						}
						if (insertingNewControl) {
							h.doCancel = true;
							processControl(ui.item);
							h.save.call(h);
						}
						checkRowCleanup();
						ResetAllInvisibleRowPlaceholders();
						const listFieldItem = $(ui.item).find("li");
						if (listFieldItem.length) {
							CheckTinyMCETransition(listFieldItem);
							UpdatePreviewAndSave(listFieldItem);
							h.tmpCleanPrevHolder($(ui.item).find(".prev-holder"));
						}
					},
					start: (event, ui) => {
						$stage.addClass("__preventColButtons");
						removeColumnInsertButtons(ui.item.closest(rowWrapperClassSelector));
					},
					stop: (event, ui) => {
						$stage.removeClass("__preventColButtons");
						$stage.children(tmpRowPlaceholderClassSelector).removeClass("hoverDropStyleInverse");
						checkRowCleanup();
						autoSizeRowColumns(ui.item.closest(rowWrapperClassSelector), true);
					},
					update: (event, ui) => {
						h.syncFieldWithNewRow(ui.item, $(ui.item).closest(rowWrapperClassSelector)[0]);
					}
				});
				const rowId = h.getRowValue(rowWrapperNode.className);
				if (rowId !== "0") $(rowWrapperNode).attr("data-row-id", rowId);
			}
			function CheckTinyMCETransition(fieldListItem) {
				const isTinyMCE = fieldListItem.find("textarea[type=\"tinymce\"]");
				if (isTinyMCE.length) window.lastFormBuilderCopiedTinyMCE = window.tinymce.get(isTinyMCE.attr("id")).save();
			}
			function UpdatePreviewAndSave(fieldListItem) {
				h.updatePreview(fieldListItem);
				h.save.call(h);
			}
			/**
			* Setup column insert buttons next to each column.
			* @param {HTMLElement} rowWrapper
			* @param {boolean} [hide=false] If true hide when inserting
			*/
			function setupColumnInserts(rowWrapper, hide = false) {
				if (!opts.enableColumnInsertMenu || $stage.hasClass("__preventColButtons")) return;
				$(rowWrapper).children("button.btnAddControl").remove();
				const rowColumns = $(rowWrapper).children(colWrapperClassSelector);
				rowColumns.each((i, elem) => {
					const colWrapper = $(elem);
					colWrapper.addClass("colWithInsertButtons");
					if (rowColumns.index(colWrapper) === 0) $(`<button type="button" class="formbuilder-icon-plus btnAddControl ${h.getRowClass(colWrapper.parent().attr("class"))}" prepend="true" style='visibility: ${hide ? "hidden" : "visible"}'></button>`).insertBefore(colWrapper);
					$(`<button type="button" class="formbuilder-icon-plus btnAddControl ${h.getRowClass(colWrapper.parent().attr("class"))}" appendAfter="${colWrapper.attr("id")}" style='visibility: ${hide ? "hidden" : "visible"}'></button>`).insertAfter(colWrapper);
				});
			}
			function removeColumnInsertButtons(rowWrapper) {
				rowWrapper.find("button.btnAddControl").remove();
				rowWrapper.find(colWrapperClassSelector).removeClass("colWithInsertButtons");
			}
			function hideColumnInsertButtons(rowWrapper) {
				rowWrapper.find("button.btnAddControl").css("visibility", "hidden");
			}
			function prepareFieldRow(data) {
				if (!enhancedBootstrapEnabled()) return {};
				const result = h.tryParseColumnInfo(data);
				if (!result.rowUniqueId) {
					if (insertingNewControl && insertTargetIsColumn) result.rowUniqueId = h.getRowValue($targetInsertWrapper.attr("class"));
					else {
						let nextRow;
						if (formRows.length === 0) nextRow = 1;
						else {
							const numericalRows = formRows.filter((value) => !isNaN(value) && !isNaN(parseInt(value))).map((str) => parseInt(str));
							nextRow = Math.max(...numericalRows, 0) + 1;
						}
						result.rowUniqueId = nextRow.toString();
					}
					result.columnSize = opts.defaultGridColumnClass;
					if (!data.className) data.className = "";
					data.className += ` row-${result.rowUniqueId} ${result.columnSize}`;
					result.addedDefaultColumnClass = true;
				}
				if (!formRows.includes(result.rowUniqueId)) formRows.push(result.rowUniqueId);
				return result;
			}
			const selectFieldOptions = function(optionGroupName, optionData, multipleSelect) {
				const optionTemplate = {
					selected: false,
					label: "",
					value: ""
				};
				const optionInputType = { selected: multipleSelect ? "checkbox" : "radio" };
				const optionInputTypeMap = {
					boolean: (value, prop) => {
						const attrs = {
							value,
							type: optionInputType[prop] || "checkbox"
						};
						if (value) attrs.checked = !!value;
						attrs.name = optionGroupName;
						return [
							"input",
							null,
							attrs
						];
					},
					number: (value) => [
						"input",
						null,
						{
							value,
							type: "number"
						}
					],
					string: (value, prop) => [
						"input",
						null,
						{
							value,
							type: "text",
							placeholder: import_mi18n_min.default.get(`placeholder.${prop}`) || ""
						}
					],
					array: (values) => ["select", values.map(({ label, value }) => m("option", label, { value }))],
					object: ({ tag, content, ...attrs }) => [
						tag,
						content,
						attrs
					]
				};
				optionData = {
					...optionTemplate,
					...optionData
				};
				const optionInputs = Object.entries(optionData).map(([prop, val]) => {
					const [tag, content, attrs] = optionInputTypeMap[getContentType(val)](val, prop);
					const optionClassName = `option-${prop} option-attr`;
					attrs["data-attr"] = prop;
					attrs.className = attrs.className ? `${attrs.className} ${optionClassName}` : optionClassName;
					return m(tag, content, attrs);
				});
				const removeAttrs = {
					className: `remove btn ${css_prefix_text}cancel`,
					title: import_mi18n_min.default.get("removeMessage")
				};
				optionInputs.push(m("a", null, removeAttrs));
				return m("li", optionInputs);
			};
			const cloneItem = function cloneItem(currentItem) {
				data.lastID = h.incrementId(data.lastID);
				CheckTinyMCETransition(currentItem);
				const currentId = currentItem.attr("id");
				const type = currentItem.attr("type");
				const cloneName = nameAttr({ type });
				const $clone = currentItem.clone();
				$(".fld-name", $clone).val(cloneName);
				$clone.find("[id]").each((i, elem) => {
					elem.id = elem.id.replace(currentId, data.lastID);
				});
				$clone.find("[for]").each((index, elem) => {
					const newForId = elem.getAttribute("for").replace(currentId, data.lastID);
					elem.setAttribute("for", newForId);
				});
				currentItem.find("select").each(function(i) {
					const select = this;
					$clone.find("select").eq(i).val($(select).val());
				});
				$clone.attr("id", data.lastID);
				$clone.attr("name", cloneName);
				$clone.addClass("cloned");
				const sortableOptions = $(".sortable-options", $clone);
				sortableOptions.find(".option-selected").attr("name", nameAttr({ type: "grp-options" }) + "-options");
				sortableOptions.sortable();
				if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onclone) opts.typeUserEvents[type].onclone($clone[0]);
				else if (opts.typeUserEvents["*"] && opts.typeUserEvents["*"].onclone) opts.typeUserEvents["*"].onclone($clone[0]);
				return $clone;
			};
			const saveAndUpdate = (evt) => {
				if (evt) {
					if ([({ type, target }) => type === "keyup" && target.name === "className"].some((typeCondition) => typeCondition(evt))) return false;
					UpdatePreviewAndSave($(evt.target).closest(".form-field"));
				}
			};
			const previewSelectors = [
				".form-elements input",
				".form-elements select",
				".form-elements textarea",
				".form-elements [contenteditable]"
			].join(", ");
			$stage.on("input", previewSelectors, (0, import_throttle.default)(saveAndUpdate, 333, { leading: false }));
			$stage.on("click touchstart", ".remove", (e) => {
				const $field = $(e.target).parents(".form-field:eq(0)");
				const field = $field[0];
				const type = field.getAttribute("type");
				const $option = $(e.target.parentElement);
				e.preventDefault();
				if (field.querySelector(".sortable-options").childNodes.length <= 2 && !type.includes("checkbox")) opts.notify.error("Error: " + import_mi18n_min.default.get("minOptionMessage"));
				else $option.slideUp("250", () => {
					$option.remove();
					UpdatePreviewAndSave($field);
				});
			});
			$stage.on("touchstart", "input", (e) => {
				const $input = $(e.target);
				if (e.handled !== true) if ($input.attr("type") === "checkbox") $input.trigger("click");
				else {
					$input.focus();
					const fieldVal = $input.val();
					$input.val(fieldVal);
				}
				else return false;
			});
			$stage.on("click touchstart", ".toggle-form, .close-field", function(e) {
				e.stopPropagation();
				e.preventDefault();
				if (e.handled !== true) {
					const targetID = $(e.target).parents(".form-field:eq(0)").attr("id");
					h.toggleEdit(targetID);
					e.handled = true;
				} else return false;
			});
			$stage.on("dblclick", "li.form-field", (e) => {
				if ([
					"select",
					"input",
					"label",
					"textarea",
					"a"
				].includes(e.target.tagName.toLowerCase()) || e.target.isContentEditable === true) return;
				e.stopPropagation();
				e.preventDefault();
				if (e.handled !== true) {
					const targetID = $(e.target).closest("li.form-field").attr("id");
					h.toggleEdit(targetID);
					e.handled = true;
				}
			});
			$stage.on("change", "[name=\"subtype\"]", (e) => {
				$(".value-wrap", $(e.target).closest("li.form-field")).toggle(e.target.value !== "quill");
			});
			$stage.on("change", "[name=\"name\"]", (e) => {
				const name = e.target.value;
				if (attributeWillClobber(name)) opts.notify.error("Potential for Dom Clobbering with field name " + name);
			});
			$stage.on("change", [
				".prev-holder input",
				".prev-holder select",
				".prev-holder textarea"
			].join(", "), (e) => {
				let prevOptions;
				if (e.target.classList.contains("other-option")) return;
				const field = closest(e.target, ".form-field");
				if ([
					"select",
					"checkbox-group",
					"radio-group"
				].includes(field.type)) {
					const options = field.getElementsByClassName("option-value");
					if (field.type === "select") forEach(options, (i) => {
						const selectedOption = options[i].parentElement.childNodes[0];
						selectedOption.checked = e.target.value === options[i].value;
					});
					else {
						prevOptions = document.getElementsByName(e.target.name);
						forEach(prevOptions, (i) => {
							if (prevOptions[i].classList.contains("other-option")) return;
							const selectedOption = options[i].parentElement.childNodes[0];
							selectedOption.checked = prevOptions[i].checked;
						});
					}
				} else {
					const fieldVal = document.getElementById("value-" + field.id);
					if (fieldVal) fieldVal.value = e.target.value;
				}
				h.save.call(h);
			});
			$stage.on("input", ".fld-label", ({ target }) => {
				const value = target.value || target.innerHTML;
				setElementContent(closest(target, ".form-field").querySelector(".field-label"), parsedHtml(value), config.opts.disableHTMLLabels);
			});
			$stage.on("keyup", "input.error", ({ target }) => $(target).removeClass("error"));
			$stage.on("keyup", "input[name=\"description\"]", function(e) {
				const $field = $(e.target).parents(".form-field:eq(0)");
				const closestToolTip = $(".tooltip-element", $field);
				const ttVal = $(e.target).val();
				if (ttVal !== "") if (!closestToolTip.length) {
					const tt = m("span", "?", {
						className: "tooltip-element",
						tooltip: ttVal
					});
					$(".field-label", $field).after(tt);
				} else closestToolTip.attr("tooltip", ttVal).css("display", "inline-block");
				else if (closestToolTip.length) closestToolTip.css("display", "none");
			});
			/**
			* Toggle multiple select options
			* @param  {Object} e click event
			* @return {string} newType
			*/
			$stage.on("change", ".fld-multiple", (e) => {
				const newType = e.target.checked ? "checkbox" : "radio";
				const $options = $(".option-selected", $(e.target).closest(".form-elements"));
				$options.each((i) => $options[i].type = newType);
				return newType;
			});
			$stage.on("blur", "input.fld-name", function(e) {
				e.target.value = safename(e.target.value);
				if (e.target.value === "") $(e.target).addClass("field-error").attr("placeholder", import_mi18n_min.default.get("cannotBeEmpty"));
				else $(e.target).removeClass("field-error");
			});
			$stage.on("blur", "input.fld-maxlength, input.fld-rows", (e) => {
				e.target.value = forceNumber(e.target.value);
			});
			$stage.on("click touchstart", ".btnAddControl", function(evt) {
				const btn = $(evt.currentTarget);
				cloneControls = $cbUL.clone();
				cloneControls.hover(function() {}, function() {
					cloneControls.remove();
				});
				cloneControls.on("click", "li", ({ target }) => {
					insertTargetIsColumn = true;
					insertingNewControl = true;
					$targetInsertWrapper = btn;
					const $control = $(target).closest("li");
					h.stopIndex = void 0;
					processControl($control);
					h.save.call(h);
					cloneControls.remove();
				});
				$stage.append(cloneControls);
				if (btn.index() == 0) cloneControls.css({
					position: "fixed",
					left: btn.offset().left,
					top: btn.offset().top - $(window).scrollTop()
				});
				else cloneControls.css({
					position: "fixed",
					left: btn.offset().left - 80,
					top: btn.offset().top - $(window).scrollTop()
				});
				const bottomOfClone = cloneControls.offset().top + cloneControls.outerHeight();
				const bottomOfScreen = $(window).scrollTop() + $(window).innerHeight();
				if (bottomOfClone > bottomOfScreen) cloneControls.css({ top: parseInt(cloneControls.css("top")) - (bottomOfClone - bottomOfScreen) });
			});
			$stage.on("click", `.${css_prefix_text}copy`, function(evt) {
				evt.preventDefault();
				const currentItem = $(evt.target).parent().parent("li");
				const $clone = cloneItem(currentItem);
				if (enhancedBootstrapEnabled()) prepareCloneWrappers($clone, currentItem);
				else $clone.insertAfter(currentItem);
				UpdatePreviewAndSave($clone);
				h.tmpCleanPrevHolder($clone.find(".prev-holder"));
				if (opts.editOnAdd) h.closeField(data.lastID, false);
			});
			if (enhancedBootstrapEnabled()) $stage.on("stageEmptied", () => {
				formRows = [];
			});
			/**
			* enhancedBootstrap feature helper post field clone
			* @param $clone
			* @param currentItem
			*/
			function prepareCloneWrappers($clone, currentItem) {
				const inputClassElement = $(`#className-${currentItem.attr("id")}`);
				const columnData = prepareFieldRow({});
				const rowWrapper = m("div", null, {
					id: `${$clone.attr("id")}-row`,
					className: `row row-${columnData.rowUniqueId} ${rowWrapperClass}`
				});
				const colWrapper = m("div", null, {
					id: `${$clone.attr("id")}-cont`,
					className: `${h.getBootstrapColumnClass(inputClassElement.val())} ${colWrapperClass}`
				});
				$(colWrapper).appendTo(rowWrapper);
				let insertAfterElement;
				if (currentItem.parent().is("div")) insertAfterElement = currentItem.closest(rowWrapperClassSelector);
				else if (currentItem.parent().is("ul")) insertAfterElement = currentItem;
				$(rowWrapper).insertAfter(insertAfterElement);
				$clone.appendTo(colWrapper);
				setupSortableRowWrapper(rowWrapper);
				ResetAllInvisibleRowPlaceholders();
				h.syncFieldWithNewRow($clone[0], $clone.closest(rowWrapperClassSelector)[0]);
			}
			$stage.on("click", ".delete-confirm", (e) => {
				e.preventDefault();
				const buttonPosition = e.target.getBoundingClientRect();
				const bodyRect = document.body.getBoundingClientRect();
				const coords = {
					pageX: buttonPosition.left + buttonPosition.width / 2,
					pageY: buttonPosition.top - bodyRect.top - 12
				};
				const deleteID = $(e.target).parents(".form-field:eq(0)").attr("id");
				const $field = $(document.getElementById(deleteID));
				document.addEventListener("modalClosed", function() {
					$field.removeClass("deleting");
				}, false);
				if (opts.fieldRemoveWarn) {
					const warnH3 = m("h3", import_mi18n_min.default.get("warning"));
					const warnMessage = m("p", import_mi18n_min.default.get("fieldRemoveWarning"));
					h.confirm([warnH3, warnMessage], () => h.removeField(deleteID), coords);
					$field.addClass("deleting");
				} else h.removeField(deleteID);
			});
			let gridMode = false;
			let gridModeTargetField;
			let gridModeStartX;
			let gridModeStartY;
			let wheelDelta = 0;
			$stage.on("click touchstart", ".grid-button", (e) => {
				e.preventDefault();
				const ID = $(e.target).parents(".form-field:eq(0)").attr("id");
				gridModeTargetField = $(document.getElementById(ID));
				gridModeStartX = e.pageX;
				gridModeStartY = e.pageY;
				wheelDelta = 0;
				toggleGridModeActive();
			});
			$stage.on("wheel", function(e) {
				if (e.originalEvent.deltaY === 0) return;
				if (gridMode) {
					e.preventDefault();
					wheelDelta += e.originalEvent.deltaY;
					const deltaPerShift = 120;
					if (wheelDelta > 0 && wheelDelta < deltaPerShift || wheelDelta < 0 && wheelDelta > -120) return;
					const parentCont = gridModeTargetField.closest("div");
					const currentColValue = h.getBootstrapColumnValue(parentCont.attr("class"));
					const change = Math.round(wheelDelta / deltaPerShift);
					wheelDelta = wheelDelta % deltaPerShift;
					const nextColSize = currentColValue + change;
					if (nextColSize > 12) {
						h.showToast("<b class=\"formbuilder-required\">Column Size cannot exceed 12</b>");
						return;
					}
					if (nextColSize < 1) {
						h.showToast("<b class=\"formbuilder-required\">Column Size cannot be less than 1</b>");
						return;
					}
					const rowWrapper = gridModeTargetField.closest(rowWrapperClassSelector);
					let totalRowValueCount = nextColSize;
					rowWrapper.children(`div${colWrapperClassSelector}`).each((i, elem) => {
						const fieldID = $(`#${elem.id}`).find("li").attr("id");
						if (fieldID != gridModeTargetField.attr("id")) totalRowValueCount += h.getBootstrapColumnValue($(`#${fieldID}-cont`).attr("class"));
					});
					if (totalRowValueCount > 12) {
						h.showToast("<b class=\"formbuilder-required\">There is a maximum of 12 columns per row</b>");
						return;
					}
					h.syncBootstrapColumnWrapperAndClassProperty(gridModeTargetField.attr("id"), nextColSize);
					gridModeTargetField.attr("manuallyChangedDefaultColumnClass", true);
					buildGridModeCurrentRowInfo();
					h.toggleHighlight(gridModeTargetField);
				}
			});
			$(document).keydown((e) => {
				if (gridMode) {
					e.preventDefault();
					const rowWrapper = gridModeTargetField.closest(rowWrapperClassSelector);
					switch (event.code) {
						case "KeyW":
						case "ArrowUp":
							removeColumnInsertButtons(rowWrapper);
							moveFieldUp(rowWrapper);
							break;
						case "KeyS":
						case "ArrowDown":
							removeColumnInsertButtons(rowWrapper);
							moveFieldDown(rowWrapper);
							break;
						case "KeyA":
						case "ArrowLeft":
							removeColumnInsertButtons(rowWrapper);
							moveFieldLeft();
							break;
						case "KeyD":
						case "ArrowRight":
							removeColumnInsertButtons(rowWrapper);
							moveFieldRight();
							break;
						case "KeyR":
							removeColumnInsertButtons(rowWrapper);
							autoSizeRowColumns(rowWrapper, true);
							setupColumnInserts(rowWrapper, true);
							break;
					}
					buildGridModeCurrentRowInfo();
					hideColumnInsertButtons(rowWrapper);
				}
			});
			function moveFieldUp(rowWrapper) {
				const previousRowSibling = rowWrapper.prevAll().not(tmpRowPlaceholderClassSelector).not(".form-prepend").first();
				if (previousRowSibling.length) {
					$(gridModeTargetField.parent().parent()).swapWith(previousRowSibling);
					h.toggleHighlight(gridModeTargetField);
				}
			}
			function moveFieldDown(rowWrapper) {
				const nextRowSibling = rowWrapper.nextAll().not(invisibleRowPlaceholderClassSelector).not(".form-append").first();
				if (nextRowSibling.length) {
					$(gridModeTargetField.parent().parent()).swapWith(nextRowSibling);
					h.toggleHighlight(gridModeTargetField);
				}
			}
			function moveFieldLeft() {
				const colSibling = gridModeTargetField.parent().prev();
				if (colSibling.length) gridModeTargetField.parent().after(colSibling);
				h.toggleHighlight(gridModeTargetField);
			}
			function moveFieldRight() {
				const colSibling = gridModeTargetField.parent().next();
				if (colSibling.length) gridModeTargetField.parent().before(colSibling);
				h.toggleHighlight(gridModeTargetField);
			}
			function autoSizeRowColumns(rowWrapper, force = false) {
				const childRowCount = rowWrapper.children(`div${colWrapperClassSelector}`).length;
				const newAutoCalcSizeValue = Math.floor(12 / childRowCount);
				rowWrapper.children(`div${colWrapperClassSelector}`).each((i, elem) => {
					const colWrapper = $(`#${elem.id}`);
					if (!force && colWrapper.find("li").attr("manuallyChangedDefaultColumnClass") == "true") {
						h.showToast(`Preserving column size of field ${i + 1} because you had personally adjusted it`, 4e3);
						return;
					}
					h.syncBootstrapColumnWrapperAndClassProperty(elem.id.replace("-cont", ""), newAutoCalcSizeValue);
				});
			}
			$(document).mousemove((e) => {
				if (gridMode && h.getDistanceBetweenPoints(gridModeStartX, gridModeStartY, e.pageX, e.pageY) > config.opts.cancelGridModeDistance) toggleGridModeActive(false);
			});
			$(document).on("checkRowCleanup", (event, data) => {
				checkRowCleanup();
				const rowWrapper = $(`#${data.rowWrapperID}`);
				if (rowWrapper.length) autoSizeRowColumns(rowWrapper, true);
			});
			$(document).on("fieldOpened", (event, data) => {
				const rowWrapper = $(`#${data.rowWrapperID}`);
				if (rowWrapper.length) hideColumnInsertButtons(rowWrapper);
			});
			/**
			* Checks rows after updates and performs the following
			*  - Remove empty column wrappers
			*  - Removes empty rows
			*/
			function checkRowCleanup() {
				$stage.find(colWrapperClassSelector).each((i, elem) => {
					const $colWrapper = $(elem);
					if ($colWrapper.is(":empty") && !formBuilder.preserveTempContainers.includes($colWrapper.attr("id"))) $colWrapper.remove();
				});
				$stage.children(rowWrapperClassSelector).not(tmpRowPlaceholderClassSelector).each((i, elem) => {
					if ($(elem).children(colWrapperClassSelector).length === 0) {
						const rowValue = h.getRowValue($(elem).attr("class"));
						formRows = formRows.filter((x) => x !== rowValue);
						$(elem).remove();
					} else setupColumnInserts($(elem), true);
				});
			}
			function toggleGridModeActive(active = true) {
				if (active) {
					gridMode = true;
					h.showToast("Starting Grid Mode - Use the mousewheel to resize.", 1500);
					$cbUL.css("display", "none");
					$(d.formActions).css("display", "none");
					buildGridModeHelp();
					h.closeAllEdit();
					h.toggleHighlight(gridModeTargetField);
					hideInvisibleRowPlaceholders();
				} else {
					h.showToast("Grid Mode Finished", 1500);
					const rowWrapper = gridModeTargetField.closest(rowWrapperClassSelector);
					let totalRowValueCount = 0;
					rowWrapper.children(`div${colWrapperClassSelector}`).each((i, elem) => {
						const fieldID = $(`#${elem.id}`).find("li").attr("id");
						totalRowValueCount += h.getBootstrapColumnValue($(`#${fieldID}-cont`).attr("class"));
					});
					if (totalRowValueCount > 12) autoSizeRowColumns(rowWrapper, true);
					gridMode = false;
					gridModeTargetField = null;
					$(gridModeHelp).empty();
					$cbUL.css("display", "unset");
					$(d.formActions).css("display", "unset");
				}
			}
			function buildGridModeHelp() {
				$(gridModeHelp).html(`
    <div style='padding:5px'>
      <h3 class="text text-center">Grid Mode</h3>

      <table style='border-spacing:7px;border-collapse: separate'>
        <thead>
          <tr>
            <th>Action</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><kbd>MOUSEWHEEL</kbd></td>
            <td>Adjust the field column size</td>
          </tr>
          <tr>
            <td><kbd>W or &#x2191;</kbd></td>
            <td>Move entire row up</td>
          </tr>
          <tr>
              <td><kbd>S or &#x2193;</kbd></td>
              <td>Move entire row down</td>
          </tr>
          <tr>
              <td><kbd>A or &#x2190;</kbd></td>
              <td>Move field left within the row</td>
          </tr>
          <tr>
              <td><kbd>D or &#x2192;</kbd></td>
              <td>Move field right within the row</td>
          </tr>
          <tr>
            <td><kbd>R</kbd></td>
            <td>Resize all fields within the row to be maximally equal</td>
          </tr>
          <tr>
        </tbody>
      </table>

      <h5 class="text text-center" style='padding-top:10px'>Current Row Fields</h5>

      <table class='gridHelpCurrentRow'>
        <colgroup>
          <col width="100%" />
          <col width="0%" />
        </colgroup>

        <thead>
          <tr>
            <th>Field</th>
            <th>Size</th>
          </tr>
        </thead>

        <tbody>
        </tbody>
      </table>

    </div>
    `);
				buildGridModeCurrentRowInfo();
			}
			function buildGridModeCurrentRowInfo() {
				$(gridModeHelp).find(".gridHelpCurrentRow tbody").empty();
				gridModeTargetField.closest(rowWrapperClassSelector).children(`div${colWrapperClassSelector}`).each((i, elem) => {
					const fieldID = $(`#${elem.id}`).find("li").attr("id");
					const field = $(`#${fieldID}`);
					const fieldType = field.attr("type");
					let label = $(`#label-${fieldID}`).html();
					if (fieldType === "hidden" || fieldType === "paragraph") label = $(`#name-${fieldID}`).val();
					if (!label) label = field.attr("id");
					let currentFieldClass = "";
					if (gridModeTargetField.attr("id") === fieldID) currentFieldClass = "currentGridModeFieldHighlight";
					$(gridModeHelp).find(".gridHelpCurrentRow tbody").append(`
        <tr>
          <td class='grid-mode-help-row1 ${currentFieldClass}'>${label}</td>
          <td class='grid-mode-help-row2 ${currentFieldClass}'>
            ${h.getBootstrapColumnValue($(`#${fieldID}-cont`).attr("class"))}
          </td>
        <tr>
      `);
				});
			}
			$stage.on("click", ".field-actions .sort-button", function(evt) {
				evt.preventDefault();
				const currentItem = $(evt.target).parent().parent("li");
				let swap;
				if ($(evt.target).hasClass("sort-button-higher")) {
					swap = currentItem.prev("li");
					if (swap.length && !swap.hasClass("form-prepend")) currentItem.insertBefore(swap);
				} else {
					swap = currentItem.next("li");
					if (swap.length && !swap.hasClass("form-append")) currentItem.insertAfter(swap);
				}
				h.toggleHighlight(currentItem);
				h.save.call(h);
			});
			$stage.on("click", ".style-wrap button", (e) => {
				const $button = $(e.target);
				const $attrsWrap = $button.closest(".form-elements");
				const styleVal = $button.val();
				const $btnStyle = $(".btn-style", $attrsWrap);
				$btnStyle.val(styleVal);
				$button.siblings(".btn").removeClass("selected");
				$button.addClass("selected");
				UpdatePreviewAndSave($btnStyle.closest(".form-field"));
			});
			$stage.on("click", ".fld-required", (e) => {
				$(e.target).closest(".form-field").find(".required-asterisk").toggle();
			});
			$stage.on("click", "input.fld-access", function(e) {
				const roles = $(e.target).closest(".form-field").find(".available-roles");
				const enableRolesCB = $(e.target);
				roles.slideToggle(250, function() {
					if (!enableRolesCB.is(":checked")) $("input[type=checkbox]", roles).removeAttr("checked");
				});
			});
			$stage.on("click", ".add-opt", function(e) {
				e.preventDefault();
				const type = $(e.target).closest(".form-field").attr("type");
				const fieldName = $(e.target).closest(".form-group.field-options").attr("name");
				const $optionWrap = $(e.target).closest(".field-options");
				const $multiple = $("[name=\"multiple\"]", $optionWrap);
				const $firstOption = $(".option-selected:eq(0)", $optionWrap);
				const isMultiple = $multiple.length ? $multiple.prop("checked") : $firstOption.attr("type") === "checkbox";
				const optionTemplate = {
					selected: false,
					label: "",
					value: ""
				};
				const $sortableOptions = $(".sortable-options", $optionWrap);
				const optionData = config.opts.onAddOption(optionTemplate, {
					type,
					index: $sortableOptions.children().length,
					isMultiple,
					fieldName
				});
				$sortableOptions.append(selectFieldOptions($firstOption.attr("name"), optionData, isMultiple));
				UpdatePreviewAndSave($(e.target).parents(".form-field:eq(0)"));
			});
			$stage.on("mouseover mouseout", ".remove, .del-button", (e) => $(e.target).closest("li").toggleClass("delete"));
			loadFields();
			if (opts.disableInjectedStyle === true) {
				const styleTags = document.getElementsByClassName("formBuilder-injected-style");
				forEach(styleTags, (i) => remove(styleTags[i]));
			} else if (opts.disableInjectedStyle === "bootstrap") d.editorWrap.classList.remove("formbuilder-embedded-bootstrap");
			$stage[0].dispatchEvent(new Event("loaded", {
				bubbles: true,
				cancelable: false
			}));
			formBuilder.actions = {
				getFieldTypes: (activeOnly) => activeOnly ? subtract(controls.getRegistered(), opts.disableFields) : controls.getRegistered(),
				clearFields: () => h.removeAllFields(d.stage),
				showData: h.showData.bind(h),
				save: (minify) => {
					const formData = h.save(minify);
					const formDataJS = window.JSON.parse(formData);
					config.opts.onSave(formDataJS);
					return formDataJS;
				},
				addField: (field, index) => {
					h.stopIndex = data.formData.length ? index : void 0;
					prepFieldVars(field);
				},
				removeField: h.removeField.bind(h),
				getData: h.getFormData.bind(h),
				generateAdvFields: (values) => generateAdvFields(control.stringifyJsonAttrs({ ...values })),
				getAttrVals: (node) => h.getAttrVals(node),
				updatePreview: ($node) => h.updatePreview($node),
				setData: (formData) => {
					h.stopIndex = void 0;
					h.removeAllFields(d.stage);
					loadFields(formData);
				},
				setLang: (locale) => {
					return import_mi18n_min.default.setCurrent.call(import_mi18n_min.default, locale).then(() => {
						d.stage.dataset.content = import_mi18n_min.default.get("getStarted");
						controls.init();
						d.empty(d.formActions);
						h.formActionButtons().forEach((button) => d.formActions.appendChild(button));
					});
				},
				showDialog: h.dialog.bind(h),
				toggleFieldEdit: (fieldId) => {
					(Array.isArray(fieldId) ? fieldId : [fieldId]).forEach((fId) => {
						if (!["number", "string"].includes(typeof fId)) return;
						if (typeof fId === "number") fId = d.stage.children[fId].id;
						else if (!/^frmb-/.test(fId)) fId = d.stage.querySelector(fId).id;
						h.toggleEdit(fId);
					});
				},
				toggleAllFieldEdit: () => {
					forEach(d.stage.children, (index) => {
						h.toggleEdit(d.stage.children[index].id);
					});
				},
				closeAllFieldEdit: h.closeAllEdit.bind(h),
				getCurrentFieldId: () => {
					return data.lastID;
				}
			};
			d.onRender(d.controls, () => {
				const onRenderTimeout = setTimeout(() => {
					d.stage.style.minHeight = `${d.controls.clientHeight}px`;
					clearTimeout(onRenderTimeout);
				}, 0);
			});
			return formBuilder;
		}
		var pluginInit = function(options, elem) {
			const _this = this;
			const { i18n, ...opts } = jQuery.extend({}, defaultOptions, options, true);
			this.i18nOpts = jQuery.extend({}, defaultI18n, i18n, true);
			const notInitialised = () => {
				console.error("formBuilder is still initialising");
				console.info("See https://formbuilder.online/docs/formBuilder/actions/getData/#wont-work and https://formbuilder.online/docs/formBuilder/promise/ for more information on formBuilder asynchronous loading");
			};
			const actionList = [
				"getFieldTypes",
				"addField",
				"clearFields",
				"closeAllFieldEdit",
				"getData",
				"removeField",
				"save",
				"setData",
				"setLang",
				"showData",
				"showDialog",
				"toggleAllFieldEdit",
				"toggleFieldEdit",
				"getCurrentFieldId"
			];
			this.instance = {
				actions: actionList.reduce((actions, currentAction) => {
					actions[currentAction] = notInitialised;
					return actions;
				}, {}),
				markup,
				get formData() {
					return _this.instance.actions.getData !== notInitialised && _this.instance.actions.getData("json");
				},
				promise: new Promise(function(resolve, reject) {
					import_mi18n_min.default.init(_this.i18nOpts).then(() => {
						const formBuilder = new FormBuilder(opts, elem[0], jQuery);
						jQuery(elem[0]).data("formBuilder", formBuilder);
						Object.assign(_this.instance, formBuilder.actions);
						_this.instance.actions = formBuilder.actions;
						delete _this.instance.promise;
						resolve(_this.instance);
					}).catch((err) => {
						reject(err);
						opts.notify.error(err);
					});
				})
			};
		};
		jQuery.fn.formBuilder = function(methodOrOptions = {}, ...args) {
			if (typeof methodOrOptions === "string") {
				const instance = this.data("fbInstance");
				if (instance[methodOrOptions]) {
					if (typeof instance[methodOrOptions] === "function") return instance[methodOrOptions].apply(this, args);
					return instance[methodOrOptions];
				}
			} else {
				const plugin = new pluginInit(methodOrOptions, this);
				this.data("fbInstance", plugin.instance);
				return plugin.instance;
			}
		};
		//#endregion
	});
})(jQuery);
